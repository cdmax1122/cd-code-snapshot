/**
 * @file topo.renderer.js
 * @description ?????? TopoCanvas?
 * ??????????????????
 * ??????? TopoNode????? TopoEdge?????
 */

import { clamp, parseEndpoint } from './topo.utils.js';
import { normalizeConfig }       from './topo.normalize.js';
import { TopoNode, portWorldPos } from './topo.node.base.js';
import { TopoEdge }              from './topo.edge.js';
import { applyTreeLayout }       from './topo.layout.js';

export class TopoCanvas {
  constructor(canvas, statusEl) {
    this.canvas = canvas;
    this.ctx    = canvas.getContext('2d');
    this.statusEl = statusEl;
    this.cfg = { nodes: [], edges: [] };
    this.dpr = window.devicePixelRatio || 1;
    this.width = 0; this.height = 0;
    this.scale = 1; this.tx = 0; this.ty = 0;
    this.isSpaceDown = false; this.isPanning = false;
    this.panStart  = { x:0, y:0, tx:0, ty:0 };
    this.dragging  = null;       // { nodeId, dx, dy }
    this.selection = new Set();  // ???? id ??
    this.lastMouse = null;
    this._animTime = 0; this._lastTs = null;
    this._hasAnim  = false; this._raf = null;
    this._boundResize = () => this.resize();
    window.addEventListener('resize', this._boundResize);
    this.resize();
    this._bindInput();
    this.invalidate();
  }

  /** ??????????????? */
  destroy() {
    window.removeEventListener('resize', this._boundResize);
    if (this._raf) cancelAnimationFrame(this._raf);
  }

  // ?? ???? ??????????????????????????????????????????????????????

