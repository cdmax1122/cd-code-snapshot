/**
 * @file topo.edge.js
 * @description 拓扑连线渲染类 TopoEdge。
 *
 * 功能：
 *   - 折线路由（S形 / 直角竖向）
 *   - 实心三角箭头
 *   - 边标签（带半透明背景）
 *   - 动效：dash（虚线偏移流动）/ dot（粒子水珠）
 *   - 两端节点均选中时高亮白色
 *
 * 使用方式（由 TopoCanvas._drawEdges 调用）：
 *   TopoEdge.draw(ctx, edge, { from, to, scale, bothSelected, theme, animTime });
 */

import { clamp, roundRectPath, measureText, routeEdge, arrowHead } from './topo.utils.js';

// ─── 路径长度 / 路径采样工具（内部使用）────────────────────────────────────────

/**
 * 计算折线路径的总长度。
 * @param {{x:number,y:number}[]} pts
 * @returns {number}
 */
function _pathLen(pts) {
  let len = 0;
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i].x - pts[i-1].x, dy = pts[i].y - pts[i-1].y;
    len += Math.sqrt(dx*dx + dy*dy);
  }
  return len;
}

/**
 * 沿折线路径采样距离为 d 处的坐标。
 * @param {{x:number,y:number}[]} pts
 * @param {number} d  距起点的路径距离
 * @returns {{x:number,y:number}}
 */
function _samplePath(pts, d) {
  let rem = d;
  for (let i = 1; i < pts.length; i++) {
    const dx  = pts[i].x - pts[i-1].x;
    const dy  = pts[i].y - pts[i-1].y;
    const seg = Math.sqrt(dx*dx + dy*dy);
    if (rem <= seg || i === pts.length - 1) {
      const t = seg > 0 ? rem / seg : 0;
      return { x: pts[i-1].x + dx * t, y: pts[i-1].y + dy * t };
    }
    rem -= seg;
  }
  return pts[pts.length - 1];
}

// ══════════════════════════════════════════════════════════════════
// TopoEdge
// ══════════════════════════════════════════════════════════════════

/**
 * 连线渲染类。所有方法均为静态，无需实例化。
 */
export class TopoEdge {

  /**
   * 绘制单条边。
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {import('./topo.config.js').EdgeConfig} edge   边配置
   * @param {object} opts
   * @param {{x:number,y:number}} opts.from       起点世界坐标
   * @param {{x:number,y:number}} opts.to         终点世界坐标
   * @param {number}  opts.scale                  视口缩放比
   * @param {boolean} opts.bothSelected           两端节点是否均被选中
   * @param {object}  opts.theme                  全局主题
   * @param {number}  opts.animTime               动画累积时间（ms）
   */
  static draw(ctx, edge, opts) {
    const { from, to, scale = 1, bothSelected = false, theme = {}, animTime = 0 } = opts;
    const et    = theme.edge || {};
    const style = edge.style || {};
    const anim  = edge.animation;
    const t     = animTime / 1000; // 秒

    // 解析颜色 / 线宽
    const baseStroke = style.stroke ?? et.stroke ?? 'rgba(56,189,248,0.7)';
    const drawStroke = bothSelected ? 'rgba(255,255,255,0.95)' : baseStroke;
    const lineWidth  = (style.width ?? et.width ?? 2) / scale;

    // 计算路由路径
    const path    = routeEdge(from, to);
    const pathLen = _pathLen(path);

    // ── 主线体 ──────────────────────────────────────────────────
    TopoEdge._drawLine(ctx, path, {
      stroke: drawStroke,
      width:  lineWidth,
      dash:   style.dash ?? [],
      anim,
      bothSelected,
      t,
      scale,
    });

    // ── dot 粒子动效 ────────────────────────────────────────────
    if (anim?.type === 'dot') {
      const dotColor = bothSelected ? 'rgba(255,255,255,0.95)' : (anim.color ?? baseStroke);
      TopoEdge._drawDots(ctx, path, pathLen, anim, dotColor, t, scale);
    }

    // ── 箭头 ────────────────────────────────────────────────────
    const arrowSize = (style.arrowSize ?? et.arrowSize ?? 9) / scale;
    TopoEdge._drawArrow(ctx, path, arrowSize, drawStroke);

    // ── 边标签 ──────────────────────────────────────────────────
    if (edge.label) {
      const labelColor = style.text ?? et.text ?? 'rgba(226,239,255,0.92)';
      TopoEdge._drawLabel(ctx, edge.label, path, labelColor, scale);
    }
  }

