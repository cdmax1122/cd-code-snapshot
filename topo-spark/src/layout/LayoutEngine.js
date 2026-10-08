export class LayoutEngine {
  static layout(nodes, edges) {
    const needLayout = [...nodes.values()].some((node) => !Number.isFinite(node.x) || !Number.isFinite(node.y));
    if (needLayout) this.autoLayout(nodes, edges);
    const edgeContext = this.createEdgeContext(edges);
    edges.forEach((edge) => edge.calculatePath(edgeContext));
  }

  static autoLayout(nodes, edges) {
    const children = new Map();
    const indegree = new Map();
    nodes.forEach((_, id) => {
      children.set(id, []);
      indegree.set(id, 0);
    });

    edges.forEach((edge) => {
      children.get(edge.source.id)?.push(edge.target.id);
      indegree.set(edge.target.id, (indegree.get(edge.target.id) || 0) + 1);
    });

    const roots = [...indegree.entries()].filter(([, degree]) => degree === 0).map(([id]) => id);
    const rootId = roots[0] || [...nodes.keys()][0];
    const levels = new Map([[rootId, 0]]);
    const queue = [rootId];
    const visited = new Set(queue);

    while (queue.length) {
      const current = queue.shift();
      for (const child of children.get(current) || []) {
        if (!visited.has(child)) {
          visited.add(child);
          levels.set(child, (levels.get(current) || 0) + 1);
          queue.push(child);
        }
      }
    }

    nodes.forEach((_, id) => {
      if (!levels.has(id)) levels.set(id, 0);
    });

    const groups = new Map();
    levels.forEach((level, id) => {
      if (!groups.has(level)) groups.set(level, []);
      groups.get(level).push(id);
    });

    const columnGap = 230;
    const rowGap = 145;
    [...groups.entries()].forEach(([level, ids]) => {
      const totalHeight = (ids.length - 1) * rowGap;
      ids.forEach((id, index) => {
        const node = nodes.get(id);
        if (!Number.isFinite(node.x)) node.x = level * columnGap;
        if (!Number.isFinite(node.y)) node.y = index * rowGap - totalHeight / 2;
        node.calculateAnchors();
      });
    });
  }

  static createEdgeContext(edges) {
    const anchorGroups = new Map();

    edges.forEach((edge) => {
      const sourceCenter = edge.source.getCenter();
      const targetCenter = edge.target.getCenter();
      const dx = targetCenter.x - sourceCenter.x;
      const dy = targetCenter.y - sourceCenter.y;
      const { sourceSide, targetSide } = edge.resolveSides(dx, dy);
      this.addAnchorGroup(anchorGroups, edge.source.id, sourceSide, edge.id, 'source', targetCenter);
      this.addAnchorGroup(anchorGroups, edge.target.id, targetSide, edge.id, 'target', sourceCenter);
    });

    anchorGroups.forEach((group, key) => {
      const side = key.split(':')[1];
      group.sort((a, b) => {
        if (side === 'left' || side === 'right') return a.peer.y - b.peer.y;
        return a.peer.x - b.peer.x;
      });
    });

    return { anchorGroups };
  }

  static addAnchorGroup(anchorGroups, nodeId, side, edgeId, role, peer) {
    const key = `${nodeId}:${side}`;
    if (!anchorGroups.has(key)) anchorGroups.set(key, []);
    anchorGroups.get(key).push({ edgeId, role, peer });
  }
}
