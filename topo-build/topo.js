/**
 * @file topo.js
 * @description 模块聚合入口。
 *
 * 项目模块结构：
 *   topo.config.js    —— JSDoc 类型定义 + 内置示例配置文本
 *   topo.utils.js     —— 纯工具函数（clamp、路径绘制、边路由、箭头等）
 *   topo.normalize.js —— 配置数据规范化（字段校验与默认值补全）
 *   topo.renderer.js  —— TopoCanvas 类（Canvas 渲染 + 交互事件）
 *   topo.main.js      —— UI 入口（DOM 绑定、配置加载、按钮事件）
 *
 * index.html 以 <script type="module"> 引用本文件，
 * 本文件只负责启动 main()，不包含任何业务逻辑。
 */

import { main } from "./topo.main.js";

main();
