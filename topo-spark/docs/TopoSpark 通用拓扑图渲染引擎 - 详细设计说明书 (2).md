# TopoSpark 通用拓扑图渲染引擎 \- 详细设计说明书

## 0\. 物理目录结构设计



项目遵循核心引擎与业务场景物理隔离的原则，根目录采用全小写连字符命名规范 `topo-spark`。



```Plain Text
topo-spark/                        # 项目根目录 / GitHub 仓库名
├── package.json                   # "name": "topo-spark"
├── src/                           # 【核心引擎库】纯粹的通用拓扑图 SDK
|   |---theme/                     # 主题，视觉属性对照表
|   |   |--default-theme.js        # 默认主题
│   ├── core/                      # 核心引擎
│   │   ├── TopologyGraph.js       # 引擎主类，管理生命周期与主循环
│   │   └── Camera.js              # 视口控制，包含自适应居中
│   ├── components/                # 图元组件
│   │   ├── AbstractNode.js        # 节点抽象基类
│   │   ├── ImageNode.js           # 图片/SVG 节点实现
│   │   ├── AbstractEdge.js        # 连线抽象基类
│   │   └── smartEdge.js           # 正交折线连线实现
│   ├── animation/                 # 独立动画系统
│   │   ├── AnimationEngine.js     # 动画驱动器
│   │   ├── Animation.js           # 动画抽象基类
│   │   ├── DashFlowAnimation.js   # 动效一：虚线偏移流光
│   │   ├── ParticleFlowAnimation.js # 动效二：粒子流光
│   │   └── TextureFlowAnimation.js  # 动效三：纹理图案流光
│   ├── layout/                    # 布局算法
│   │   └── LayoutEngine.js        # 绝对定位优先，无坐标则触发 d3-hierarchy
│   ├── event/                     # 事件交互
│   │   └── EventBinder.js         # 鼠标事件、悬浮提示、零编辑约束
│   ├── utils/                     # 工具库
│   │   ├── ResourceLoader.js      # 图片资源预加载
│   │   └── MathUtil.js            # 几何/数学计算
│   ├── types/                     # 数据契约
│   │   └── Types.js               # 数据结构与常量定义
│   └── index.js                   # 引擎统一出口
└── README.md
```



---



## 1\. 核心引擎模块



### 1\.1 `TopologyGraph.js`

**职责**：引擎入口，管理生命周期、维护全局状态、驱动“动画更新 \-\> 画面渲染”的主循环。



```JavaScript
class TopologyGraph {
  constructor(domId) {
    this.canvas = document.getElementById(domId);
    this.ctx = this.canvas.getContext('2d');
    this.dpr = window.devicePixelRatio || 1;
    
    this.camera = new Camera(); 
    this.nodes = new Map();     
    this.edges = new Map();     
    
    this.animationEngine = new AnimationEngine();
    this.eventBinder = new EventBinder(this);
    
    this.isDirty = true;        
    this.lastFrameTime = 0;     
  }

  async loadData(rawJson) {
    const { nodes, edges } = await DataProvider.parse(rawJson, new ResourceLoader());
    this.nodes = nodes;
    this.edges = edges;
    
    LayoutEngine.layout(this.nodes, this.edges); // 1. 布局计算
    
    // 2. 视口自适应居中 (PRD 3.4)
    this.camera.fitToView(this.nodes, this.canvas.width, this.canvas.height);
    
    // 3. 注册动画 (根据数据映射动效类型)
    this.edges.forEach(edge => {
      if (edge.isActive) {
        // 策略可选：DashFlow / ParticleFlow / TextureFlow
        this.animationEngine.add(new DashFlowAnimation(edge)); 
      }
    });
    
    this.isDirty = true;
    this.start();
  }

  tick(timestamp) {
    const deltaTime = timestamp - this.lastFrameTime;
    this.lastFrameTime = timestamp;

    // 1. 动画引擎更新视觉状态包
    this.animationEngine.update(deltaTime);

    // 2. 清空画布并应用视口变换
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.ctx.scale(this.dpr, this.dpr);
    this.ctx.translate(this.camera.offsetX, this.camera.offsetY);
    this.ctx.scale(this.camera.zoom, this.camera.zoom);

    // 3. 被动渲染
    this.edges.forEach(edge => edge.draw(this.ctx));
    this.nodes.forEach(node => node.draw(this.ctx));

    this.ctx.restore();

    // 4. 循环控制
    if (this.animationEngine.animations.size > 0 || this.isDirty) {
      this.isDirty = false;
      requestAnimationFrame(this.tick.bind(this));
    }
  }
  
  start() {
    this.lastFrameTime = performance.now();
    requestAnimationFrame(this.tick.bind(this));
  }
}
```



