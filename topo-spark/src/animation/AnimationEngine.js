export class AnimationEngine {
  constructor() {
    this.animations = new Set();
  }

  add(animation) {
    this.animations.add(animation);
  }

  clear() {
    this.animations.clear();
  }

  update(deltaTime) {
    for (const animation of this.animations) {
      if (animation.isActive) animation.update(deltaTime);
    }
  }
}
