<template>
  <!-- 左侧站点列表 -->
  <div class="station-list">
    <div class="list-title">储能站列表</div>
    <div
      v-for="s in stations"
      :key="s.id"
      class="list-item"
      :class="{ active: store.activeStationId === s.id }"
      @click="store.selectStation(s.id)"
    >
      <span class="item-dot" :class="s.status" />
      <div class="item-info">
        <span class="item-name">{{ s.name }}</span>
        <span class="item-loc">{{ s.location }}</span>
      </div>
      <span class="item-cap">{{ s.capacity }}</span>
    </div>
  </div>
</template>

<script setup>
import { useEarthStore } from '../stores/earthStore.js'
import { STATIONS } from '../utils/stationData.js'

const store = useEarthStore()
const stations = STATIONS
</script>

<style scoped>
.station-list {
  background: rgba(4, 12, 28, 0.88);
  border: 1px solid rgba(0, 200, 255, 0.14);
  border-radius: 10px;
  padding: 14px 0;
  backdrop-filter: blur(14px);
  overflow-y: auto;
  max-height: calc(100vh - 200px);
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}
.station-list::-webkit-scrollbar { width: 3px; }
.station-list::-webkit-scrollbar-track { background: transparent; }
.station-list::-webkit-scrollbar-thumb { background: rgba(0,200,255,0.2); border-radius: 2px; }

.list-title {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(0,200,255,0.5);
  padding: 0 14px 10px;
  border-bottom: 1px solid rgba(0,200,255,0.08);
  margin-bottom: 4px;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  cursor: pointer;
  transition: background 0.18s;
  border-left: 2px solid transparent;
}
.list-item:hover   { background: rgba(0,200,255,0.05); }
.list-item.active  {
  background: rgba(0,200,255,0.08);
  border-left-color: #00c8ff;
}

.item-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.item-dot.online      { background: #00ff88; box-shadow: 0 0 5px #00ff88; }
.item-dot.maintenance { background: #ffaa00; box-shadow: 0 0 5px #ffaa00; }
.item-dot.offline     { background: #ff4444; }

.item-info {
  flex: 1;
  overflow: hidden;
}
.item-name {
  display: block;
  font-size: 12px;
  color: #c0dff0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-loc {
  display: block;
  font-size: 10px;
  color: rgba(100,160,200,0.55);
  margin-top: 1px;
}

.item-cap {
  font-size: 11px;
  color: rgba(0,200,255,0.7);
  white-space: nowrap;
  flex-shrink: 0;
}
</style>
