import { DefaultTheme, mergeTheme } from '../theme/default-theme.js';

export class AbstractNode {
  constructor(data = {}) {
    // 内置生成唯一标识
    this.id = data.id;
    // 文本标签
    this.label = data.label || '';
    // 几何属性
    this.x = data.x;
    this.y = data.y;
    this.w = data.w || data.width || 86;
    this.h = data.h || data.height || 72;
    // 数据存储
    this.data = data.data || {};
    // 是否展示
    this.visible = data.visible !== false; // 默认 true
    // 视觉属性
    this.style = mergeTheme(DefaultTheme.node, data.style || {});
    // 锚点标记&计算
    this.anchors = {};
    this.calculateAnchors();
  }

  getCenter() {
    return {
      x: this.x + this.w / 2,
      y: this.y + this.h / 2
    };
  }

  calculateAnchors() {
    this.anchors = {
      top: { x: this.x + this.w / 2, y: this.y },
      right: { x: this.x + this.w, y: this.y + this.h / 2 },
      bottom: { x: this.x + this.w / 2, y: this.y + this.h },
      left: { x: this.x, y: this.y + this.h / 2 }
    };
  }

  getAnchor(side, ratio = 0.5) {
    const safeRatio = Math.max(0.12, Math.min(0.88, ratio));
    if (side === 'top') return { x: this.x + this.w * safeRatio, y: this.y };
    if (side === 'right') return { x: this.x + this.w, y: this.y + this.h * safeRatio };
    if (side === 'bottom') return { x: this.x + this.w * safeRatio, y: this.y + this.h };
    return { x: this.x, y: this.y + this.h * safeRatio };
  }

  containsPoint(x, y) {
    return x >= this.x && x <= this.x + this.w && y >= this.y && y <= this.y + this.h;
  }

  draw() {
    throw new Error('AbstractNode.draw() must be implemented by subclasses.');
  }

  _drawRoundedRectPath(ctx, x, y, width, height, radius) {
    const r = Math.min(Math.max(0, radius), width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + width, y, x + width, y + height, r);
    ctx.arcTo(x + width, y + height, x, y + height, r);
    ctx.arcTo(x, y + height, x, y, r);
    ctx.arcTo(x, y, x + width, y, r);
    ctx.closePath();
  }

  _drawBackground(ctx) {
    const { background, border } = this.style;

    if (background.visible) {
      this._drawRoundedRectPath(ctx, this.x, this.y, this.w, this.h, background.borderRadius);
      ctx.fillStyle = background.color;
      ctx.fill();
    }

    if (border.visible) {
      if (!background.visible) {
        this._drawRoundedRectPath(ctx, this.x, this.y, this.w, this.h, background.borderRadius);
      }
      ctx.lineWidth = border.width;
      ctx.strokeStyle = border.color;
      ctx.stroke();
    }
  }

  _drawLabel(ctx) {
    const labelStyle = this.style.label;
    if (!this.label || !labelStyle.visible) return;

    ctx.font = `${labelStyle.fontWeight} ${labelStyle.fontSize}px ${labelStyle.fontFamily}`;
    ctx.fillStyle = labelStyle.color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(this.label, this.x + this.w / 2, this.y + this.h + labelStyle.offsetY);
  }
}