### 1\.2 `Camera.js`

**职责**：维护画布平移和缩放状态，**包含自适应视口计算逻辑**。



```JavaScript
class Camera {
  constructor() {
    this.offsetX = 0;
    this.offsetY = 0;
    this.zoom = 1;
  }
  
  // PRD 3.4 居中适配：计算所有图元包围盒，缩放平移使其居中
  fitToView(nodes, canvasWidth, canvasHeight, padding = 50) {
    if (nodes.size === 0) return;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    nodes.forEach(node => {
      minX = Math.min(minX, node.x);
      minY = Math.min(minY, node.y);
      maxX = Math.max(maxX, node.x + node.w);
      maxY = Math.max(maxY, node.y + node.h);
    });
    const bboxW = maxX - minX, bboxH = maxY - minY;
    const zoomX = (canvasWidth - padding * 2) / bboxW;
    const zoomY = (canvasHeight - padding * 2) / bboxH;
    this.zoom = Math.min(zoomX, zoomY, 1.5); // 限制最大放大倍数
    this.offsetX = (canvasWidth - bboxW * this.zoom) / 2 - minX * this.zoom;
    this.offsetY = (canvasHeight - bboxH * this.zoom) / 2 - minY * this.zoom;
  }
}
```



---



## 2\. 图元组件模块



**设计原则**：严格区分数据模型属性与视觉状态包 \(`style`\)。`draw` 方法被动读取状态进行绘制。



### 2\.1 节点体系 \(`AbstractNode.js` \& `ImageNode.js`\)

- 抽象基础的属性和方法

- 具体实现通过继承方式

