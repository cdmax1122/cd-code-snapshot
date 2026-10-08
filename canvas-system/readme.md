# 2.5D 空间画布核心代码说明

## 运行 Pixi Demo

项目根目录已经配置 Vite，并安装 Pixi.js。执行：

```bash
npm install
npm run dev
```

然后访问：

```text
http://localhost:5173
```

Demo 源码和详细说明位于 `example/`。

## 这次做了什么

根据《2.5D 画布系统（MVP阶段）》设计文档，我实现了一套不依赖具体渲染引擎的 TypeScript 核心代码。

当前代码覆盖了 MVP 中最重要的链路：

```text
用户交互
  ↓
SpatialStore
  ↓
Scene / Camera
  ↓
SpatialProjector
  ↓
PixiSpatialRenderer
  ↓
具体 Pixi 视图
```

实现内容包括：

- 图片节点的创建、移动、缩放、旋转和空间深度；
- 场景中的节点与连接线管理；
- 摄像机平移、缩放和屏幕坐标/世界坐标转换；
- 节点选择、拖拽、画布平移和滚轮缩放；
- 基于空间坐标的投影与渲染排序；
- 节点命中测试；
- 场景快照与恢复；
- 不直接依赖 Pixi.js 的 Pixi 渲染适配接口；
- 将所有模块组合起来的 `SpatialCanvas` 应用入口。

这次没有引入：

- `package.json`、构建工具或项目脚手架；
- Pixi.js、Three.js 等第三方依赖；
- UI 面板、富文本、图层系统；
- 多人协作、插件系统、ECS；
- 真实 3D、物理和光照系统。

这是有意控制的范围，目的是先让核心模型和空间交互可供审阅。

## 目录结构

```text
src
├── types
│   ├── common.ts      # Point、Size 等通用类型
│   ├── node.ts        # Node 和 ImageNode 的输入、输出类型
│   └── index.ts       # 类型统一出口
├── core
│   ├── value-utils.ts # 默认值与基础数据校验
│   ├── node.ts        # Node 与 ImageNode
│   ├── edge.ts        # 节点关系
│   ├── scene.ts       # 场景管理与快照
│   └── camera.ts      # 摄像机与坐标转换
├── store
│   └── spatial-store.ts
├── interaction
│   └── canvas-controller.ts
├── renderer
│   ├── render-types.ts
│   ├── spatial-projector.ts
│   └── pixi
│       └── pixi-spatial-renderer.ts
├── spatial-canvas.ts
└── index.ts
```

## 各模块做了什么，为什么这样做

### Core：稳定的空间模型

`core` 只描述对象是什么、位于哪里，以及对象之间有什么关系。

#### `SpatialNode` 与 `ImageNode`

`Node` 提供所有空间对象共用的能力：

- 唯一 ID；
- `x / y / z` 空间位置；
- 缩放和旋转；
- 显示、锁定状态。

`ImageNode` 在此基础上增加：

- 图片资源地址；
- 图片在世界坐标中的基础显示尺寸；
- 图片位置所对应的归一化锚点。

`ImageNode` 不判断图片内容是 2D 还是 2.5D，也不保存倾斜或透视变形参数。默认锚点是图片中心 `(0.5, 0.5)`；如果某个具体素材需要用底部中心作为定位点，创建节点时可以显式传入 `{ x: 0.5, y: 1 }`。

锚点只定义 `transform.x/y` 对应图片内部的哪个位置，不代表图片属于哪种视觉风格。这样既不会修改图片内容，也让未来的文本、视频或 3D 模型节点可以沿用同一套空间模型，而不需要继承 `PIXI.Container`。

#### `Scene`

`Scene` 是整个空间世界的唯一事实来源，负责：

- 添加、查找、更新和删除节点；
- 添加和删除连接线；
- 检查连接线引用的节点是否存在；
- 删除节点时级联清理相关连接线；
- 发布场景变化；
- 输出和恢复纯数据快照。

把这些规则放在 Scene 中，可以避免渲染层、交互层各自维护一份节点关系，导致数据不一致。

#### `Camera`

`Camera` 保存用户如何观察世界，而不是修改 Scene 中的对象坐标。

它负责：

- 平移和缩放；
- 限制最小、最大缩放值；
- 以鼠标位置为中心缩放；
- 世界坐标和屏幕坐标互转；
- 根据 Z 值计算对象在屏幕上的抬升。

