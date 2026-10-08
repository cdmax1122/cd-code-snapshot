import { Graphics } from "pixi.js";
import type { Camera } from "../../src";

/**
 * Demo 辅助网格，不属于 Spatial Core。
 */
export class GridView {
  readonly graphics = new Graphics();

  draw(camera: Camera): void {
    const width = camera.viewport.width;
    const height = camera.viewport.height;
    let worldStep = 80;

    while (worldStep * camera.zoom < 34) {
      worldStep *= 2;
    }

    const screenStep = worldStep * camera.zoom;
    const origin = camera.worldToScreen({ x: 0, y: 0 });
    const startX = positiveModulo(origin.x, screenStep);
    const startY = positiveModulo(origin.y, screenStep);

    this.graphics.clear();

    for (let x = startX; x <= width; x += screenStep) {
      this.graphics.moveTo(x, 0).lineTo(x, height);
    }
    for (let y = startY; y <= height; y += screenStep) {
      this.graphics.moveTo(0, y).lineTo(width, y);
    }
    this.graphics.stroke({
      color: 0x6f8ca2,
      width: 1,
      alpha: 0.11,
    });

    this.graphics
      .moveTo(origin.x, 0)
      .lineTo(origin.x, height)
      .moveTo(0, origin.y)
      .lineTo(width, origin.y)
      .stroke({
        color: 0x6ed8dd,
        width: 1,
        alpha: 0.24,
      });
  }
}

function positiveModulo(value: number, divisor: number): number {
  return ((value % divisor) + divisor) % divisor;
}

