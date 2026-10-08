/**
 * @file topo.layout.js
 * @description 树形布局算法。
 *
 * applyTreeLayout(cfg) 分析 edges，以入度为 0 的节点为根，
 * 按层级（BFS）自动计算每个节点的 x / y，覆盖原始坐标。
 *
 * 布局方向：从左到右（根在左，叶在右）。
 * 同层节点沿 Y 轴均匀分布，相邻层沿 X 轴步进。
 *
 * 若图中存在环路或孤立节点，均能安全处理（孤立节点排在最后一列）。
 */

/**
 * @param {{ nodes: object[], edges: object[] }} cfg  规范化后的配置（in-place 修改 x/y）
 * @param {{ nodeW?:number, nodeH?:number, gapX?:number, gapY?:number, originX?:number, originY?:number }} [opts]
 */
export function applyTreeLayout(cfg, opts = {}) {
  const nodes = cfg.nodes;
  const edges = cfg.edges;
  if (!nodes || nodes.length === 0) return;

  const nodeW   = opts.nodeW   ?? 180;
  const nodeH   = opts.nodeH   ?? 90;
  const gapX    = opts.gapX    ?? 80;
  const gapY    = opts.gapY    ?? 40;
  const originX = opts.originX ?? 60;
  const originY = opts.originY ?? 60;

  // ------------------------------------------------------------------
  // 1. 建邻接表 + 统计入度
  // ------------------------------------------------------------------
  const idSet    = new Set(nodes.map(n => n.id));
  const children = new Map(nodes.map(n => [n.id, []]));
  const inDegree = new Map(nodes.map(n => [n.id, 0]));

  for (const e of edges) {
    const fromId = e.from.split(':')[0];
    const toId   = e.to.split(':')[0];
    if (!idSet.has(fromId) || !idSet.has(toId) || fromId === toId) continue;
    children.get(fromId)?.push(toId);
    inDegree.set(toId, (inDegree.get(toId) ?? 0) + 1);
  }

  // ------------------------------------------------------------------
  // 2. BFS 分层（Kahn 拓扑排序）
  // ------------------------------------------------------------------
  // 每个节点分配到哪一列（层级）
  const col = new Map();
  const queue = [];

  for (const [id, deg] of inDegree) {
    if (deg === 0) {
      queue.push(id);
      col.set(id, 0);
    }
  }

  // 若所有节点都有入度（纯环图），强制把第一个设为根
  if (queue.length === 0 && nodes.length > 0) {
    queue.push(nodes[0].id);
    col.set(nodes[0].id, 0);
  }

  // BFS
  const visited = new Set(queue);
  let head = 0;
  while (head < queue.length) {
    const id = queue[head++];
    const c  = col.get(id);
    for (const child of (children.get(id) ?? [])) {
      if (visited.has(child)) continue;
      visited.add(child);
      col.set(child, c + 1);
      queue.push(child);
    }
  }

  // 孤立节点（未被访问）放到最后一列
  const maxCol = Math.max(0, ...[...col.values()]);
  for (const n of nodes) {
    if (!col.has(n.id)) col.set(n.id, maxCol + 1);
  }

  // ------------------------------------------------------------------
  // 3. 按列分组并按行分配 Y 坐标
  // ------------------------------------------------------------------
  const colGroups = new Map();
  for (const n of nodes) {
    const c = col.get(n.id) ?? 0;
    if (!colGroups.has(c)) colGroups.set(c, []);
    colGroups.get(c).push(n.id);
  }

  // 找出最大行数，决定整体高度中心对齐
  const maxRows = Math.max(...[...colGroups.values()].map(g => g.length));
  const totalH  = maxRows * (nodeH + gapY) - gapY;

  // 为每列内节点分配行号（保持 BFS 顺序即可）
  const row = new Map();
  for (const [, ids] of colGroups) {
    ids.forEach((id, i) => row.set(id, i));
  }

  // ------------------------------------------------------------------
  // 4. 写入 x / y（不覆盖用户已手动指定的节点尺寸）
  // ------------------------------------------------------------------
  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  for (const n of nodes) {
    const c  = col.get(n.id) ?? 0;
    const r  = row.get(n.id) ?? 0;
    const groupSize = colGroups.get(c)?.length ?? 1;
    const groupH    = groupSize * (nodeH + gapY) - gapY;
    const offsetY   = (totalH - groupH) / 2;   // 列内居中对齐

    n.x = originX + c * (nodeW + gapX);
    n.y = originY + offsetY + r * (nodeH + gapY);
    // 统一节点尺寸（如节点本身未指定则使用布局默认值）
    if (!n._customSize) {
      n.w = n.w || nodeW;
      n.h = n.h || nodeH;
    }
  }
}