  // ── 主线体 ────────────────────────────────────────────────────────

  /**
   * 绘制折线主体，支持静态虚线和 dash 流动动效。
   * @private
   */
  static _drawLine(ctx, path, { stroke, width, dash, anim, bothSelected, t, scale }) {
    ctx.save();
    ctx.lineWidth   = width;
    ctx.lineJoin    = 'round';
    ctx.lineCap     = 'round';

    if (anim?.type === 'dash' && !bothSelected) {
      // 虚线流动：通过 lineDashOffset 实现动画
      const speed    = anim.speed ?? 1;
      const dashArr  = dash.length ? dash : [10, 8];
      const cycle    = dashArr.reduce((a, b) => a + b, 0);
      const dir      = anim.reverse ? 1 : -1;
      const offset   = (t * speed * cycle * dir) % (cycle * 2);
      ctx.strokeStyle    = anim.color ?? stroke;
      ctx.setLineDash(dashArr.map(d => d / scale));
      ctx.lineDashOffset = offset / scale;
    } else {
      // 静态虚线或实线
      ctx.strokeStyle    = stroke;
      ctx.setLineDash(dash.map(d => d / scale));
      ctx.lineDashOffset = 0;
    }

    ctx.beginPath();
    ctx.moveTo(path[0].x, path[0].y);
    for (let i = 1; i < path.length; i++) ctx.lineTo(path[i].x, path[i].y);
    ctx.stroke();
    ctx.restore();
  }

  // ── dot 粒子 ──────────────────────────────────────────────────────

  /**
   * 沿路径绘制等间距粒子（水珠 / 电流效果）。
   * @private
   */
  static _drawDots(ctx, path, pathLen, anim, color, t, scale) {
    const gap     = anim.gap   ?? 40;  // 粒子间距（世界坐标 px）
    const r       = (anim.size ?? 6) / 2 / scale;
    const speed   = anim.speed ?? 1;
    const dir     = anim.reverse ? -1 : 1;
    const count   = Math.max(1, Math.floor(pathLen / gap));
    // advance：当前帧粒子起始偏移量（循环）
    const advance = ((t * speed * gap * dir) % gap + gap) % gap;

    ctx.save();
    ctx.fillStyle   = color;
    ctx.shadowColor = color;
    ctx.shadowBlur  = r * 5;

    for (let i = 0; i < count; i++) {
      const d   = ((i * gap + advance) % pathLen + pathLen) % pathLen;
      const pos = _samplePath(path, d);
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  // ── 箭头 ──────────────────────────────────────────────────────────

  /**
   * 在路径终点绘制实心三角箭头。
   * @private
   */
  static _drawArrow(ctx, path, size, color) {
    const a = arrowHead(path[path.length - 2], path[path.length - 1], size);
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(a[0].x, a[0].y);
    ctx.lineTo(a[1].x, a[1].y);
    ctx.lineTo(a[2].x, a[2].y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  // ── 边标签 ────────────────────────────────────────────────────────

  /**
   * 在路径中点绘制带半透明背景的文字标签。
   * @private
   */
  static _drawLabel(ctx, text, path, color, scale) {
    const mid  = path[Math.floor(path.length / 2)];
    ctx.save();
    ctx.font = `${12 / scale}px ui-sans-serif, system-ui, sans-serif`;
    const tw   = measureText(ctx, text);
    const padX = 8  / scale;
    const bw   = tw + padX * 2;
    const bh   = 18 / scale;
    // 背景框
    ctx.fillStyle   = 'rgba(10,20,40,0.88)';
    ctx.strokeStyle = 'rgba(255,255,255,0.10)';
    ctx.lineWidth   = 1 / scale;
    roundRectPath(ctx, mid.x - bw/2, mid.y - bh/2, bw, bh, 10 / scale);
    ctx.fill();
    ctx.stroke();
    // 文字
    ctx.fillStyle    = color;
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, mid.x, mid.y + 0.5 / scale);
    ctx.restore();
  }
}
