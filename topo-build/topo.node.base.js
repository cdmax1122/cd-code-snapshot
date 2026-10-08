/**
 * @file topo.node.base.js
 * @description 拓扑节点渲染类。
 *
 * 导出：
 *   TopoNode      —— 统一节点渲染入口（按 type 分发）
 *   portWorldPos  —— 端口世界坐标计算（供 renderer / edge 使用）
 *
 * 节点类型（type 字段）：
 *   'default' —— 标准圆角矩形节点（标题 + 副标题 + 端口）
 *   'image'   —— 在内容区展示图片（通过 userData.imageSrc 指定）
 *
 * 扩展方式：
 *   在 TopoNode.draw() 的 switch 中增加新 type，
 *   对应实现一个 _drawXxx(ctx, node, opts) 私有方法即可。
 */

import { clamp, roundRectPath } from './topo.utils.js';

// ─── 图片缓存（模块级单例）────────────────────────────────────────────────────
/** @type {Map<string, {img:HTMLImageElement, state:'loading'|'ready'|'error'}>} */
const _imgCache = new Map();

/**
 * 异步加载图片，结果缓存到 _imgCache。
 * 加载完成后调用 onLoad 通知渲染器重绘。
 * @param {string}    src
 * @param {()=>void}  onLoad
 * @returns {{img:HTMLImageElement, state:string}}
 */
function _loadImg(src, onLoad) {
  if (_imgCache.has(src)) return _imgCache.get(src);
  const e = { img: new Image(), state: 'loading' };
  _imgCache.set(src, e);
  e.img.onload  = () => { e.state = 'ready'; onLoad?.(); };
  e.img.onerror = () => { e.state = 'error'; onLoad?.(); };
  e.img.src = src;
  return e;
}

// ─── 端口坐标计算（工具函数，对外暴露）──────────────────────────────────────────

/**
 * 计算端口在世界坐标系中的绝对位置。
 * @param {import('./topo.config.js').NodeConfig} node
 * @param {import('./topo.config.js').Port}       port
 * @returns {{x:number, y:number}}
 */
export function portWorldPos(node, port) {
  const t = clamp(port.offset ?? 0.5, 0, 1);
  if (port.side === 'left')   return { x: node.x,          y: node.y + node.h * t };
  if (port.side === 'right')  return { x: node.x + node.w, y: node.y + node.h * t };
  if (port.side === 'top')    return { x: node.x + node.w * t, y: node.y };
  /* bottom */                return { x: node.x + node.w * t, y: node.y + node.h };
}

// ══════════════════════════════════════════════════════════════════
// TopoNode —— 节点渲染主类
// ══════════════════════════════════════════════════════════════════

/**
 * 节点渲染类。所有方法均为静态，无需实例化。
 *
 * 渲染选项 DrawOptions：
 *   scale      {number}   当前视口缩放比
 *   isSelected {boolean}  是否选中
 *   theme      {object}   全局主题（来自 TopoConfig.theme）
 *   onLoad     {Function} 图片加载完成后的重绘回调
 */
export class TopoNode {

  /**
   * 统一绘制入口，按 node.type 分发到具体实现。
   * @param {CanvasRenderingContext2D}               ctx
   * @param {import('./topo.config.js').NodeConfig}  node
   * @param {{scale:number, isSelected:boolean, theme:object, onLoad?:Function}} opts
   */
  static draw(ctx, node, opts) {
    if (node.visible === false) return;
    switch (node.type ?? 'default') {
      case 'image':   TopoNode._drawImage(ctx, node, opts);   break;
      default:        TopoNode._drawDefault(ctx, node, opts); break;
    }
  }

  // ── 公共：解析样式 ───────────────────────────────────────────────

  /**
   * 从节点数据 + 主题解析出基础渲染参数，供各 type 实现调用。
   * @returns {{s, nt, sel, radius, fill, stroke, headerH}}
   */
  static _style(node, opts) {
    const { theme = {} } = opts;
    const nt  = theme.node      || {};
    const sel = theme.selection || {};
    const s   = node.style      || {};
    return {
      s, nt, sel,
      radius:  s.radius ?? nt.radius ?? 12,
      fill:    s.fill   ?? nt.fill   ?? 'rgba(15,28,50,0.95)',
      stroke:  s.stroke ?? nt.stroke ?? 'rgba(56,189,248,0.8)',
      headerH: node.headerH ?? 36,
    };
  }

  // ── 公共：绘制外框（阴影 + 填充 + 边框）─────────────────────────

