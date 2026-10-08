/**
 * @file topo.normalize.js
 * @description 配置规范化：将用户传入的原始 JSON 转为内部标准格式，
 *              补充缺省值，做基础类型校验。
 *
 * 对齐 topo.config.js 的 NodeConfig / EdgeConfig 结构：
 *   - userData 字段原样透传，渲染器不处理
 *   - 边的 animation 字段完整保留
 */

import { clamp } from './topo.utils.js';

// ─── 顶层入口 ──────────────────────────────────────────────────────────────────

/**
 * 规范化完整配置对象。
 * @param {*} cfg  用户传入的原始配置
 * @returns {import('./topo.config.js').TopoConfig}
 */
export function normalizeConfig(cfg) {
  return {
    nodes:    Array.isArray(cfg?.nodes) ? cfg.nodes.map(normalizeNode) : [],
    edges:    Array.isArray(cfg?.edges) ? cfg.edges.map(normalizeEdge) : [],
    theme:    cfg?.theme    || {},
    viewport: cfg?.viewport || {},
    layout:   cfg?.layout   || {},
    userData: cfg?.userData ?? null,  // 顶层业务数据，原样保留
  };
}

// ─── 节点规范化 ────────────────────────────────────────────────────────────────

/**
 * 规范化单个节点，补充缺省值并强制类型转换。
 * @param {*} n
 * @returns {import('./topo.config.js').NodeConfig}
 */
export function normalizeNode(n) {
  return {
    // 核心字段
    id:       String(n.id),
    label:    String(n.label ?? n.id ?? ''),
    subLabel: n.subLabel != null ? String(n.subLabel) : undefined,
    x:        Number(n.x ?? 0),
    y:        Number(n.y ?? 0),
    w:        Number(n.w ?? 200),
    h:        Number(n.h ?? 100),
    ports:    Array.isArray(n.ports) ? n.ports.map(_normalizePort) : [],
    style:    n.style && typeof n.style === 'object' ? n.style : undefined,
    // 可选核心字段
    type:     n.type    != null ? String(n.type)     : undefined,
    headerH:  n.headerH != null ? Number(n.headerH)  : undefined,
    visible:  n.visible != null ? Boolean(n.visible)  : undefined,
    // 业务扩展数据（原样透传，渲染器不读取）
    userData: n.userData && typeof n.userData === 'object' ? n.userData : undefined,
  };
}

/** @param {*} p */
function _normalizePort(p) {
  const SIDES = ['left', 'right', 'top', 'bottom'];
  return {
    id:     String(p.id),
    side:   SIDES.includes(p.side) ? p.side : 'left',
    offset: clamp(Number(p.offset ?? 0.5), 0, 1),
    label:  p.label != null ? String(p.label) : undefined,
  };
}

// ─── 边规范化 ──────────────────────────────────────────────────────────────────

/**
 * 规范化单条边。
 * @param {*} e
 * @returns {import('./topo.config.js').EdgeConfig}
 */
export function normalizeEdge(e) {
  const edge = {
    id:       String(e.id ?? `${e.from}->${e.to}`),
    from:     String(e.from),
    to:       String(e.to),
    label:    e.label != null ? String(e.label) : undefined,
    style:    e.style && typeof e.style === 'object' ? e.style : undefined,
    userData: e.userData && typeof e.userData === 'object' ? e.userData : undefined,
  };

  // 动效配置（完整保留，渲染器直接使用）
  if (e.animation && typeof e.animation === 'object') {
    edge.animation = {
      type:    e.animation.type    ?? 'dash',   // 'dash' | 'dot'
      speed:   Number(e.animation.speed   ?? 1),
      reverse: Boolean(e.animation.reverse ?? false),
      color:   e.animation.color   ?? null,     // null 则复用边颜色
      size:    Number(e.animation.size    ?? 6),
      gap:     Number(e.animation.gap     ?? 40),
    };
  }

  return edge;
}