```JavaScript
import { DefaultTheme, mergeTheme } from "../theme/default-theme.js";

export class AbstractNode {
  constructor(*data* = {}) {
    this.id = *data*.id;
    *// 几何属性*
    this.x = *data*.x;
    this.y = *data*.y;
    this.w = *data*.w || *data*.width || 86;
    this.h = *data*.h || *data*.height || 72;
    *// 标签*
    this.label = *data*.label || "";
    *// 数据*
    this.data = *data*.data || {};
    *// 视觉属性*
    this.style = mergeTheme(DefaultTheme.node, *data*.style || {});
    *// 锚点*
    this.anchors = {};
    this.calculateAnchors();
  }

  *// 获取节点中心位置*
  **getCenter**() {
    return {
      x: this.x + this.w / 2,
      y: this.y + this.h / 2,
    };
  }

  *// 计算锚点位置*
  **calculateAnchors**() {
    this.anchors = {
      top: { x: this.x + this.w / 2, y: this.y },
      right: { x: this.x + this.w, y: this.y + this.h / 2 },
      bottom: { x: this.x + this.w / 2, y: this.y + this.h },
      left: { x: this.x, y: this.y + this.h / 2 },
    };
  }

  *// 获取锚点：包含动态锚点分布，以解决共线问题*
  **getAnchor**(*side*, *ratio* = 0.5) {
    const safeRatio = Math.max(0.12, Math.min(0.88, *ratio*));
    if (*side* === "top") return { x: this.x + this.w * safeRatio, y: this.y };
    if (*side* === "right")
      return { x: this.x + this.w, y: this.y + this.h * safeRatio };
    if (*side* === "bottom")
      return { x: this.x + this.w * safeRatio, y: this.y + this.h };
    return { x: this.x, y: this.y + this.h * safeRatio };
  }

  *// 判断位置是否在节点内*
  **containsPoint**(*x*, *y*) {
    return (
      *x* >= this.x && *x* <= this.x + this.w && *y* >= this.y && *y* <= this.y + this.h
    );
  }

  *// 子类实现具体绘制*
  **draw**(*ctx*) {
    throw new Error("AbstractNode.draw() must be implemented by subclasses.");
  }

  *// ----*
  *// 供给子类调用的基础能力*
  *// ----*

  *// 绘制圆角矩形路径 (内部辅助方法)*
  **_drawRoundedRectPath**(*ctx*, *x*, *y*, *width*, *height*, *radius*) {
    const r = Math.min(Math.max(0, *radius*), *width* / 2, *height* / 2);
    *ctx*.beginPath();
    *ctx*.moveTo(*x* + r, *y*);
    *ctx*.arcTo(*x* + *width*, *y*, *x* + *width*, *y* + *height*, r);
    *ctx*.arcTo(*x* + *width*, *y* + *height*, *x*, *y* + *height*, r);
    *ctx*.arcTo(*x*, *y* + *height*, *x*, *y*, r);
    *ctx*.arcTo(*x*, *y*, *x* + *width*, *y*, r);
    *ctx*.closePath();
  }

  *// 绘制基础背景与边框*
  **_drawBackground**(*ctx*) {
    const { background, border } = this.style;

    if (background.visible) {
      this._drawRoundedRectPath(
        *ctx*,
        this.x,
        this.y,
        this.w,
        this.h,
        background.borderRadius,
      );
      *ctx*.fillStyle = background.color;
      *ctx*.fill();
    }

    if (border.visible) {
      *// 如果背景不可见，这里需要单独开路径*
      if (!background.visible) {
        this._drawRoundedRectPath(
          *ctx*,
          this.x,
          this.y,
          this.w,
          this.h,
          background.borderRadius,
        );
      }
      *ctx*.lineWidth = border.width;
      *ctx*.strokeStyle = border.color;
      *ctx*.stroke();
    }
  }

  *// 绘制标签（默认在节点下方）*
  **_drawLabel**(*ctx*) {
    const labelStyle = this.style.label;
    if (!this.label || !labelStyle.visible) return;

    *ctx*.font = `${labelStyle.fontWeight} ${labelStyle.fontSize}px ${labelStyle.fontFamily}`;
    *ctx*.fillStyle = labelStyle.color;
    *ctx*.textAlign = "center";
    *ctx*.textBaseline = "top";
    *ctx*.fillText(
      this.label,
      this.x + this.w / 2,
      this.y + this.h + labelStyle.offsetY,
    );
  }
}

```



### 2\.2 连线体系 \(`AbstractEdge.js` \& `OrthogonalEdge.js`\)

**职责**：基于 4 锚点规则计算 Z 型正交折线

先抽象设计，再通过继承实现