  /**
   * 绘制圆角矩形外框（含阴影和填充）。
   * @param {CanvasRenderingContext2D} ctx
   * @param {object} node  含 x,y,w,h
   * @param {object} p     解析后的样式参数
   * @param {number} scale
   */
  static _drawBox(ctx, node, p, scale) {
    const { x, y, w, h } = node;
    const { radius, fill, stroke, isSelected, sel, nt, s } = p;

    // 阴影
    ctx.save();
    ctx.shadowColor   = isSelected ? (sel.glow ?? 'rgba(56,189,248,0.6)') : (nt.shadow ?? 'rgba(0,0,0,0.45)');
    ctx.shadowBlur    = 20;
    ctx.shadowOffsetY = isSelected ? 4 : 8;
    roundRectPath(ctx, x, y, w, h, radius);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.restore();

    // 边框
    roundRectPath(ctx, x, y, w, h, radius);
    ctx.lineWidth   = (s.width ?? 2) / scale;
    ctx.setLineDash([]);
    ctx.strokeStyle = isSelected ? (sel.stroke ?? 'rgba(255,255,255,0.95)') : stroke;
    ctx.stroke();
  }

  // ── 公共：绘制标题栏 ─────────────────────────────────────────────

  /**
   * 绘制标题栏（渐变背景 + 分割线 + 主/副标题）。
   */
  static _drawHeader(ctx, node, p, scale) {
    const { x, y, w }                       = node;
    const { radius, stroke, headerH, nt, sel, isSelected } = p;
    const titleColor = node.style?.text ?? nt.text    ?? 'rgba(226,239,255,0.95)';
    const subColor   =                     nt.subtext ?? 'rgba(148,163,184,0.85)';

    // 渐变背景（裁剪到顶部圆角）
    ctx.save();
    roundRectPath(ctx, x, y, w, headerH + radius, radius);
    ctx.clip();
    const grad = ctx.createLinearGradient(x, y, x, y + headerH);
    grad.addColorStop(0, isSelected ? 'rgba(56,189,248,0.18)' : 'rgba(255,255,255,0.06)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    roundRectPath(ctx, x, y, w, headerH, 0);
    ctx.fillStyle = grad;
    ctx.fill();

    // 分割线
    ctx.beginPath();
    ctx.moveTo(x, y + headerH); ctx.lineTo(x + w, y + headerH);
    ctx.lineWidth   = 1 / scale;
    ctx.strokeStyle = 'rgba(255,255,255,0.10)';
    ctx.setLineDash([]);
    ctx.stroke();
    ctx.restore();

    // 主标题
    ctx.save();
    ctx.textBaseline = 'middle';
    ctx.fillStyle    = titleColor;
    ctx.font = `bold ${13 / scale}px ui-sans-serif, system-ui, sans-serif`;
    ctx.fillText(node.label, x + 12 / scale, y + headerH * 0.44);

    // 副标题（右对齐）
    if (node.subLabel) {
      ctx.fillStyle = subColor;
      ctx.font      = `${11 / scale}px ui-monospace, Menlo, Consolas, monospace`;
      ctx.textAlign = 'right';
      ctx.fillText(node.subLabel, x + w - 10 / scale, y + headerH * 0.60);
    }
    ctx.restore();
  }

  // ── 公共：绘制端口 ───────────────────────────────────────────────

  /**
   * 绘制节点所有端口（圆点 + 方向标签）。
   */
  static _drawPorts(ctx, node, stroke, scale) {
    for (const p of (node.ports || [])) {
      const pos = portWorldPos(node, p);
      const r   = 4 / scale;
      ctx.save();
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
      ctx.fillStyle   = 'rgba(255,255,255,0.88)';
      ctx.fill();
      ctx.lineWidth   = 1.5 / scale;
      ctx.strokeStyle = stroke;
      ctx.stroke();
      if (p.label) {
        ctx.fillStyle    = 'rgba(148,163,184,0.9)';
        ctx.font         = `${10 / scale}px ui-monospace, Menlo, Consolas, monospace`;
        ctx.textBaseline = 'middle';
        let lx = pos.x, ly = pos.y, align = 'center';
        if      (p.side === 'left')   { align = 'right'; lx -= 7 / scale; }
        else if (p.side === 'right')  { align = 'left';  lx += 7 / scale; }
        else if (p.side === 'top')    { ly -= 9 / scale; }
        else if (p.side === 'bottom') { ly += 9 / scale; }
        ctx.textAlign = align;
        ctx.fillText(p.label, lx, ly);
      }
      ctx.restore();
    }
  }

  // ── 公共：选中角标 ───────────────────────────────────────────────

  /** 在右上角绘制小圆形选中标记。 */
  static _drawBadge(ctx, node, sel, scale) {
    const r  = 5 / scale;
    ctx.save();
    ctx.beginPath();
    ctx.arc(node.x + node.w - r - 4 / scale, node.y + r + 4 / scale, r, 0, Math.PI * 2);
    ctx.fillStyle = sel.stroke ?? 'rgba(255,255,255,0.95)';
    ctx.fill();
    ctx.restore();
  }

  // ── type='default'：标准矩形节点 ────────────────────────────────

  /**
   * 绘制默认节点（圆角矩形 + 标题栏 + 端口）。
   * @private
   */
  static _drawDefault(ctx, node, opts) {
    const { scale = 1, isSelected = false } = opts;
    const p = { ...TopoNode._style(node, opts), isSelected };
    const { x, y, w, h } = node;

    TopoNode._drawBox(ctx, node, p, scale);
    TopoNode._drawHeader(ctx, node, p, scale);

    // 无 header 以下内容区时，居中绘制 label（兼容无标题栏布局）
    if ((node.headerH ?? 36) <= 0) {
      ctx.save();
      ctx.fillStyle    = p.nt.text ?? 'rgba(226,239,255,0.95)';
      ctx.font         = `${13 / scale}px ui-sans-serif, system-ui, sans-serif`;
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.label, x + w / 2, y + h / 2);
      ctx.restore();
    }

    TopoNode._drawPorts(ctx, node, p.stroke, scale);
    if (isSelected) TopoNode._drawBadge(ctx, node, p.sel, scale);
  }

