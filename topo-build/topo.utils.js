/**
 * @file topo.utils.js
 * @description 通用工具函数：数学辅助、Canvas 路径绘制、边路由、箭头计算。
 *              所有函数均为纯函数，不依赖任何外部状态。
 */

// ─── 数学辅助 ──────────────────────────────────────────────────────────────────

/**
 * 将值 v 限制在 [a, b] 区间内。
 * @param {number} v  输入值
 * @param {number} a  下限
 * @param {number} b  上限
 * @returns {number}
 */
export function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

// ─── 端点解析 ──────────────────────────────────────────────────────────────────

/**
 * 解析 "nodeId:portId" 或 "nodeId" 格式的端点字符串。
 * @param {string} ep  端点字符串，例如 "svcA:http" 或 "gw"
 * @returns {{ nodeId: string, portId: string | null }}
 */
export function parseEndpoint(ep) {
  const [nodeId, portId] = ep.split(":");
  return { nodeId, portId: portId || null };
}

// ─── Canvas 绘制工具 ───────────────────────────────────────────────────────────

/**
 * 在 Canvas 上绘制圆角矩形路径（不自动 stroke/fill）。
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x   左上角 X
 * @param {number} y   左上角 Y
 * @param {number} w   宽度
 * @param {number} h   高度
 * @param {number} r   圆角半径
 */
export function roundRectPath(ctx, x, y, w, h, r) {
  // 防止圆角超过矩形最短边的一半
  const rr = Math.max(0, Math.min(r, Math.min(w, h) / 2));
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y,     x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x,     y + h, rr);
  ctx.arcTo(x,     y + h, x,     y,     rr);
  ctx.arcTo(x,     y,     x + w, y,     rr);
  ctx.closePath();
}

/**
 * 测量字符串在 Canvas 中渲染后的宽度（可临时切换字体）。
 * @param {CanvasRenderingContext2D} ctx
 * @param {string} text  待测量文本
 * @param {string} [font] 可选字体，测量后恢复原字体
 * @returns {number} 文本渲染宽度（px）
 */
export function measureText(ctx, text, font) {
  const old = ctx.font;
  if (font) ctx.font = font;
  const m = ctx.measureText(text);
  ctx.font = old;
  return m.width;
}

// ─── 边路由 ────────────────────────────────────────────────────────────────────

/**
 * 计算两点之间的折线路由路径。
 * - 水平距离较大时使用「S 形」两段折线（带控制点）。
 * - 水平距离较小时使用竖向过渡的直角折线，避免连线重叠。
 * @param {{ x:number, y:number }} p1  起点（世界坐标）
 * @param {{ x:number, y:number }} p2  终点（世界坐标）
 * @returns {{ x:number, y:number }[]} 折线顶点数组
 */
export function routeEdge(p1, p2) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  // 控制点水平偏移量，与 dx 成正比，限制在 [40, 120]
  const k = Math.min(120, Math.max(40, Math.abs(dx) * 0.35));
  const m1 = { x: p1.x + Math.sign(dx || 1) * k, y: p1.y };
  const m2 = { x: p2.x - Math.sign(dx || 1) * k, y: p2.y };

  if (Math.abs(dx) < 60) {
    // 水平距离过小：改用竖向过渡折线
    return [
      p1,
      { x: p1.x, y: p1.y + dy * 0.5 },
      { x: p2.x, y: p1.y + dy * 0.5 },
      p2
    ];
  }
  return [p1, m1, m2, p2];
}

// ─── 箭头 ──────────────────────────────────────────────────────────────────────

/**
 * 计算箭头三角形的三个顶点。
 * @param {{ x:number, y:number }} pFrom  箭头前一个路径点（决定方向）
 * @param {{ x:number, y:number }} pTo    箭头顶点（连线末端）
 * @param {number} size  箭头大小（边长，世界坐标单位）
 * @returns {{ x:number, y:number }[]}  [顶点, 左翼, 右翼]
 */
export function arrowHead(pFrom, pTo, size) {
  const ang = Math.atan2(pTo.y - pFrom.y, pTo.x - pFrom.x);
  const a1 = ang + Math.PI * 0.85;
  const a2 = ang - Math.PI * 0.85;
  return [
    { x: pTo.x, y: pTo.y },
    { x: pTo.x + Math.cos(a1) * size, y: pTo.y + Math.sin(a1) * size },
    { x: pTo.x + Math.cos(a2) * size, y: pTo.y + Math.sin(a2) * size }
  ];
}
