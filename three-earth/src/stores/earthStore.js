/**
 * earthStore - 全局状态管理
 * 管理当前选中站点、面板显示、标记屏幕坐标等
 */
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { STATIONS } from '../utils/stationData.js'

export const useEarthStore = defineStore('earth', () => {
  // 当前选中的站点 ID
  const activeStationId = ref(null)

  // 信息面板是否展开
  const panelOpen = ref(false)

  // 每帧更新的标记屏幕坐标列表
  // [{ stationId, x, y, visible }]
  const markerPositions = ref([])

  // 统计数据
  const stats = computed(() => ({
    total:       STATIONS.length,
    online:      STATIONS.filter(s => s.status === 'online').length,
    maintenance: STATIONS.filter(s => s.status === 'maintenance').length,
    offline:     STATIONS.filter(s => s.status === 'offline').length,
    totalCapacity: STATIONS.reduce((acc, s) => {
      const v = parseFloat(s.capacity)
      return acc + (isNaN(v) ? 0 : v)
    }, 0).toFixed(1) + ' MWh',
  }))

  // 当前选中站点的完整数据
  const activeStation = computed(() =>
    STATIONS.find(s => s.id === activeStationId.value) || null
  )

  // 选中站点对应的屏幕坐标
  const activePosition = computed(() =>
    markerPositions.value.find(p => p.stationId === activeStationId.value) || null
  )

  function selectStation(id) {
    if (activeStationId.value === id) {
      // 再次点击则关闭
      activeStationId.value = null
      panelOpen.value = false
    } else {
      activeStationId.value = id
      panelOpen.value = true
    }
  }

  function closePanel() {
    activeStationId.value = null
    panelOpen.value = false
  }

  function updateMarkerPositions(positions) {
    markerPositions.value = positions
  }

  return {
    activeStationId,
    panelOpen,
    markerPositions,
    stats,
    activeStation,
    activePosition,
    selectStation,
    closePanel,
    updateMarkerPositions,
  }
})
