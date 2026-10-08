export class EventBinder {
  constructor(graph) {
    this.graph = graph;
    this.canvas = graph.canvas;
    this.tooltipEl = this.createTooltipEl();
    this.isPanning = false;
    this.lastMousePos = null;
    this.bind();
  }

  createTooltipEl() {
    const el = document.createElement('div');
    el.className = 'topo-tooltip';
    el.style.display = 'none';
    document.body.appendChild(el);
    return el;
  }

  bind() {
    this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.canvas.addEventListener('mouseleave', () => {
      this.tooltipEl.style.display = 'none';
    });
  }

  onMouseDown(event) {
    this.isPanning = true;
    this.lastMousePos = { x: event.clientX, y: event.clientY };
    this.canvas.style.cursor = 'grabbing';
  }

  onMouseMove(event) {
    if (this.isPanning) {
      const dx = event.clientX - this.lastMousePos.x;
      const dy = event.clientY - this.lastMousePos.y;
      this.graph.camera.offsetX += dx;
      this.graph.camera.offsetY += dy;
      this.lastMousePos = { x: event.clientX, y: event.clientY };
      this.graph.requestRender();
      return;
    }

    const rect = this.canvas.getBoundingClientRect();
    const pos = this.graph.camera.screenToWorld(event.clientX - rect.left, event.clientY - rect.top);
    let hoveredNode = null;

    for (const node of this.graph.nodes.values()) {
      if (node.containsPoint(pos.x, pos.y)) {
        hoveredNode = node;
        break;
      }
    }

    if (hoveredNode) {
      this.tooltipEl.style.display = 'block';
      this.tooltipEl.style.left = `${event.clientX + 14}px`;
      this.tooltipEl.style.top = `${event.clientY + 14}px`;
      this.tooltipEl.innerHTML = this.renderTooltip(hoveredNode);
      this.canvas.style.cursor = 'grab';
    } else {
      this.tooltipEl.style.display = 'none';
      this.canvas.style.cursor = 'default';
    }
  }

  renderTooltip(node) {
    if (Array.isArray(node.tooltip?.items)) {
      return `
        <strong>${node.tooltip.title || node.label}</strong>
        ${node.tooltip.items.map((item) => `<span>${item.label}：${item.value ?? '-'}</span>`).join('')}
      `;
    }

    const entries = Object.entries(node.data || {}).slice(0, 6);
    return `
      <strong>${node.label}</strong>
      ${entries.length ? entries.map(([key, value]) => `<span>${key}：${value ?? '-'}</span>`).join('') : '<span>暂无详情</span>'}
    `;
  }

  onMouseUp() {
    this.isPanning = false;
    this.lastMousePos = null;
    this.canvas.style.cursor = 'default';
  }
}