  /** ???????????? resize?? */
  resize() {
    const r = this.canvas.getBoundingClientRect();
    this.width  = Math.max(1, Math.floor(r.width));
    this.height = Math.max(1, Math.floor(r.height));
    this.dpr = window.devicePixelRatio || 1;
    this.canvas.width  = Math.floor(this.width  * this.dpr);
    this.canvas.height = Math.floor(this.height * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.invalidate();
  }

  /** ???????? ? ???? ? ????? */
  setConfig(cfg) {
    this.cfg = normalizeConfig(cfg);
    const lo = this.cfg.layout || {};
    if (lo.enabled !== false) {
      applyTreeLayout(this.cfg, {
        direction: lo.direction ?? 'LR',
        nodeW: lo.nodeW ?? 200, nodeH: lo.nodeH ?? 100,
        gapX:  lo.gapX  ?? 90,  gapY:  lo.gapY  ?? 50,
        originX: lo.originX ?? 60, originY: lo.originY ?? 60,
      });
    }
    const vp = this.cfg.viewport || {};
    this.scale = clamp(vp.scale ?? 1, 0.1, 6);
    this.tx = vp.tx ?? 0; this.ty = vp.ty ?? 0;
    this.selection.clear();
    this._hasAnim  = (this.cfg.edges||[]).some(e => e.animation);
    this._animTime = 0; this._lastTs = null;
    this.invalidate();
  }

  resetView() {
    this.scale = 1; this.tx = 0; this.ty = 0;
    this.selection.clear(); this.invalidate();
  }

  centerView() {
    const b = this._bounds(); if (!b) return;
    this.tx = this.width  / 2 - ((b.x1+b.x2)/2) * this.scale;
    this.ty = this.height / 2 - ((b.y1+b.y2)/2) * this.scale;
    this.invalidate();
  }

  /** ???????????????? pad ????? */
  fitView(pad = 40) {
    const b = this._bounds(); if (!b) return;
    const s = clamp(
      Math.min((this.width-pad*2)/(b.x2-b.x1), (this.height-pad*2)/(b.y2-b.y1)),
      0.1, 6
    );
    this.scale = s;
    this.tx = pad - b.x1*s + ((this.width -pad*2) - (b.x2-b.x1)*s) / 2;
    this.ty = pad - b.y1*s + ((this.height-pad*2) - (b.y2-b.y1)*s) / 2;
    this.invalidate();
  }

  // ?? ???? ??????????????????????????????????????????????????????

  worldToScreen(x, y) { return { x: x*this.scale+this.tx, y: y*this.scale+this.ty }; }
  screenToWorld(x, y) { return { x: (x-this.tx)/this.scale, y: (y-this.ty)/this.scale }; }

  /** ?????????????? 60px ???? */
  _bounds() {
    const ns = this.cfg.nodes || []; if (!ns.length) return null;
    let x1=Infinity, y1=Infinity, x2=-Infinity, y2=-Infinity;
    for (const n of ns) {
      x1=Math.min(x1,n.x); y1=Math.min(y1,n.y);
      x2=Math.max(x2,n.x+n.w); y2=Math.max(y2,n.y+n.h);
    }
    return { x1:x1-60, y1:y1-60, x2:x2+60, y2:y2+60 };
  }

  // ?? ???? / ???? ???????????????????????????????????????????

  /** ??????????????????? */
  _hitNode(sx, sy) {
    const w = this.screenToWorld(sx, sy);
    for (let i = this.cfg.nodes.length-1; i >= 0; i--) {
      const n = this.cfg.nodes[i];
      if (w.x>=n.x && w.x<=n.x+n.w && w.y>=n.y && w.y<=n.y+n.h)
        return { node:n, world:w };
    }
    return null;
  }

  /** ? 'nodeId:portId' ????????? */
  _resolveEp(ep) {
    const { nodeId, portId } = parseEndpoint(ep);
    const node = this.cfg.nodes.find(n => n.id === nodeId);
    if (!node) return null;
    const port  = portId && node.ports?.length ? node.ports.find(p => p.id === portId)||null : null;
    const point = port ? portWorldPos(node, port) : { x:node.x+node.w/2, y:node.y+node.h/2 };
    return { node, port, point };
  }

  // ?? ???? ??????????????????????????????????????????????????????

  /** ????????????????? */
  invalidate() {
    if (this._raf) return;
    this._raf = requestAnimationFrame(ts => {
      if (this._lastTs != null) this._animTime += ts - this._lastTs;
      this._lastTs = ts; this._raf = null;
      this.draw();
      if (this._hasAnim) this.invalidate();
    });
  }

  // ?? ?????? ? ?? ? ? ? ?? ? HUD ????????????????????????

  draw() {
    const ctx = this.ctx, theme = this.cfg.theme || {};
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.save();
    ctx.fillStyle = theme.background || '#07111f';
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.restore();
    this._drawGrid();
    ctx.save();
    ctx.translate(this.tx, this.ty);
    ctx.scale(this.scale, this.scale);
    this._drawEdges();
    this._drawNodes();
    ctx.restore();
    this._drawHud();
  }

  // ?? ??????????????????????????????????????????????????????

  _drawGrid() {
    const grid = (this.cfg.theme||{}).grid || {};
    if (grid.enabled === false) return;
    const step = (grid.size ?? 40) * this.scale;
    if (step < 8) return;
    const ctx = this.ctx;
    ctx.save();
    ctx.strokeStyle = grid.color ?? 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    const ox = ((this.tx % step) + step) % step;
    const oy = ((this.ty % step) + step) % step;
    ctx.beginPath();
    for (let x=ox; x<=this.width;  x+=step) { ctx.moveTo(x,0); ctx.lineTo(x,this.height); }
    for (let y=oy; y<=this.height; y+=step) { ctx.moveTo(0,y); ctx.lineTo(this.width,y); }
    ctx.stroke();
    ctx.restore();
  }

  // ?? ????? TopoNode??????????????????????????????????????????

  _drawNodes() {
    const theme = this.cfg.theme || {};
    for (const n of this.cfg.nodes) {
      TopoNode.draw(this.ctx, n, {
        scale:      this.scale,
        isSelected: this.selection.has(n.id),
        theme,
        onLoad:     () => this.invalidate(),
      });
    }
  }

  // ?? ???? TopoEdge????????????????????????????????????????????

  _drawEdges() {
    const theme = this.cfg.theme || {};
    for (const e of this.cfg.edges) {
      const from = this._resolveEp(e.from);
      const to   = this._resolveEp(e.to);
      if (!from || !to) continue;
      TopoEdge.draw(this.ctx, e, {
        from:         from.point,
        to:           to.point,
        scale:        this.scale,
        bothSelected: this.selection.has(from.node.id) && this.selection.has(to.node.id),
        theme,
        animTime:     this._animTime,
      });
    }
  }

  // ?? HUD?????????????????????????????????????????????????

  _drawHud() {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = 'rgba(148,163,184,0.65)';
    ctx.font = '12px ui-monospace,Menlo,Monaco,Consolas,monospace';
    const sel = [...this.selection].join(', ');
    ctx.fillText(
      `scale=${Math.round(this.scale*100)}%  tx=${Math.round(this.tx)} ty=${Math.round(this.ty)}  sel=[${sel}]`,
      12, this.height - 14
    );
    ctx.restore();
  }

  _setStatus(msg) { if (this.statusEl) this.statusEl.textContent = msg; }

  // ?? ???? ?????????????????????????????????????????????????????

  _bindInput() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Space')  this.isSpaceDown = true;
      if (e.code === 'Escape') { this.selection.clear(); this.invalidate(); }
    });
    window.addEventListener('keyup', e => {
      if (e.code === 'Space') this.isSpaceDown = false;
    });
    this.canvas.addEventListener('pointerdown', e => this._onDown(e));
    window.addEventListener('pointermove',      e => this._onMove(e));
    window.addEventListener('pointerup',        e => this._onUp(e));
    this.canvas.addEventListener('wheel',       e => this._onWheel(e), { passive: false });
    this.canvas.addEventListener('contextmenu', e => e.preventDefault());
  }

  _pt(e) {
    const r = this.canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  _onDown(e) {
    this.canvas.setPointerCapture?.(e.pointerId);
    const p = this._pt(e); this.lastMouse = p;
    // ?????+?? ? ????
    if (this.isSpaceDown || e.button === 1) {
      this.isPanning = true;
      this.panStart  = { x:p.x, y:p.y, tx:this.tx, ty:this.ty };
      this._setStatus('????'); return;
    }
    const hit = this._hitNode(p.x, p.y);
    if (hit) {
      const { node, world } = hit;
      if (e.shiftKey) {
        // Shift?????
        this.selection.has(node.id) ? this.selection.delete(node.id) : this.selection.add(node.id);
      } else {
        if (!this.selection.has(node.id) || this.selection.size > 1) {
          this.selection.clear(); this.selection.add(node.id);
        }
      }
      this.dragging = { nodeId: node.id, dx: world.x-node.x, dy: world.y-node.y };
      this._setStatus(`???${node.id}`);
      this.invalidate(); return;
    }
    if (!e.shiftKey) this.selection.clear();
    this.invalidate();
  }

  _onMove(e) {
    if (!this.lastMouse) return;
    const p = this._pt(e); this.lastMouse = p;
    if (this.isPanning) {
      this.tx = this.panStart.tx + (p.x - this.panStart.x);
      this.ty = this.panStart.ty + (p.y - this.panStart.y);
      this.invalidate(); return;
    }
    if (this.dragging) {
      const n = this.cfg.nodes.find(x => x.id === this.dragging.nodeId);
      if (!n) return;
      const w = this.screenToWorld(p.x, p.y);
      n.x = w.x - this.dragging.dx;
      n.y = w.y - this.dragging.dy;
      this.invalidate(); return;
    }
    const hover = this._hitNode(p.x, p.y);
    this.canvas.style.cursor = hover || this.isSpaceDown ? 'grab' : 'default';
    this._setStatus(hover ? `???${hover.node.id}` : '');
  }

  _onUp(e) {
    if (!this.lastMouse) return;
    this.isPanning = false; this.dragging = null;
    this.canvas.style.cursor = this.isSpaceDown ? 'grab' : 'default';
    this.invalidate();
  }

  /** ????????????????????????? */
  _onWheel(e) {
    e.preventDefault();
    const p    = this._pt(e);
    const zoom = Math.exp(-e.deltaY * 0.0012);
    const next = clamp(this.scale * zoom, 0.1, 6);
    const r    = next / this.scale;
    this.tx    = p.x - (p.x - this.tx) * r;
    this.ty    = p.y - (p.y - this.ty) * r;
    this.scale = next;
    this._setStatus(`???${Math.round(this.scale * 100)}%`);
    this.invalidate();
  }
}