Z 是通用空间深度坐标，不描述图片内容。它不会自动改变图片大小；图片只受节点自己的 `scale` 和 Camera 的整体缩放影响。这样画布可以是无限世界坐标，窗口尺寸和缩放不会污染节点自身的数据。

### Store：统一数据流

`SpatialStore` 集中持有：

- `Scene`；
- `Camera`；
- 当前选中的节点；
- 全局变化版本；
- 状态变化订阅。

交互不会直接操作 Sprite，而是先修改 Store 中的数据。Store 变化后再触发投影和渲染。

这对应设计文档中的：

```text
Interaction → Store → Scene → Renderer
```

Store 还提供 `batch`，用于把一组连续修改合并为一次对外通知，方便未来处理批量移动或导入场景。

### Interaction：只解释用户输入

`CanvasController` 实现了：

- 点击节点进行单选；
- Shift 点击切换选择状态；
- 拖动节点；
- 在空白区域或使用中键/右键平移摄像机；
- 滚轮缩放；
- Pointer 取消和结束处理。

节点拖动时会先将屏幕坐标转换为世界坐标，再更新 `Node.transform`。因此摄像机缩放后拖动仍然使用正确的空间距离。

交互层通过 `NodeHitTester` 接口查询命中对象，不认识 Pixi Sprite。这使后续可以替换为 Pixi 命中测试、空间索引或其他渲染方案。

### SpatialProjector：把空间数据变成渲染数据

`SpatialProjector` 是 Core 与 Renderer 之间的转换层。

它把 Node 和 Camera 转换为只读的 `RenderFrame`，其中包含：

- 最终屏幕位置；
- 节点配置的图片锚点；
- 屏幕缩放；
- 旋转；
- 可选的阴影渲染数据；
- 是否被选中；
- 深度排序值；
- 连接线的屏幕端点。

系统不解析图片的视觉内容，只负责放置图片：

```text
任意图片（2D 或 2.5D 内容）
 ├── texture 提供原始像素
 ├── size 确定显示尺寸
 ├── anchor 确定定位基准
 └── transform 确定空间位置
```

图片不会被系统重新分类、`skew` 或进行透视拉伸。阴影也是默认关闭的可选 Renderer 效果，不属于 `ImageNode`。系统没有使用真实 3D 相机、Mesh 或光照，因为这些内容不属于当前 MVP。

### PixiSpatialRenderer：隔离 Pixi 依赖

`PixiSpatialRenderer` 没有导入 Pixi.js，而是依赖一个泛型 `PixiViewFactory`。

真正接入 Pixi 时，只需要在工厂中完成：

- 创建和更新 Sprite；
- 创建和更新 Graphics 连接线；
- 按需创建图片阴影；
- 将节点锚点设置到 Sprite；
- 更新位置、缩放、旋转和选中效果；
- 调整 Container 子节点顺序；
- 销毁 Pixi 对象。

适配器会处理节点和边的增量同步：

- 新数据创建视图；
- 已存在的数据更新视图；
- 已删除的数据销毁视图；
- 每帧重新应用深度顺序。

这么做的原因是 Pixi 只是当前渲染实现，不应该进入核心数据模型。未来接入 Three.js 时，可以复用 Core、Store 和 Interaction，只替换 Renderer。

### SpatialCanvas：应用级组合入口

`SpatialCanvas` 将以下对象组合起来：

- `SpatialStore`；
- `SpatialProjector`；
- `CanvasController`；
- `SpatialRenderer`。

它对外提供：

- `resize`；
- `pointerDown`；
- `pointerMove`；
- `pointerUp`；
- `wheel`；
- `renderNow`；
- `dispose`。

浏览器接入时可以把 `requestAnimationFrame` 作为 `schedule` 传入，从而把同一帧内的多次状态变化合并为一次渲染。

## 典型使用方式

下面的代码只展示核心对象如何组合，不包含 Pixi.js 的具体初始化：