```JavaScript
import { pointAtPolyline, polylineLength } from '../utils/MathUtil.js';
import { DefaultTheme, mergeTheme } from '../theme/DefaultTheme.js';

export class AbstractEdge {
  constructor(*data*, *sourceNode*, *targetNode*) {
    this.id = *data*.id;
    this.source = *sourceNode*;
    this.target = *targetNode*;
    this.sourceAnchor = *data*.sourceAnchor;
    this.targetAnchor = *data*.targetAnchor;
    this.label = *data*.label || '';
    
    this.isActive = Boolean(*data*.isActive);
    this.direction = *data*.direction || 'forward';
    this.speed = Number(*data*.speed || *data*.value || 0);
    this.effect = *data*.effect || 'dash'; *// 业务决定使用哪种动效：dash/texture/particle*
    
    this.pathPoints = [];
    this.totalLength = 0;
    this.routeMeta = null;
    
    *// 1. 静态视觉规范：深度合并业务配置*
    this.style = mergeTheme(DefaultTheme.edge, *data*.style || {});

    *// 2. 动画状态包：独立沙箱，供 AnimationEngine 安全修改*
    this.animState = {
      dashOffset: 0,
      textureOffset: 0,
      particles: [] *// [{ progress: 0~1, ... }]*
    };
  }

  **calculatePath**() {}

  **getPoint**(*progress*) {
    const p = this.direction === 'reverse' ? 1 - *progress* : *progress*;
    return pointAtPolyline(this.pathPoints, p);
  }

  **updateLength**() {
    this.totalLength = polylineLength(this.pathPoints);
  }

  *// 抽象方法*
  **draw**(*ctx*) {
    throw new Error('AbstractEdge.draw() must be implemented.');
  }
}
```



---



## 3\. 独立动画系统模块



**设计原则**：不污染图元根属性，基于时间差 `deltaTime` 更新 `style` 命名空间，保证不同帧率速度一致。



### 3\.1 引擎与基类

```JavaScript
class AnimationEngine {
  constructor() { this.animations = new Set(); }
  add(animation) { this.animations.add(animation); }
  update(deltaTime) {
    for (const anim of this.animations) {
      if (anim.isActive) anim.update(deltaTime); // 修改 target.style
    }
  }
}
```



### 3\.2 三种动效实现 \(对应 PRD 3\.2\)

1. **`DashFlowAnimation.js`**：修改 `style.dashOffset`。最轻量。

2. **`ParticleFlowAnimation.js`**：维护 `style.particles` 数组，更新粒子 `progress` \(0\~1\)。

3. **`TextureFlowAnimation.js`**：修改 `style.textureOffset`，配合 Canvas `createPattern` 绘制平铺纹理。

    

*\(以虚线流光为例：\)*

```JavaScript
class DashFlowAnimation extends Animation {
  constructor(edge) {
    super(edge);
    this.target.style.dashSegments = [10, 10];
    this.target.style.dashOffset = 0;
  }
  update(deltaTime) {
    if (!this.target.isActive) return;
    // PRD: 方向控制与速度映射
    const dir = this.target.direction === 'forward' ? 1 : -1;
    const velocity = this.target.speed * 0.1 * dir; 
    this.target.style.dashOffset += velocity * deltaTime;
  }
}
```



---



## 4\. 布局算法模块



### 4\.1 `LayoutEngine.js`

**职责**：PRD 3\.3 双轨布局处理。优先绝对定位，缺失坐标时使用 `d3-hierarchy` 自动计算层级树。



```JavaScript
import { hierarchy, tree } from 'd3-hierarchy';

class LayoutEngine {
  static layout(nodes, edges) {
    // 1. 绝对定位优先：检查是否所有节点都有有效 x, y
    const needLayout = [...nodes.values()].some(n => n.x === undefined || n.y === undefined);
    if (!needLayout) return;

    // 2. 自动布局：构建树结构 (寻找入度为0的根节点，如光伏阵列)
    // 交流母线会自然成为拥有多个 children 的分支节点
    // ... 构建 nodeMap 和 roots ...
    
    // 3. d3.tree 计算坐标 (水平树：从左到右)
    const root = hierarchy(roots[0]);
    const treeLayout = tree().nodeSize([80, 200]);
    treeLayout(root);

    // 4. 回写坐标至 Node 实例
    root.descendants().forEach(d => {
      const node = nodes.get(d.data.id);
      if (node) {
        node.x = d.y; node.y = d.x;
        node.calculateAnchors(); 
      }
    });
  }
}
```



---



## 5\. 事件交互模块 \(严格遵循 PRD 3\.5 约束\)



