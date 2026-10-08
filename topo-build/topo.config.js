/**
 * @file topo.config.js
 * @description 全局类型定义 + 默认示例配置。
 *
 * 配置字段分为两层：
 *   CoreConfig  —— 渲染器必须读取的核心字段（布局、主题、视口、节点、边）
 *   userData    —— 业务自定义扩展数据，渲染器透传不处理，保留给上层应用使用
 */

// ══════════════════════════════════════════════════════════════════
// 基础类型
// ══════════════════════════════════════════════════════════════════

/** 端口方向 @typedef {'left'|'right'|'top'|'bottom'} PortSide */

/**
 * 端口
 * @typedef {{ id:string, side:PortSide, offset:number, label?:string }} Port
 */

/**
 * 样式覆盖（节点/边均可使用）
 * @typedef {{
 *   fill?:string, stroke?:string, text?:string,
 *   width?:number, radius?:number, dash?:number[]
 * }} NodeStyle
 */

// ══════════════════════════════════════════════════════════════════
// 节点核心配置
// ══════════════════════════════════════════════════════════════════

/**
 * 节点核心配置（渲染器必读字段）。
 * 若节点由布局算法自动排列，x/y 可省略（会被布局覆盖）。
 *
 * @typedef {{
 *   id:       string,          // 唯一标识
 *   label:    string,          // 主标题
 *   subLabel?: string,         // 副标题（右上角小字）
 *   x:        number,          // 世界坐标 X
 *   y:        number,          // 世界坐标 Y
 *   w:        number,          // 宽度
 *   h:        number,          // 高度
 *   ports?:   Port[],          // 端口列表
 *   style?:   NodeStyle,       // 样式覆盖
 *   type?:    string,          // 节点渲染类型（默认 'default'，可扩展 'image' 等）
 *   userData?: Record<string,*> // 业务自定义数据，渲染器不读取
 * }} NodeConfig
 */

// ══════════════════════════════════════════════════════════════════
// 边核心配置
// ══════════════════════════════════════════════════════════════════

/**
 * 边动效配置（可选）。
 * @typedef {{
 *   type?:    'dash'|'dot',   // dash=虚线流动, dot=粒子水珠
 *   speed?:   number,          // 速度倍率，默认 1
 *   reverse?: boolean,         // 是否反向流动
 *   color?:   string,          // 粒子颜色（null 则复用边颜色）
 *   size?:    number,          // dot 粒子直径（世界坐标 px），默认 6
 *   gap?:     number,          // dot 粒子间距，默认 40
 * }} EdgeAnimation
 */

/**
 * 边核心配置。
 * from/to 格式：'nodeId' 或 'nodeId:portId'
 *
 * @typedef {{
 *   id:         string,
 *   from:       string,
 *   to:         string,
 *   label?:     string,
 *   style?:     NodeStyle,
 *   animation?: EdgeAnimation, // 流动动效（不配置则静态）
 *   userData?:  Record<string,*>
 * }} EdgeConfig
 */

// ══════════════════════════════════════════════════════════════════
// 主题
// ══════════════════════════════════════════════════════════════════

/**
 * 全局主题（均为可选，有内置默认值）。
 * @typedef {{
 *   background?: string,
 *   grid?: { enabled?:boolean, size?:number, color?:string },
 *   node?: {
 *     radius?:number, fill?:string, stroke?:string,
 *     text?:string, subtext?:string, shadow?:string
 *   },
 *   edge?: { stroke?:string, width?:number, arrowSize?:number, text?:string },
 *   selection?: { stroke?:string, glow?:string }
 * }} Theme
 */

// ══════════════════════════════════════════════════════════════════
// 布局配置
// ══════════════════════════════════════════════════════════════════

/**
 * 树形布局配置。
 * enabled=false 时完全使用节点自身的 x/y。
 * @typedef {{
 *   enabled?:  boolean,   // 是否启用自动布局，默认 true
 *   direction?: 'LR'|'TB', // 布局方向：左→右 或 上→下，默认 'LR'
 *   nodeW?:   number,     // 节点默认宽度
 *   nodeH?:   number,     // 节点默认高度
 *   gapX?:    number,     // 列间距
 *   gapY?:    number,     // 行间距
 *   originX?: number,     // 起始 X
 *   originY?: number,     // 起始 Y
 * }} LayoutConfig
 */

// ══════════════════════════════════════════════════════════════════
// 顶层配置（完整 TopoConfig）
// ══════════════════════════════════════════════════════════════════

/**
 * 完整拓扑配置。
 * @typedef {{
 *   nodes:     NodeConfig[],
 *   edges:     EdgeConfig[],
 *   theme?:    Theme,
 *   layout?:   LayoutConfig,
 *   viewport?: { scale?:number, tx?:number, ty?:number },
 *   userData?: Record<string,*>   // 顶层业务数据，渲染器不读取
 * }} TopoConfig
 */

// ══════════════════════════════════════════════════════════════════
// 内置示例配置
// ══════════════════════════════════════════════════════════════════

