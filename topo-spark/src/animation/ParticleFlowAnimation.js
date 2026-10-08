import { Animation } from './Animation.js';

export class ParticleFlowAnimation extends Animation {
  constructor(edge) {
    super(edge);
    const count = Math.max(3, Math.min(8, Math.ceil(edge.speed / 2)));
    this.target.animState.particles = Array.from({ length: count }, (_, index) => ({
      progress: index / count,
      radius: 1.7 + (index % 3) * 0.45
    }));
  }

  update(deltaTime) {
    if (!this.target.isActive) return;
    const velocity = Math.max(this.target.speed, 1) * 0.00009;
    for (const particle of this.target.animState.particles) {
      particle.progress = (particle.progress + velocity * deltaTime) % 1;
    }
  }
}
