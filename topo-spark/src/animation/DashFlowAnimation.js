import { Animation } from './Animation.js';

export class DashFlowAnimation extends Animation {
  constructor(edge) {
    super(edge);
    this.target.animState.dashOffset = 0;
  }

  update(deltaTime) {
    if (!this.target.isActive) return;
    const direction = this.target.direction === 'forward' ? -1 : 1;
    const velocity = Math.max(this.target.speed, 1) * 0.045 * direction;
    this.target.animState.dashOffset += velocity * deltaTime;
  }
}
