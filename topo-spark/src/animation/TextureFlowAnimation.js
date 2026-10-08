import { Animation } from './Animation.js';

export class TextureFlowAnimation extends Animation {
  constructor(edge) {
    super(edge);
    this.target.animState.textureOffset = 0;
  }

  update(deltaTime) {
    if (!this.target.isActive) return;
    const direction = this.target.direction === 'forward' ? -1 : 1;
    const velocity = Math.max(this.target.speed, 1) * 0.04 * direction;
    this.target.animState.textureOffset += velocity * deltaTime;
  }
}
