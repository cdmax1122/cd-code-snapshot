# EarthEnergy — 全球储能站三维地球可视化

> 基于 **Three.js + Vue 3** 构建的储能站演示平台，以三维地球为核心，展示全球储能站分布、站点详情及能量传输飞线动画。

---

## 项目结构

```
ThreeEarthShow/
├── index.html                  # HTML 入口
├── vite.config.js              # Vite 构建配置
├── package.json
└── src/
    ├── main.js                 # Vue 应用挂载入口
    ├── App.vue                 # 根组件：布局框架、顶部导航、时钟
    ├── earth/                  # Three.js 场景层（与 Vue 解耦）
    │   ├── EarthScene.js       # 场景主入口：整合所有模块、渲染循环
    │   └── modules/
    │       ├── EarthCore.js    # 球体 + 大气层 + 云层 + 星空
    │       ├── FlyLines.js     # 飞线弧线 + 流光粒子动画
    │       ├── Markers.js      # 储能站位置标记（光柱 + 脉冲圆环）
    │       ├── Controls.js     # 鼠标/触摸交互：旋转、缩放、阻尼
    │       └── Lighting.js     # 场景光照配置
    ├── components/
    │   ├── EarthCanvas.vue     # Three.js canvas 的 Vue 桥接封装
    │   ├── StationPanel.vue    # 浮动信息面板（精确跟随球面标记）
    │   ├── StationList.vue     # 左侧站点列表
    │   └── StatsBar.vue        # 顶部统计栏
    ├── stores/
    │   └── earthStore.js       # Pinia 状态管理
    └── utils/
        ├── stationData.js      # 储能站数据 + 飞线配置
        └── geoUtils.js         # 经纬度转三维坐标工具
```

---

## 快速开始

```bash
npm install
npm run dev
```

浏览器访问 http://localhost:5173

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **Three.js** | r160+ | 3D 场景渲染、WebGL |
| **Vue 3** | 3.x | 响应式 UI，Composition API |
| **Pinia** | 2.x | 全局状态管理 |
| **Vite** | 5.x | 构建工具、HMR 开发服务器 |

---

## 核心实现

### 1. 程序化地球贴图

不依赖外部图片，用 **Canvas 2D API** 绘制海洋、大陆轮廓、经纬网格，生成 `THREE.CanvasTexture`，完全离线可用。

```js
// EarthCore.js — _buildEarthTexture()
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
// 绘制深海底色、大陆多边形、经纬网格线...
return new THREE.CanvasTexture(canvas)
```

### 2. 大气层边缘光 Shader

自定义 `ShaderMaterial`，`BackSide` 渲染，利用法线与视线夹角（菲涅尔近似）制造边缘发光效果：

```glsl
// fragment shader
float intensity = pow(0.65 - dot(vNormal, vec3(0,0,1.0)), 3.0);
gl_FragColor = vec4(0.1, 0.6, 1.0, 1.0) * intensity;
```

### 3. 飞线弧线 + 流光粒子

- 经纬度 → 三维球面坐标（`latLngToVector3`）
- 两端点取中点抬高 → `QuadraticBezierCurve3` 生成弧线
- 静态弧线用低透明度 `Line` 渲染
- 流光用 `ShaderMaterial Points`，拖尾点集逐帧沿曲线推进，alpha 线性衰减

```js
// FlyLines.js — update(delta)
item.progress = (item.progress + delta * speed) % 1
const headIdx = Math.floor(item.progress * total)
// 将拖尾 TRAIL 个点填入 BufferGeometry positions
```

### 4. HTML 面板精确定位

每帧将 Three.js 标记的世界坐标投影到屏幕坐标，写入 Pinia store；Vue 组件用 `computed` 响应式转换为 `position: fixed` 样式，面板自动跟随球面标记。

```js
// Markers.js — getScreenPositions(camera, width, height)
const pos = worldPos.clone().project(camera)
return {
  x: (pos.x * 0.5 + 0.5) * width,
  y: (-pos.y * 0.5 + 0.5) * height,
  visible: pos.z < 1,  // z>1 表示在摄像机背面，隐藏面板
}
```

```js
// StationPanel.vue — anchorStyle computed
const left = pos.x + OFFSET_X  // 标记右侧偏移
const top  = pos.y + OFFSET_Y  // 标记上方偏移
// 边界检测：靠近右侧边缘时自动切换到左侧
```

### 5. 模块化架构

Three.js 场景完全封装在 `earth/` 目录，通过回调函数与 Vue 通信：

```
EarthScene
  .onMarkerPositions(positions) → Pinia store → StationPanel 定位
  .onStationClick(stationId)   → Pinia store → 面板展开
```

Vue 层不直接操作 Three.js 对象，Three.js 层不感知 Vue，双向仅通过回调 + Pinia 解耦。

---

## 交互操作

| 操作 | 效果 |
|------|------|
| 鼠标左键拖拽 | 旋转地球 |
| 滚轮 | 缩放视距 |
| 点击发光标记 | 展开站点详情面板 |
| 点击左侧列表 | 