  // ── type='image'：图片节点 ───────────────────────────────────────

  /**
   * 绘制图片节点。
   * 图片配置从 node.userData 读取：
   *   userData.imageSrc   图片 URL
   *   userData.imageMode  'cover'|'contain'|'fill'，默认 'contain'
   *   userData.imagePad   内边距（世界坐标 px），默认 8
   *   userData.imageAlpha 透明度 0-1，默认 1
   * @private
   */
  static _drawImage(ctx, node, opts) {
    const { scale = 1, isSelected = false, onLoad } = opts;
    const p = { ...TopoNode._style(node, opts), isSelected };
    const { x, y, w, h } = node;
    const ud      = node.userData || {};
    const headerH = node.headerH ?? 36;
    const pad     = ud.imagePad  ?? 8;
    const mode    = ud.imageMode ?? 'contain';
    const alpha   = clamp(ud.imageAlpha ?? 1, 0, 1);

    TopoNode._drawBox(ctx, node, p, scale);
    TopoNode._drawHeader(ctx, node, p, scale);

    // 内容区（标题栏下方）
    const cx = x + pad, cy = y + headerH + pad;
    const cw = w - pad * 2, ch = h - headerH - pad * 2;

    if (cw > 0 && ch > 0 && ud.imageSrc) {
      // 裁剪到内容区
      ctx.save();
      roundRectPath(ctx, x, y + headerH, w, h - headerH, p.radius);
      ctx.clip();

      const entry = _loadImg(ud.imageSrc, onLoad);
      if (entry.state === 'ready') {
        ctx.globalAlpha = alpha;
        _drawImgRect(ctx, entry.img, cx, cy, cw, ch, mode);
      } else if (entry.state === 'loading') {
        // 骨架占位
        ctx.fillStyle = 'rgba(255,255,255,0.04)';
        ctx.fillRect(cx, cy, cw, ch);
      } else {
        // 加载失败：红色叉号
        const r2 = Math.min(cw, ch) * 0.15;
        ctx.strokeStyle = 'rgba(255,77,79,0.6)';
        ctx.lineWidth   = r2 * 0.35;
        ctx.lineCap     = 'round';
        ctx.beginPath();
        ctx.moveTo(cx + cw/2 - r2, cy + ch/2 - r2); ctx.lineTo(cx + cw/2 + r2, cy + ch/2 + r2);
        ctx.moveTo(cx + cw/2 + r2, cy + ch/2 - r2); ctx.lineTo(cx + cw/2 - r2, cy + ch/2 + r2);
        ctx.stroke();
      }
      ctx.restore();
    }

    TopoNode._drawPorts(ctx, node, p.stroke, scale);
    if (isSelected) TopoNode._drawBadge(ctx, node, p.sel, scale);
  }
}

// ─── 图片填充辅助（cover / contain / fill）────────────────────────────────────

/**
 * 将图片按指定模式绘制到目标矩形区域。
 * @param {CanvasRenderingContext2D} ctx
 * @param {HTMLImageElement} img
 * @param {number} dx @param {number} dy @param {number} dw @param {number} dh
 * @param {'cover'|'contain'|'fill'} mode
 */
function _drawImgRect(ctx, img, dx, dy, dw, dh, mode) {
  const iw = img.naturalWidth  || 1;
  const ih = img.naturalHeight || 1;
  if (mode === 'fill') { ctx.drawImage(img, dx, dy, dw, dh); return; }
  const sx = dw / iw, sy = dh / ih;
  const s  = mode === 'contain' ? Math.min(sx, sy) : Math.max(sx, sy);
  const rw = iw * s, rh = ih * s;
  if (mode === 'contain') {
    ctx.drawImage(img, 0, 0, iw, ih, dx + (dw - rw) / 2, dy + (dh - rh) / 2, rw, rh);
  } else {
    // cover：裁剪居中
    const srcW = dw / s, srcH = dh / s;
    const srcX = (iw - srcW) / 2, srcY = (ih - srcH) / 2;
    ctx.drawImage(img, srcX, srcY, srcW, srcH, dx, dy, dw, dh);
  }
}
 