### 5\.1 `EventBinder.js`

**职责**：处理画布平移缩放；实现 Hover Tooltip；**严禁响应任何改变拓扑结构的拖拽操作**。



```JavaScript
class EventBinder {
  constructor(graph) {
    this.graph = graph;
    this.canvas = graph.canvas;
    this.tooltipEl = this.createTooltipEl(); // 创建 DOM 浮层
    this.isPanning = false; 
    this.bind();
  }

  onMouseDown(e) {
    // PRD 约束：严禁拖拽节点改变结构。
    // 统一将 mousedown 视为画布平移操作，不进行节点拾取拖拽。
    this.isPanning = true;
    this.lastMousePos = { x: e.clientX, y: e.clientY };
    this.canvas.style.cursor = 'grabbing';
  }

  onMouseMove(e) {
    if (this.isPanning) {
      // 画布平移逻辑...
    } else {
      // 悬浮检测逻辑
      const pos = this.screenToCanvas(e.clientX, e.clientY);
      let hoveredNode = null;
      for (const node of this.graph.nodes.values()) {
        if (node.containsPoint(pos.x, pos.y)) { hoveredNode = node; break; }
      }
      
      if (hoveredNode) {
        // 显示 Tooltip 并填充业务数据
        this.tooltipEl.style.display = 'block';
        this.tooltipEl.style.left = `${e.clientX + 10}px`;
        this.tooltipEl.style.top = `${e.clientY + 10}px`;
        this.tooltipEl.innerHTML = `状态: ${hoveredNode.data.status}`;
        this.canvas.style.cursor = 'pointer';
      } else {
        this.tooltipEl.style.display = 'none';
        this.canvas.style.cursor = 'default';
      }
    }
  }
}
```



---



## 6\. 业务特效层 \(独立于核心引擎\)



**设计原则**：天气降雨等业务特效属于纯视觉包装，采用双 Canvas 物理分层，由业务层 \(`examples/`\) 自行维护，核心引擎零侵入。



```JavaScript
// examples/energy-storage/effects/WeatherOverlay.js
class WeatherOverlay {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    // ... 独立的 requestAnimationFrame 循环管理
  }
  
  setScene(sceneType) {
    // 根据 "rainy" 或 "sunny" 初始化各自的粒子数组
  }
  
  // 独立的 tick 逻辑，与 TopoGraph 的主循环互不干扰
  // 绘制雨滴线条或晴天光斑，覆盖在拓扑画布之上
}
```



---



## 7\. PRD 验收标准 \(AC\) 映射说明



本设计完全覆盖 PRD 第 4 节的验收用例：



1. **静态拓扑与多分支布局**：`LayoutEngine` 支持绝对坐标优先，若无坐标自动触发 `d3-hierarchy`，能完美处理“交流母线”一入两出的多叉树结构。`OrthogonalEdge` 准确连接至 4 锚点。

2. **晴天高流速正向流动**：JSON 数据映射 `isActive: true, direction: "forward", speed: 8`，`DashFlowAnimation` 据此高速正向更新 `dashOffset`。

3. **雨天断流验证**：光伏支路 `isActive: false`，`AnimationEngine` 跳过该边更新，流光完全停止。

4. **雨天反向流动验证**：储能支路 `direction: "reverse"`，`DashFlowAnimation` 计算速度时取负值，流光视觉反转为从电池指向 PCS。

5. **视口自适应**：数据加载后 `Camera.fitToView()` 自动计算 6 节点包围盒，居中缩放展示。

6. **悬浮与零编辑**：`EventBinder` 的 Hover 逻辑准确拾取节点并显示 Tooltip；`onMouseDown` 强制绑定画布平移，完全屏蔽节点拖拽编辑。



你的这三个问题非常切中要害，尤其是在处理真实电气工程图纸与前端图形渲染的映射时，这些细节决定了系统的专业性和可用性。



