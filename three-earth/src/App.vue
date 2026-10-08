<template>
  <div class="app-shell">

    <!-- ══ 背景噪点层 ══ -->
    <div class="bg-noise" />

    <!-- ══ 顶部导航栏 ══ -->
    <header class="top-bar">
      <div class="logo">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="12" stroke="#00c8ff" stroke-width="1.5" opacity="0.6"/>
          <circle cx="14" cy="14" r="7"  stroke="#00c8ff" stroke-width="1"   opacity="0.4"/>
          <circle cx="14" cy="14" r="2.5" fill="#00c8ff"/>
          <line x1="14" y1="2"  x2="14" y2="26" stroke="#00c8ff" stroke-width="0.6" opacity="0.3"/>
          <line x1="2"  y1="14" x2="26" y2="14" stroke="#00c8ff" stroke-width="0.6" opacity="0.3"/>
          <ellipse cx="14" cy="14" rx="12" ry="5" stroke="#00c8ff" stroke-width="0.7" opacity="0.25"/>
        </svg>
        <span class="logo-text">EARTH<em>ENERGY</em></span>
      </div>

      <StatsBar class="top-stats" />

      <div class="top-right">
        <span class="live-badge">● LIVE</span>
        <span class="date-str">{{ dateStr }}</span>
      </div>
    </header>

    <!-- ══ 主体：左侧列表 + 地球画布 ══ -->
    <main class="main-body">

      <!-- 左侧站点列表 -->
      <aside class="sidebar">
        <StationList />
      </aside>

      <!-- Three.js 画布区域（铺满剩余空间） -->
      <div class="canvas-wrap">
        <EarthCanvas />

        <!-- 图例 -->
        <div class="legend">
          <div class="legend-item">
            <span class="ld online" />在线运行
          </div>
          <div class="legend-item">
            <span class="ld maint" />维护中
          </div>
          <div class="legend-item">
            <span class="ld flyline" />能量传输
          </div>
        </div>

        <!-- 操作提示 -->
        <div class="hint">
          拖拽旋转 &nbsp;·&nbsp; 滚轮缩放 &nbsp;·&nbsp; 点击站点查看详情
        </div>
      </div>
    </main>

    <!-- ══ 浮动信息面板（绝对跟随标记点） ══ -->
    <StationPanel />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import EarthCanvas  from './components/EarthCanvas.vue'
import StationPanel from './components/StationPanel.vue'
import StatsBar     from './components/StatsBar.vue'
import StationList  from './components/StationList.vue'

// 实时时间
const dateStr = ref('')
let timer = null
function tick() {
  dateStr.value = new Date().toLocaleString('zh-CN', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false,
  })
}
tick()
onMounted(() => { timer = setInterval(tick, 1000) })
onUnmounted(() => clearInterval(timer))
</script>

<style>
/* ── 全局重置 ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500&display=swap');

html, body, #app {
  width: 100%; height: 100%;
  overflow: hidden;
  background: #020812;
  color: #c8e8ff;
}
</style>

<style scoped>
/* ── 壳体 ── */
.app-shell {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  background: #020812;
}

/* 噪点背景 */
.bg-noise {
  position: absolute; inset: 0; z-index: 0;
  background-image:
    radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,60,120,0.18) 0%, transparent 70%),
    radial-gradient(ellipse 60% 80% at 80% 80%, rgba(0,20,60,0.2)  0%, transparent 60%);
  pointer-events: none;
}

/* ── 顶部导航 ── */
.top-bar {
  position: relative; z-index: 10;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: rgba(2, 8, 20, 0.9);
  border-bottom: 1px solid rgba(0, 200, 255, 0.1);
  backdrop-filter: blur(10px);
  flex-shrink: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-text {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #c8e8ff;
}
.logo-text em {
  font-style: normal;
  color: #00c8ff;
  margin-left: 2px;
}

.top-stats { flex: 1; justify-content: center; }

.top-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.live-badge {
  font-size: 11px;
  color: #00ff88;
  letter-spacing: 0.1em;
  animation: live-blink 1.8s ease-in-out infinite;
}
@keyframes live-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

.date-str {
  font-size: 12px;
  color: rgba(100, 160, 200, 0.65);
  letter-spacing: 0.04em;
}

/* ── 主体 ── */
.main-body {
  position: relative; z-index: 1;
  flex: 1;
  display: flex;
  overflow: hidden;
}

/* ── 左侧列表 ── */
.sidebar {
  width: 220px;
  flex-shrink: 0;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 5;
}

/* ── 地球画布区 ── */
.canvas-wrap {
  flex: 1;
  position: relative;
}

/* ── 图例 ── */
.legend {
  position: absolute;
  bottom: 24px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  pointer-events: none;
  z-index: 10;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: rgba(120,180,220,0.7);
  letter-spacing: 0.05em;
}
.ld {
  display: inline-block;
  width: 24px; height: 3px;
  border-radius: 2px;
}
.ld.online  { background: #00ff88; box-shadow: 0 0 6px #00ff88; }
.ld.maint   { background: #ffaa00; box-shadow: 0 0 6px #ffaa00; }
.ld.flyline { background: linear-gradient(90deg, transparent, #00c8ff); }

/* ── 操作提示 ── */
.hint {
  position: absolute;
  bottom: 24px;
  right: 24px;
  font-size: 11px;
  color: rgba(100,160,200,0.4);
  letter-spacing: 0.04em;
  pointer-events: none;
  z-index: 10;
}
</style>
