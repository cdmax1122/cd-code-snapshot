# Energy Dash

一个基于 `Vue 3 + Vite + Three.js + ECharts + Pinia` 的储能大屏监控系统示例项目。

## 功能概览

- 3D 旋转地球与站点标记
- 储能站到负荷中心的飞线流动效果
- 站点悬停/点击后的 HTML 浮层信息卡
- 实时功率曲线、SOC 环图、能量流向桑基图
- Pinia 驱动的模拟实时数据刷新
- 3D 世界坐标到 2D 屏幕坐标映射

## 启动方式

```bash
npm install
npm run dev
```

## 目录说明

- `src/components/Earth3D/`：Three.js 地球场景、标记点、飞线
- `src/components/Charts/`：ECharts 图表组件
- `src/composables/`：Three 场景、屏幕坐标、图表初始化封装
- `src/store/modules/`：设备与能量数据 store
- `src/utils/coordTransform.js`：经纬度转球面坐标、世界坐标转屏幕坐标
- `src/views/Dashboard.vue`：主大屏布局
