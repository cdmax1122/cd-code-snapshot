<script setup>
import { computed, ref, watch } from 'vue'
import { useDevicesStore, useEnergyStore } from '../../store'
import { useECharts } from '../../composables/useECharts'

const devicesStore = useDevicesStore()
const energyStore = useEnergyStore()
const chartRef = ref(null)

const option = computed(() => ({
  tooltip: { trigger: 'item' },
  series: [
    {
      type: 'sankey',
      layout: 'none',
      emphasis: { focus: 'adjacency' },
      lineStyle: {
        color: 'source',
        curveness: 0.5,
        opacity: 0.45,
      },
      itemStyle: {
        color: '#57b7ff',
        borderColor: 'rgba(255,255,255,0.18)',
      },
      label: { color: '#d8eeff' },
      data: energyStore.sankeyData.nodes,
      links: energyStore.sankeyData.links,
    },
  ],
}))

const { render, getChart } = useECharts(chartRef, () => option.value)

watch(
  option,
  () => {
    render()
    const chart = getChart()
    if (!chart) return
    chart.off('click')
    chart.on('click', (params) => {
      const matched = devicesStore.devices.find((item) => item.name === params.name)
      if (matched) devicesStore.setSelectedDevice(matched.id)
    })
  },
  { immediate: true },
)
</script>

<template>
  <div ref="chartRef" class="chart"></div>
</template>
