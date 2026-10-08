<script setup>
import { computed, ref, watch } from 'vue'
import { useEnergyStore } from '../../store'
import { useECharts } from '../../composables/useECharts'

const energyStore = useEnergyStore()
const chartRef = ref(null)

const option = computed(() => ({
  tooltip: { trigger: 'axis' },
  grid: { left: 16, right: 16, top: 40, bottom: 24, containLabel: true },
  legend: { top: 8, textStyle: { color: '#b9d9ff' } },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: energyStore.powerHistory.map((item) => item.time),
    axisLabel: { color: '#8db7e5' },
    axisLine: { lineStyle: { color: 'rgba(90,130,180,0.35)' } },
  },
  yAxis: {
    type: 'value',
    axisLabel: { color: '#8db7e5' },
    splitLine: { lineStyle: { color: 'rgba(90,130,180,0.16)' } },
  },
  series: [
    {
      name: '充电功率',
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: { width: 3, color: '#2cf7c4' },
      areaStyle: { color: 'rgba(44,247,196,0.12)' },
      data: energyStore.powerHistory.map((item) => item.charge),
    },
    {
      name: '放电功率',
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: { width: 3, color: '#57b7ff' },
      areaStyle: { color: 'rgba(87,183,255,0.10)' },
      data: energyStore.powerHistory.map((item) => item.discharge),
    },
  ],
}))

const { render } = useECharts(chartRef, () => option.value)
watch(option, render)
</script>

<template>
  <div ref="chartRef" class="chart"></div>
</template>
