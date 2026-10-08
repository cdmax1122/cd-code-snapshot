<template>
  <!-- 顶部统计栏 -->
  <div class="stats-bar">
    <div class="stat-item">
      <span class="stat-value">{{ store.stats.total }}</span>
      <span class="stat-label">储能站总数</span>
    </div>
    <div class="divider" />
    <div class="stat-item">
      <span class="stat-value online">{{ store.stats.online }}</span>
      <span class="stat-label">在线运行</span>
    </div>
    <div class="divider" />
    <div class="stat-item">
      <span class="stat-value maint">{{ store.stats.maintenance }}</span>
      <span class="stat-label">维护中</span>
    </div>
    <div class="divider" />
    <div class="stat-item">
      <span class="stat-value capacity">{{ store.stats.totalCapacity }}</span>
      <span class="stat-label">总装机容量</span>
    </div>
  </div>
</template>

<script setup>
import { useEarthStore } from '../stores/earthStore.js'
const store = useEarthStore()
</script>

<style scoped>
.stats-bar {
  display: flex;
  align-items: center;
  gap: 0;
  background: rgba(4, 12, 28, 0.82);
  border: 1px solid rgba(0, 200, 255, 0.15);
  border-radius: 10px;
  padding: 10px 20px;
  backdrop-filter: blur(12px);
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 18px;
}

.stat-value {
  font-size: 22px;
  font-weight: 700;
  color: #c8e8ff;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.stat-value.online   { color: #00ff88; text-shadow: 0 0 12px rgba(0,255,136,0.4); }
.stat-value.maint    { color: #ffaa00; text-shadow: 0 0 12px rgba(255,170,0,0.4); }
.stat-value.capacity { color: #00c8ff; text-shadow: 0 0 12px rgba(0,200,255,0.4); }

.stat-label {
  font-size: 10px;
  color: rgba(100,160,200,0.6);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 2px;
}

.divider {
  width: 1px;
  height: 32px;
  background: rgba(0,200,255,0.12);
  flex-shrink: 0;
}
</style>
