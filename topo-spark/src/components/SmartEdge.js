import { AbstractEdge } from './AbstractEdge.js';

const STRAIGHT_ANGLE_THRESHOLD = 15;
const PARALLEL_OFFSET = 12;

export class SmartEdge extends AbstractEdge {
  constructor(data, sourceNode, targetNode) {
    super(data, sourceNode, targetNode);
    this.calculatePath();
  }

  calculatePath(edgeContext = null) {
    this.source.calculateAnchors();
    this.target.calculateAnchors();
    const sourceCenter = this.source.getCenter();
    const targetCenter = this.target.getCenter();
    const dx = targetCenter.x - sourceCenter.x;
    const dy = targetCenter.y - sourceCenter.y;
    const { sourceSide, targetSide } = this.resolveSides(dx, dy);
    const sourceRatio = this.resolveDistributedRatio(edgeContext, this.source.id, sourceSide, 'source');
    const targetRatio = this.resolveDistributedRatio(edgeContext, this.target.id, targetSide, 'target');
    const start = this.source.getAnchor(sourceSide, sourceRatio);
    const end = this.target.getAnchor(targetSide, targetRatio);
    const angle = this.getAngle(dx, dy);

    if (angle <= STRAIGHT_ANGLE_THRESHOLD || angle >= 90 - STRAIGHT_ANGLE_THRESHOLD) {
      this.pathPoints = [start, end];
    } else if (sourceSide === 'left' || sourceSide === 'right') {
      const midX = (start.x + end.x) / 2 + this.resolveParallelOffset(edgeContext, sourceSide, 'x');
      this.pathPoints = [start, { x: midX, y: start.y }, { x: midX, y: end.y }, end];
    } else {
      const midY = (start.y + end.y) / 2 + this.resolveParallelOffset(edgeContext, sourceSide, 'y');
      this.pathPoints = [start, { x: start.x, y: midY }, { x: end.x, y: midY }, end];
    }

    this.routeMeta = { sourceSide, targetSide, sourceRatio, targetRatio, angle };
    this.updateLength();
  }

  resolveSides(dx, dy) {
    if (this.sourceAnchor && this.targetAnchor) {
      return { sourceSide: this.sourceAnchor, targetSide: this.targetAnchor };
    }

    if (Math.abs(dx) >= Math.abs(dy)) {
      return dx >= 0
        ? { sourceSide: 'right', targetSide: 'left' }
        : { sourceSide: 'left', targetSide: 'right' };
    }

    return dy >= 0
      ? { sourceSide: 'bottom', targetSide: 'top' }
      : { sourceSide: 'top', targetSide: 'bottom' };
  }

  getAngle(dx, dy) {
    if (dx === 0) return 90;
    return Math.atan(Math.abs(dy) / Math.abs(dx)) * (180 / Math.PI);
  }

  resolveDistributedRatio(edgeContext, nodeId, side, role) {
    if (!edgeContext) return 0.5;
    const key = `${nodeId}:${side}`;
    const group = edgeContext.anchorGroups.get(key) || [];
    if (group.length <= 1) return 0.5;
    const index = group.findIndex((item) => item.edgeId === this.id && item.role === role);
    const safeIndex = index < 0 ? 0 : index;
    return (safeIndex + 1) / (group.length + 1);
  }

  resolveParallelOffset(edgeContext, side, axis) {
    if (!edgeContext) return 0;
    const key = `${this.source.id}:${side}`;
    const group = edgeContext.anchorGroups.get(key) || [];
    if (group.length <= 1) return 0;
    const index = group.findIndex((item) => item.edgeId === this.id && item.role === 'source');
    if (index < 0) return 0;
    const center = (group.length - 1) / 2;
    const offset = (index - center) * PARALLEL_OFFSET;
    return axis === 'x' && (side === 'top' || side === 'bottom') ? 0 : offset;
  }

  draw(ctx) {
    if (!this.visible && this.pathPoints.length < 2) return;

    ctx.save();

    
    ctx.beginPath();
    ctx.moveTo(this.pathPoints[0].x, this.pathPoints[0].y);
    for (let i = 1; i < this.pathPoints.length; i += 1) {
      ctx.lineTo(this.pathPoints[i].x, this.pathPoints[i].y);
    }

    const { line: lineStyle } = this.style.edge;
    ctx.lineCap = lineStyle.lineCap;
    ctx.lineJoin = lineStyle.lineJoin;
    ctx.lineWidth = lineStyle.width;
    ctx.strokeStyle = lineStyle.strokeStyle;
    ctx.restore();
  }

  _tracePath(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.pathPoints[0].x, this.pathPoints[0].y);
    for (let i = 1; i < this.pathPoints.length; i += 1) {
      ctx.lineTo(this.pathPoints[i].x, this.pathPoints[i].y);
    }
  }

  _drawBase(ctx) {
    const { base } = this.style;
    if (!base.visible) return;
    this._tracePath(ctx);
    ctx.strokeStyle = base.color;
    ctx.lineWidth = base.width;
    ctx.stroke();
  }

  _drawActiveGlow(ctx) {
    const { active } = this.style;
    if (!active.visible) return;
    this._tracePath(ctx);
    ctx.strokeStyle = active.color;
    ctx.lineWidth = active.width;
    ctx.stroke();
  }

  _drawDashFlow(ctx) {
    const { active } = this.style;
    ctx.setLineDash(active.dashSegments);
    ctx.lineDashOffset = this.animState.dashOffset;
    this._tracePath(ctx);
    ctx.strokeStyle = active.dashColor;
    ctx.lineWidth = active.width;
    ctx.stroke();
    ctx.setLineDash([]);
  }

  _drawTextureFlow(ctx) {
    const { active } = this.style;
    ctx.setLineDash([4, 8]);
    ctx.lineDashOffset = this.animState.textureOffset;
    this._tracePath(ctx);
    ctx.strokeStyle = active.textureColor;
    ctx.lineWidth = active.width + 1;
    ctx.stroke();
    ctx.setLineDash([]);
  }

  _drawParticles(ctx) {
    const { active } = this.style;
    const size = active.particleSize;
    for (const particle of this.animState.particles) {
      const point = this.getPoint(particle.progress);
      if (!point) continue;
      const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size * 4);
      gradient.addColorStop(0, active.particleColor);
      gradient.addColorStop(0.35, active.color);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(point.x, point.y, size * 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
