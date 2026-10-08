export class Camera {
  constructor() {
    this.offsetX = 0;
    this.offsetY = 0;
    this.zoom = 1;
  }

  fitToView(nodes, canvasWidth, canvasHeight, padding = 80) {
    if (!nodes.size || canvasWidth <= 0 || canvasHeight <= 0) return;

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    nodes.forEach((node) => {
      minX = Math.min(minX, node.x);
      minY = Math.min(minY, node.y);
      maxX = Math.max(maxX, node.x + node.w);
      maxY = Math.max(maxY, node.y + node.h);
    });

    const bboxW = Math.max(maxX - minX, 1);
    const bboxH = Math.max(maxY - minY, 1);
    const zoomX = (canvasWidth - padding * 2) / bboxW;
    const zoomY = (canvasHeight - padding * 2) / bboxH;
    this.zoom = Math.max(0.2, Math.min(zoomX, zoomY, 1.6));
    this.offsetX = (canvasWidth - bboxW * this.zoom) / 2 - minX * this.zoom;
    this.offsetY = (canvasHeight - bboxH * this.zoom) / 2 - minY * this.zoom;
  }

  screenToWorld(x, y) {
    return {
      x: (x - this.offsetX) / this.zoom,
      y: (y - this.offsetY) / this.zoom
    };
  }
}
