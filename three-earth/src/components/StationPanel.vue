<template>
  <!--
    浮动信息面板
    定位逻辑：跟随球面标记的屏幕投影坐标，做偏移确保不遮挡标记点
  -->
  <Transition name="panel">
    <div
      v-if="store.panelOpen && store.activeStation && anchorStyle"
      class="station-panel"
      :style="anchorStyle"
    >
      <!-- 左/右指示连接线 -->
      <div class="connector" :class="connectorSide" />

      <!-- 顶部：站点名 + 状态 + 关闭 -->
      <div class="panel-header">
        <span class="status-dot" :class="store.activeStation.status" />
        <span class="station-name">{{ store.activeStation.name }}</span>
        <button class="close-btn" @click="store.closePanel()">✕</button>
      </div>

      <div class="panel-location">
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
          <path d="M5.5 0C2.46 0 0 2.46 0 5.5c0 4.125 5.5 7.5 5.5 7.5S11 9.625 11 5.5C11 2.46 8.54 0 5.5 0zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#00c8ff" opacity="0.7"/>
        </svg>
        {{ store.activeStation.location }}
      </div>

      <!-- 数据指标网格 -->
      <div class="panel-grid">
        <div class="metric">
          <span class="metric-label">装机容量</span>
          <span class="metric-value">{{ store.activeStation.capacity }}</span>
        </div>
        <div class="metric">
          <span class="metric-label">额定功率</span>
          <span class="metric-value">{{ store.activeStation.power }}</span>
        </div>
        <div class="metric">
          <span class="metric-label">充放效率</span>
          <span class="metric-value accent">{{ store.activeStation.efficiency }}</span>
        </div>
        <div class="metric">
          <span class="metric-label">投运日期</span>
          <span class="metric-value">{{ store.activeStation.online }}</span>
        </div>
        <div class="metric full">
          <span class="metric-label">电池类型</span>
          <span class="metric-value">{{ store.activeStation.type }}</span>
        </div>
      </div>

      <!-- 描述 -->
      <p class="panel-desc">{{ store.activeStation.description }}</p>

      <!-- 运行状态 -->
      <div class="status-badge" :class="store.activeStation.status">
        <span class="badge-dot" />
        {{ statusText }}
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'
import { useEarthStore } from '../stores/earthStore.js'

const store = useEarthStore()

const PANEL_W  = 288
const OFFSET_X = 28
const OFFSET_Y = -90

/** 计算面板的 fixed 定位样式 */
const anchorStyle = computed(() => {
  const pos = store.activePosition
  if (!pos || !pos.visible) return null

  const vw = window.innerWidth
  const vh = window.innerHeight

  // 默认面板在标记右侧
  let left = pos.x + OFFSET_X
  // 若右侧空间不足，改为左侧
  if (left + PANEL_W > vw - 16) {
    left = pos.x - PANEL_W - OFFSET_X
  }

  let top = pos.y + OFFSET_Y
  top = Math.max(10, Math.min(top, vh - 320))

  return { left: `${left}px`, top: `${top}px` }
})

/** 连接线朝向 */
const connectorSide = computed(() => {
  const pos = store.activePosition
  if (!pos) return 'left'
  const vw = window.innerWidth
  return (pos.x + PANEL_W + OFFSET_X > vw - 16) ? 'right' : 'left'
})

const statusText = computed(() => ({
  online:      '在线运行',
  maintenance: '维护中',
  offline:     '离线',
}[store.activeStation?.status] ?? ''))
</script>

<style scoped>
/* ── 面板容器 ── */
.station-panel {
  position: fixed;
  z-index: 200;
  width: 288px;
  background: rgba(4, 12, 28, 0.94);
  border: 1px solid rgba(0, 200, 255, 0.22);
  border-radius: 12px;
  padding: 18px 18px 14px;
  backdrop-filter: blur(16px);
  box-shadow:
    0 0 0 1px rgba(0, 200, 255, 0.07),
    0 12px 40px rgba(0, 0, 0, 0.7),
    inset 0 1px 0 rgba(255,255,255,0.04);
  pointer-events: all;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

/* ── 连接线（指向标记点） ── */
.connector {
  position: absolute;
  top: 100px;
  width: 22px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,200,255,0.5));
}
.connector.left  { right: 100%; }
.connector.right { left: 100%; transform: scaleX(-1); }

/* ── 头部 ── */
.panel-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.status-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.status-dot.online      { background: #00ff88; box-shadow: 0 0 6px #00ff88; }
.status-dot.maintenance { background: #ffaa00; box-shadow: 0 0 6px #ffaa00; }
.status-dot.offline     { background: #ff4444; box-shadow: 0 0 6px #ff4444; }

.station-name {
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: #e0f4ff;
  letter-spacing: 0.03em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.close-btn {
  background: none;
  border: none;
  color: rgba(160, 200, 255, 0.5);
  font-size: 13px;
  cursor: pointer;
  padding: 0 2px;
  line-height: 1;
  transition: color 0.2s;
}
.close-btn:hover { color: #00c8ff; }

/* ── 位置 ── */
.panel-location {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: rgba(120,180,220,0.7);
  margin-bottom: 14px;
  letter-spacing: 0.04em;
}

/* ── 数据网格 ── */
.panel-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(0,200,255,0.06);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
}
.metric {
  background: rgba(8, 20, 44, 0.8);
  padding: 8px 10px;
}
.metric.full { grid-column: 1 / -1; }

.metric-label {
  display: block;
  font-size: 10px;
  color: rgba(100,160,200,0.65);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 3px;
}
.metric-value {
  font-size: 13px;
  color: #c8e8ff;
  font-weight: 500;
}
.metric-value.accent {
  color: #00ff88;
  text-shadow: 0 0 8px rgba(0,255,136,0.4);
}

/* ── 描述 ── */
.panel-desc {
  font-size: 11.5px;
  color: rgba(140, 185, 215, 0.75);
  line-height: 1.65;
  margin: 0 0 12px;
  font-family: 'Noto Sans SC', system-ui, sans-serif;
}

/* ── 状态徽章 ── */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.05em;
}
.status-badge.online      { background: rgba(0,255,136,0.1);  color: #00ff88; border: 1px solid rgba(0,255,136,0.25); }
.status-badge.maintenance { background: rgba(255,170,0,0.1);  color: #ffaa00; border: 1px solid rgba(255,170,0,0.25); }
.status-badge.offline     { background: rgba(255,68,68,0.1);   color: #ff4444; border: 1px solid rgba(255,68,68,0.25); }

.badge-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: blink 1.4s ease-in-out infinite;
}
.status-badge.maintenance .badge-dot,
.status-badge.offline .badge-dot { animation: none; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

/* ── 面板入场动画 ── */
.panel-enter-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.panel-leave-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.panel-enter-from   { opacity: 0; transform: translateY(8px) scale(0.97); }
.panel-leave-to     { opacity: 0; transform: translateY(4px) scale(0.98); }
</style>
