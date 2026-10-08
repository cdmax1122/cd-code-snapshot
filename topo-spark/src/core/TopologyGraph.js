import { AnimationEngine } from '../animation/AnimationEngine.js';
import { DashFlowAnimation } from '../animation/DashFlowAnimation.js';
import { ParticleFlowAnimation } from '../animation/ParticleFlowAnimation.js';
import { TextureFlowAnimation } from '../animation/TextureFlowAnimation.js';
import { ImageNode } from '../components/ImageNode.js';
import { SmartEdge } from '../components/SmartEdge.js';
import { EventBinder } from '../event/EventBinder.js';
import { LayoutEngine } from '../layout/LayoutEngine.js';
import { ResourceLoader } from '../utils/ResourceLoader.js';
import { Camera } from './Camera.js';

export class TopologyGraph {
  constructor(domId) {
    this.canvas = document.getElementById(domId);
    if (!this.canvas) throw new Error(`Canvas ${domId} not found.`);
    this.ctx = this.canvas.getContext('2d');
    this.dpr = window.devicePixelRatio || 1;
    this.camera = new Camera();
    this.nodes = new Map();
    this.edges = new Map();
    this.animationEngine = new AnimationEngine();
    this.resourceLoader = new ResourceLoader();
    this.eventBinder = new EventBinder(this);
    this.isDirty = true;
    this.isRunning = false;
    this.lastFrameTime = 0;
    this.resize();
    window.addEventListener('resize', () => {
      this.resize();
      this.camera.fitToView(this.nodes, this.canvas.width / this.dpr, this.canvas.height / this.dpr);
      this.requestRender();
    });
  }

  async loadData(input) {
    this.animationEngine.clear();
    const { nodes, edges } = await this.normalizeGraph(input);
    this.nodes = nodes;
    this.edges = edges;
    LayoutEngine.layout(this.nodes, this.edges);
    this.camera.fitToView(this.nodes, this.canvas.width / this.dpr, this.canvas.height / this.dpr);
    this.registerAnimations();
    this.requestRender();
    this.start();
  }

  async normalizeGraph(input) {
    if (input?.nodes instanceof Map && input?.edges instanceof Map) {
      await this.loadNodeResources(input.nodes);
      return input;
    }

    if (!input || !Array.isArray(input.nodes) || !Array.isArray(input.edges)) {
      throw new Error('TopologyGraph.loadData() expects { nodes, edges } with arrays or Maps.');
    }

    const nodes = new Map();
    for (const nodeLike of input.nodes) {
      const node = nodeLike instanceof ImageNode ? nodeLike : new ImageNode(nodeLike);
      nodes.set(node.id, node);
    }

    await this.loadNodeResources(nodes);

    const edges = new Map();
    for (const edgeLike of input.edges) {
      const source = nodes.get(edgeLike.source?.id || edgeLike.source);
      const target = nodes.get(edgeLike.target?.id || edgeLike.target);
      if (!source || !target) {
        throw new Error(`Edge ${edgeLike.id} references missing source/target node.`);
      }
      const edge = edgeLike instanceof SmartEdge ? edgeLike : new SmartEdge(edgeLike, source, target);
      edges.set(edge.id, edge);
    }

    return { nodes, edges };
  }

  async loadNodeResources(nodes) {
    await Promise.all([...nodes.values()].map((node) => node.load?.(this.resourceLoader)));
  }

  registerAnimations() {
    this.edges.forEach((edge) => {
      if (!edge.isActive) return;
      if (edge.effect === 'particle') this.animationEngine.add(new ParticleFlowAnimation(edge));
      else if (edge.effect === 'texture') this.animationEngine.add(new TextureFlowAnimation(edge));
      else this.animationEngine.add(new DashFlowAnimation(edge));
    });
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = Math.floor(rect.width * this.dpr);
    this.canvas.height = Math.floor(rect.height * this.dpr);
  }

  requestRender() {
    this.isDirty = true;
    if (!this.isRunning) this.start();
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastFrameTime = performance.now();
    requestAnimationFrame(this.tick.bind(this));
  }

  tick(timestamp) {
    const deltaTime = Math.min(timestamp - this.lastFrameTime, 64);
    this.lastFrameTime = timestamp;
    this.animationEngine.update(deltaTime);
    this.render();

    if (this.animationEngine.animations.size > 0 || this.isDirty) {
      this.isDirty = false;
      requestAnimationFrame(this.tick.bind(this));
    } else {
      this.isRunning = false;
    }
  }

  render() {
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.ctx.clearRect(0, 0, width, height);
    this.drawBackground(width, height);

    this.ctx.save();
    this.ctx.translate(this.camera.offsetX, this.camera.offsetY);
    this.ctx.scale(this.camera.zoom, this.camera.zoom);
    this.edges.forEach((edge) => edge.draw(this.ctx));
    this.nodes.forEach((node) => node.draw(this.ctx));
    this.ctx.restore();
  }

  drawBackground(width, height) {
    const ctx = this.ctx;
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#07111f');
    gradient.addColorStop(0.55, '#0f2742');
    gradient.addColorStop(1, '#071827');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(148, 163, 184, 0.08)';
    ctx.lineWidth = 1;
    const grid = 32;
    for (let x = 0; x < width; x += grid) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += grid) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }
}
