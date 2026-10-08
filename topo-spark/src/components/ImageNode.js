import { AbstractNode } from './AbstractNode.js';

export class ImageNode extends AbstractNode {
  constructor(data = {}) {
    super(data);
    this.icon = data.icon || data.src || '';
    this.image = null;
  }

  async load(loader) {
    if (this.icon) {
      this.image = await loader.loadImage(this.icon);
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.style.opacity;
    this._drawBackground(ctx);
    this._drawStateEffect(ctx);
    this._drawImage(ctx);
    this._drawLabel(ctx);
    ctx.restore();
  }

  _drawStateEffect(ctx) {
    const { state, background } = this.style;

    if (state.glowColor && state.glowStrength > 0) {
      ctx.save();
      this._drawRoundedRectPath(ctx, this.x, this.y, this.w, this.h, background.borderRadius);
      ctx.shadowColor = state.glowColor;
      ctx.shadowBlur = state.glowStrength;
      ctx.strokeStyle = state.glowColor;
      ctx.lineWidth = Math.max(this.style.border.width, 1);
      ctx.stroke();
      ctx.restore();
    }

    if (state.overlayColor) {
      this._drawRoundedRectPath(ctx, this.x, this.y, this.w, this.h, background.borderRadius);
      ctx.fillStyle = state.overlayColor;
      ctx.fill();
    }
  }

  _drawImage(ctx) {
    const { padding, placeholderColor } = this.style.image;
    if (this.image) {
      const size = Math.max(1, Math.min(this.w - padding * 2, this.h - padding * 2));
      ctx.drawImage(this.image, this.x + (this.w - size) / 2, this.y + (this.h - size) / 2, size, size);
    } else {
      ctx.fillStyle = placeholderColor;
      ctx.font = `600 24px ${this.style.label.fontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.label.slice(0, 1), this.x + this.w / 2, this.y + this.h / 2);
    }
  }
}
