import { onBeforeUnmount, onMounted } from 'vue'
import * as echarts from 'echarts'

export function useECharts(domRef, optionFactory) {
  let chart = null

  const render = () => {
    if (!domRef.value) return
    if (!chart) {
      chart = echarts.init(domRef.value)
    }
    chart.setOption(optionFactory(), true)
  }

  const resize = () => chart?.resize()

  onMounted(() => {
    render()
    window.addEventListener('resize', resize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
    chart?.dispose()
    chart = null
  })

  return {
    render,
    getChart: () => chart,
  }
}
