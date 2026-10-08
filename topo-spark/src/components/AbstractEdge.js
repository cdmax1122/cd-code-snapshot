import { pointAtPolyline, polylineLength } from '../utils/MathUtil.js';
import { DefaultTheme, mergeTheme } from '../theme/DefaultTheme.js';

export class AbstractEdge {
  constructor(data, sourceNode, targetNode) {
    this.id = data.id;
    this.source = sourceNode;
    this.target = targetNode;
    this.sourceAnchor = data.sourceAnchor;
    this.targetAnchor = data.targetAnchor;
    this.label = data.label || '';
    
    this.isActive = Boolean(data.isActive);
    this.direction = data.direction || 'forward';
    this.speed = Number(data.speed || data.value || 0);
    this.effect = data.effect || 'dash'; // 业务决定使用哪种动效：dash/texture/particle
    
    this.pathPoints = [];
    this.totalLength = 0;
    this.routeMeta = null;
    
    // 1. 静态视觉规范：深度合并业务配置
    this.style = mergeTheme(DefaultTheme.edge, data.style || {});

    // 2. 动画状态包：独立沙箱，供 AnimationEngine 安全修改
    this.animState = {
      dashOffset: 0,
      textureOffset: 0,
      particles: [] // [{ progress: 0~1, ... }]
    };
  }

  calculatePath() {}

  getPoint(progress) {
    const p = this.direction === 'reverse' ? 1 - progress : progress;
    return pointAtPolyline(this.pathPoints, p);
  }

  updateLength() {
    this.totalLength = polylineLength(this.pathPoints);
  }

  // 抽象方法
  draw(ctx) {
    throw new Error('AbstractEdge.draw() must be implemented.');
  }
}