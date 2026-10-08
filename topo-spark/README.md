# TopoSpark

TopoSpark 是一个数据驱动的通用拓扑图渲染引擎 MVP，实现了 PRD 与详细设计文档中的核心能力：

- 图片/SVG 节点渲染与状态样式
- 四锚点正交折线
- 虚线偏移、粒子流、纹理流三类动效
- 正向/反向流动与基于数值的速度映射
- 绝对定位优先、缺失坐标时自动层级布局
- 初始化与数据切换后的视口居中适配
- 节点 Hover Tooltip 与零编辑约束
- 光储一体化电站晴天/雨天验收场景

## 运行

```bash
npm install
npm run dev
```

访问 Vite 输出地址后打开 `/examples/energy-storage/`。

## 目录

- `src/`：核心拓扑引擎 SDK
- `examples/energy-storage/`：光储一体化电站业务验收示例
- `docs/`：PRD 与详细设计文档