以下是针对这三个问题的设计优化与说明，作为对详细设计文档 V3\.0 的补充与修订：



### 1\. 设备状态展示不明（业务状态 vs 通信状态）



**问题分析**：

将所有设备的状态混为一谈（如 `status: "charging"`）是不合理的。电池的“充放电”是其业务工作状态，而 PCS 或母线的“在线/离线”是通信链路状态。两者在视觉表现上应区分：通信离线应让整个设备置灰/闪烁告警；而业务工作状态（充放电）应通过附属的指示灯或光晕来表现。



**设计优化方案：状态维度拆分**



在《数据契约》中，将 `data.status` 拆分为 `commStatus` \(通信状态\) 和 `workStatus` \(业务工作状态\)。



- **数据模型调整**：

    ```JSON
    {
      "id": "bat_01",
      "data": {
        "commStatus": "online",    // 通信状态: online / offline / warning
        "workStatus": "charging"   // 业务状态: charging / discharging / standby / generating (视设备类型而定)
      }
    }
    ```

- **渲染层 \(****`ImageNode.js`****\) 逻辑调整**：

    1. **第一优先级判断 ****`commStatus`**：如果是 `offline`，整个图片绘制半透明灰色遮罩，且不渲染任何业务状态效果（因为通信都断了，业务状态无意义）。

    2. **第二优先级判断 ****`workStatus`**：如果通信在线，根据业务状态绘制不同的视觉反馈。例如，在节点底部绘制一个状态小圆点（充电\-绿色，放电\-蓝色，待机\-灰色），或者为充放电状态添加呼吸光晕动画。

        

---



### 2\. 连线允许一定角度倾斜直线



**问题分析**：

纯横平竖直的正交折线在某些拓扑布局下会显得非常生硬，且占用大量画布空间。允许小角度倾斜可以提升视觉柔和度。



**设计优化方案：混合路径生成策略 \(带阈值的角度判断\)**



在 `OrthogonalEdge.calculatePath()` \(建议将该类重命名为 `SmartEdge` 或在基类中扩展\) 中引入角度阈值判断逻辑。



- **算法逻辑**：

    1. 获取源节点中心 $S(x_1, y_1)$ 和目标节点中心 $T(x_2, y_2)$。

    2. 计算连线与水平方向的夹角 $\theta = \arctan(|\Delta y| / |\Delta x|)$。

    3. **设定阈值**：例如 $15^\circ$。

    4. **判断规则**：

        - 如果 $\theta \le 15^\circ$（趋近于水平）或 $\theta \ge 75^\circ$（趋近于垂直）：直接采用**直线连接**，连接点取节点边界与连线的交点（或直接取最近的中点锚点）。

        - 如果 $15^\circ < \theta < 75^\circ$：走之前的 **Z型正交折线**。

- **动效兼容**：无论是直线还是折线，最终都会生成一组 `pathPoints`。直线就是只有起点和终点的两个点。`DashFlowAnimation` 和 `ParticleFlowAnimation` 基于 `pathPoints` 的插值计算逻辑完全无需修改，天然兼容。

    

---



### 3\. 交流母线共线部分优化方案



**问题分析**：

如图所示，交流母线下接 PCS 和负载。如果两者都在母线右侧且 Y 坐标接近，使用正交折线会导致从母线右侧中点引出两条线，这两条线在水平方向会有一段重合（共线）。如果都有流光动画，重叠在一起视觉会非常混乱。



**方案对比与设计说明**：



- **方案1：共线部分不做方向（合并为干线）**

    - *思路*：算法识别出多条边共享一段路径，将其合并为一条“静态母线干线”，流光只在分支末端流动。

    - *评价*：实现复杂度极高，需要重构图模型引入“超边”或路径树概念。**MVP阶段不推荐**。

- **方案2：分别直连**

    - *思路*：不管共线，直接从母线中心点到目标节点中心点拉直线。

    - *评价*：会导致连线从母线节点内部穿出，视觉不专业。**不推荐**。