```ts
import {
  Camera,
  Edge,
  ImageNode,
  Scene,
  SpatialCanvas,
} from "./src";

const scene = new Scene();

const tree = new ImageNode({
  id: "tree",
  texture: "tree.png",
});
tree.setPosition(100, 200, 20);

const house = new ImageNode({
  id: "house",
  texture: "house.png",
});
house.setPosition(420, 200);

scene.addNode(tree);
scene.addNode(house);

scene.addEdge(new Edge("tree-house", "tree", "house"));

const canvas = new SpatialCanvas({
  scene,
  camera: new Camera({
    viewport: { width: 1280, height: 720 },
  }),
  renderer: yourPixiRenderer,
  schedule: requestAnimationFrame,
});
```

DOM PointerEvent 接入时，只需要把坐标和按键转发给 `SpatialCanvas`：

```ts
canvas.pointerDown({
  pointerId: event.pointerId,
  button: event.button as 0 | 1 | 2,
  screen: { x: event.clientX, y: event.clientY },
  shiftKey: event.shiftKey,
});

canvas.pointerMove(event.pointerId, event.clientX, event.clientY);
canvas.pointerUp(event.pointerId);

canvas.wheel({
  screen: { x: event.clientX, y: event.clientY },
  deltaY: event.deltaY,
});
```

## 关键设计决定

### 为什么没有让 Node 继承 Pixi Container

如果 Node 继承 Pixi 类型，空间数据、业务状态和渲染对象就会绑定在一起：

- 无法直接更换 Three.js 或 Canvas Renderer；
- 保存场景时需要处理 Pixi 内部状态；
- 单元测试必须创建渲染环境；
- 交互与业务代码容易直接修改 Sprite，形成多个数据源。

当前实现让 Core 保持纯 TypeScript，渲染对象只存在于 Adapter 内。

### 为什么选择状态不放进 Node

选择是编辑器会话状态，不是空间对象本身的固有属性。

把选择状态放在 Store 中，可以避免：

- 场景序列化时意外保存临时选择；
- 多个编辑器视图无法拥有不同选择；
- Node 模型被 UI 状态持续扩张。

### 为什么渲染使用 RenderFrame

Renderer 不直接读取和修改 Scene，而是消费一次投影后的只读帧。

这样可以保证：

- 投影逻辑只有一个来源；
- Renderer 不承担业务计算；
- 渲染实现更容易测试和替换；
- 后续可以将帧传给 Worker 或远程渲染端。

### 为什么 ImageNode 不区分 2D 和 2.5D

2D 或 2.5D 描述的是图片像素呈现出来的视觉内容，不是图片节点的数据类型。对于空间系统来说，它们都是可以被定位、缩放和旋转的图片。

不对图片内容分类，可以避免：

- 为相同的图片能力创建重复节点类型；
- 根据视觉风格擅自改变图片像素；
- 将具体素材风格绑定到空间核心；
- 后续新增图片风格时不断修改 Node 模型。

## 已做验证

当前代码完成了以下检查：

- 所有 TypeScript 文件通过语法检查；
- 核心模块可以在无 Pixi、无 DOM 环境下加载；
- 初始场景能够生成完整渲染帧；
- 拖动节点会更新世界坐标；
- 删除节点会级联删除相关连接线；
- Pixi 适配器会创建、更新和销毁对应视图；
- `dispose` 会清理订阅和渲染资源。

当前环境没有现成的 `tsc`，因此没有执行完整的 TypeScript 类型编译，也没有为此安装依赖。

## 建议审阅顺序

建议按以下顺序审阅：

1. `src/core/node.ts`（先看 Node 基类，再看 ImageNode）
2. `src/core/scene.ts`
3. `src/core/camera.ts`
4. `src/store/spatial-store.ts`
5. `src/renderer/spatial-projector.ts`
6. `src/interaction/canvas-controller.ts`
7. `src/renderer/pixi/pixi-spatial-renderer.ts`
8. `src/spatial-canvas.ts`

优先确认 `Node / Scene / Camera` 的字段和职责是否符合长期方向。这三部分一旦稳定，Renderer、视觉参数和交互方式都可以继续快速迭代。

## 下一步

审阅通过后，可以进入真正的 Pixi 集成阶段：

1. 创建 Pixi Application 和根 Container；
2. 实现 `PixiViewFactory`；
3. 加载图片纹理并创建 Sprite；
4. 创建阴影和选中描边；
5. 绑定 DOM PointerEvent 和 WheelEvent；
6. 接入 `requestAnimationFrame`；
7. 增加针对 Core 和坐标转换的正式测试。
