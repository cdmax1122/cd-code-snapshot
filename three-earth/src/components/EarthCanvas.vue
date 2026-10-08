<template>
  <!-- Three.js 渲染画布容器 -->
  <canvas ref="canvasRef" class="earth-canvas" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { EarthScene } from '../earth/EarthScene.js'
import { useEarthStore } from '../stores/earthStore.js'

const store = useEarthStore()
const canvasRef = ref(null)
let earthScene = null

onMounted(() => {
  // 初始化 Three.js 场景
  earthScene = new EarthScene(canvasRef.value)

  // 每帧接收标记屏幕坐标，推入 store
  earthScene.onMarkerPositions = (positions) => {
    store.updateMarkerPositions(positions)
  }

  // 点击标记时选中对应站点
  earthScene.onStationClick = (stationId) => {
    store.selectStation(stationId)
  }
})

// 监听选中变化，通知场景高亮
watch(() => store.activeStationId, (id) => {
  earthScene?.highlightStation(id)
})

onBeforeUnmount(() => {
  earthScene?.dispose()
})
</script>

<style scoped>
.earth-canvas {
  display: block;
  width: 100%;
  height: 100%;
  outline: none;
  cursor: grab;
}
.earth-canvas:active {
  cursor: grabbing;
}
</style>