- **方案3（推荐方案）：动态锚点分布 \+ 平行偏移避让**

    - *设计说明*：

        1. **动态锚点分布**：当同一个节点（交流母线）有多个出线/入线时，引擎自动将锚点在边界上散开，而不是都挤在右侧中点。例如，母线右侧连出两条线，引擎自动将连接点分配在右侧边的 1/3 处和 2/3 处。

        2. **路径平行偏移**：如果计算出两条边的路径依然有交叉或重叠，在计算转折点时，人为给其中一条边加入一个微小的 Y 轴偏移量（例如偏移 10px），让两条线平行展开，互不干扰。

    - *评价*：代码实现量适中，视觉效果极佳，符合电气 CAD 软件的常规出图逻辑。

        

**算法实现要点 \(伪代码\)**：

```JavaScript
class SmartEdge extends AbstractEdge {
  calculatePath(allEdgesFromSameNode) {
    // 1. 如果当前边属于多条出线之一，动态计算锚点比例
    // 例如：母线有2条出线，当前是第1条，锚点 Y 坐标 = top + h * (1/3)
    
    // 2. 角度判断 (同问题2)
    if (isSmallAngle) {
      this.pathPoints = [startAnchor, endAnchor]; // 直线
    } else {
      // 3. 正交折线计算，加入防共线偏移量
      // 如果检测到与同源节点的其他边路径冲突，midX 或 midY 增加 offset
      this.pathPoints = [startAnchor, {x: midX + offset, y: startAnchor.y}, ...];
    }
  }
}
```



---

## 补充修订01



### 1\. 设备状态展示不明（业务状态 vs 通信状态）

问题分析：
将所有设备的状态混为一谈（如 `status: "charging"`）是不合理的。电池的“充放电”是其业务工作状态，而 PCS 或母线的“在线/离线”是通信链路状态。两者在视觉表现上应区分：通信离线应让整个设备置灰/闪烁告警；而业务工作状态（充放电）应通过附属的指示灯或光晕来表现。

设计优化方案：状态维度拆分

在《数据契约》中，将 `data.status` 拆分为 `commStatus` \(通信状态\) 和 `workStatus` \(业务工作状态\)。

- 数据模型调整：

```JSON
{
  "id": "bat_01",
  "data": {
    "commStatus": "online",    // 通信状态: online / offline / warning
    "workStatus": "charging"   // 业务状态: charging / discharging / standby / generating (视设备类型而定)
  }
}
```

- 渲染层 \(`ImageNode.js`\) 逻辑调整：

    1. 第一优先级判断 `commStatus`：如果是 `offline`，整个图片绘制半透明灰色遮罩，且不渲染任何业务状态效果（因为通信都断了，业务状态无意义）。

    2. 第二优先级判断 `workStatus`：如果通信在线，根据业务状态绘制不同的视觉反馈。例如，在节点底部绘制一个状态小圆点（充电\-绿色，放电\-蓝色，待机\-灰色），或者为充放电状态添加呼吸光晕动画。

---

### 2\. 连线允许一定角度倾斜直线

问题分析：

纯横平竖直的正交折线在某些拓扑布局下会显得非常生硬，且占用大量画布空间。允许小角度倾斜可以提升视觉柔和度。

设计优化方案：混合路径生成策略 \(带阈值的角度判断\)

在 `OrthogonalEdge.calculatePath()` \(建议将该类重命名为 `SmartEdge` 或在基类中扩展\) 中引入角度阈值判断逻辑。