/** 内置示例 JSON 字符串，供初始加载使用。 @type {string} */
export const DEFAULT_CONFIG_TEXT = `{
  "theme": {
    "background": "#07111f",
    "grid": { "enabled": true, "size": 40, "color": "rgba(255,255,255,0.05)" },
    "node": {
      "radius": 12,
      "fill":    "rgba(15,28,50,0.95)",
      "stroke":  "rgba(56,189,248,0.8)",
      "text":    "rgba(226,239,255,0.95)",
      "subtext": "rgba(148,163,184,0.85)",
      "shadow":  "rgba(0,0,0,0.45)"
    },
    "edge": { "stroke": "rgba(56,189,248,0.7)", "width": 2, "arrowSize": 9 },
    "selection": { "stroke": "rgba(255,255,255,0.95)", "glow": "rgba(56,189,248,0.6)" }
  },
  "layout": { "enabled": true, "direction": "LR", "nodeW": 200, "nodeH": 100, "gapX": 90, "gapY": 50 },
  "nodes": [
    {
      "id": "internet", "label": "Internet", "subLabel": "WAN",
      "w": 200, "h": 100,
      "type": "image",
      "userData": { "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Network_icon.svg/240px-Network_icon.svg.png", "imageMode": "contain", "imagePad": 10 },
      "ports": [{ "id": "out", "side": "right", "offset": 0.5, "label": "OUT" }]
    },
    {
      "id": "fw", "label": "Firewall", "subLabel": "iptables",
      "w": 200, "h": 100,
      "style": { "stroke": "rgba(251,113,133,0.9)", "fill": "rgba(251,113,133,0.08)" },
      "ports": [
        { "id": "in",  "side": "left",  "offset": 0.5, "label": "IN"  },
        { "id": "out", "side": "right", "offset": 0.5, "label": "OUT" }
      ]
    },
    {
      "id": "lb", "label": "Load Balancer", "subLabel": "Nginx",
      "w": 200, "h": 100,
      "style": { "stroke": "rgba(251,191,36,0.9)", "fill": "rgba(251,191,36,0.08)" },
      "ports": [
        { "id": "in",   "side": "left",  "offset": 0.5,  "label": "IN" },
        { "id": "out1", "side": "right", "offset": 0.33, "label": "A"  },
        { "id": "out2", "side": "right", "offset": 0.67, "label": "B"  }
      ]
    },
    {
      "id": "appA", "label": "App Server A", "subLabel": "Node.js",
      "w": 200, "h": 100,
      "style": { "stroke": "rgba(74,222,128,0.9)", "fill": "rgba(74,222,128,0.08)" },
      "ports": [
        { "id": "in",  "side": "left",  "offset": 0.5, "label": "IN"  },
        { "id": "out", "side": "right", "offset": 0.5, "label": "OUT" }
      ]
    },
    {
      "id": "appB", "label": "App Server B", "subLabel": "Node.js",
      "w": 200, "h": 100,
      "style": { "stroke": "rgba(74,222,128,0.9)", "fill": "rgba(74,222,128,0.08)" },
      "ports": [
        { "id": "in",  "side": "left",  "offset": 0.5, "label": "IN"  },
        { "id": "out", "side": "right", "offset": 0.5, "label": "OUT" }
      ]
    },
    {
      "id": "db", "label": "Database", "subLabel": "Postgres",
      "w": 200, "h": 100,
      "style": { "stroke": "rgba(167,139,250,0.9)", "fill": "rgba(167,139,250,0.08)" },
      "ports": [{ "id": "in", "side": "left", "offset": 0.5, "label": "RW" }]
    }
  ],
  "edges": [
    { "id": "e1", "from": "internet:out", "to": "fw:in",   "label": "HTTPS",
      "animation": { "type": "dot",  "speed": 1.2, "color": "rgba(56,189,248,0.9)",  "size": 5, "gap": 36 } },
    { "id": "e2", "from": "fw:out",       "to": "lb:in",   "label": "443",
      "animation": { "type": "dash", "speed": 1 } },
    { "id": "e3", "from": "lb:out1",      "to": "appA:in", "label": "round-robin",
      "style": { "stroke": "rgba(74,222,128,0.8)" },
      "animation": { "type": "dot",  "speed": 0.8, "color": "rgba(74,222,128,0.9)",  "size": 4, "gap": 44 } },
    { "id": "e4", "from": "lb:out2",      "to": "appB:in", "label": "round-robin",
      "style": { "stroke": "rgba(74,222,128,0.8)" },
      "animation": { "type": "dot",  "speed": 0.8, "color": "rgba(74,222,128,0.9)",  "size": 4, "gap": 44 } },
    { "id": "e5", "from": "appA:out",     "to": "db:in",   "label": "SQL",
      "style": { "stroke": "rgba(167,139,250,0.8)" },
      "animation": { "type": "dot",  "speed": 0.6, "color": "rgba(167,139,250,0.95)", "size": 5, "gap": 50 } },
    { "id": "e6", "from": "appB:out",     "to": "db:in",   "label": "SQL",
      "style": { "stroke": "rgba(167,139,250,0.8)" },
      "animation": { "type": "dot",  "speed": 0.6, "color": "rgba(167,139,250,0.95)", "size": 5, "gap": 50 } }
  ]
}`;