- 算法逻辑：

    ```JSON
    获取源节点中心 
    *S*(*x*1,*y*1)
     和目标节点中心 
    *T*(*x*2,*y*2)
    。
    计算连线与水平方向的夹角 
    *θ*=arctan(∣Δ*y*∣/∣Δ*x*∣)
    。
    设定阈值：例如 
    15∘
    。
    判断规则：
    如果 
    *θ*≤15∘
    （趋近于水平）或 
    *θ*≥75∘
    （趋近于垂直）：直接采用直线连接，连接点取节点边界与连线的交点（或直接取最近的中点锚点）。
    如果 
    15∘<*θ*<75∘
    ：走之前的 Z型正交折线。
    ```

- 动效兼容：无论是直线还是折线，最终都会生成一组 `pathPoints`。直线就是只有起点和终点的两个点。`DashFlowAnimation` 和 `ParticleFlowAnimation` 基于 `pathPoints` 的插值计算逻辑完全无需修改，天然兼容。

---

### 3\. 交流母线共线部分优化方案

问题分析：

如图所示，交流母线下接 PCS 和负载。如果两者都在母线右侧且 Y 坐标接近，使用正交折线会导致从母线右侧中点引出两条线，这两条线在水平方向会有一段重合（共线）。如果都有流光动画，重叠在一起视觉会非常混乱。

方案对比与设计说明：

- 方案1：共线部分不做方向（合并为干线）

    - *思路*：算法识别出多条边共享一段路径，将其合并为一条“静态母线干线”，流光只在分支末端流动。

    - *评价*：实现复杂度极高，需要重构图模型引入“超边”或路径树概念。MVP阶段不推荐。

- 方案2：分别直连

    - *思路*：不管共线，直接从母线中心点到目标节点中心点拉直线。

    - *评价*：会导致连线从母线节点内部穿出，视觉不专业。不推荐。

- 方案3（推荐方案）：动态锚点分布 \+ 平行偏移避让

    - *设计说明*：

        1. 动态锚点分布：当同一个节点（交流母线）有多个出线/入线时，引擎自动将锚点在边界上散开，而不是都挤在右侧中点。例如，母线右侧连出两条线，引擎自动将连接点分配在右侧边的 1/3 处和 2/3 处。

        2. 路径平行偏移：如果计算出两条边的路径依然有交叉或重叠，在计算转折点时，人为给其中一条边加入一个微小的 Y 轴偏移量（例如偏移 10px），让两条线平行展开，互不干扰。

    - *评价*：代码实现量适中，视觉效果极佳，符合电气 CAD 软件的常规出图逻辑。

算法实现要点 \(伪代码\)：

```JavaScript
class SmartEdge extends AbstractEdge {
  calculatePath(allEdgesFromSameNode) {
    // 1. 如果当前边属于多条出线之一，动态计算锚点比例
    // 例如：母线有2条出线，当前是第1条，锚点 Y 坐标 = top + h * (1/3)
    
    // 2. 角度判断 (同问题2)
    if (isSmallAngle) {
      this.pathPoints = [startAnchor, endAnchor]; // 直线
    } else {
      // 3. 正交折线计算，加入防共线偏移量
      // 如果检测到与同源节点的其他边路径冲突，midX 或 midY 增加 offset
      this.pathPoints = [startAnchor, {x: midX + offset, y: startAnchor.y}, ...];
    }
  }
}
```

---

### 补充修订总结

基于以上三点，我们需要对 V3\.0 设计文档进行以下 Action 更新：

1. 更新 `Types.js`：节点 `data` 中明确 `commStatus` 和 `workStatus` 字段。

2. 更新 `ImageNode.js`：`drawStatusEffect` 方法改为优先判断 `commStatus` 决定遮罩，其次判断 `workStatus` 决定指示灯/光晕颜色。

3. 重构连线计算逻辑：将 `OrthogonalEdge` 升级为 `SmartEdge`，引入角度阈值（直线/折线混合）和多出线锚点分布及偏移算法，解决共线重叠问题。

4. 数据模型示例更新：在验收用的 JSON 数据中，为节点填入拆分后的状态字段（如母线只填 `commStatus: "online"`，电池填 `commStatus: "online", workStatus: "charging"`）。

