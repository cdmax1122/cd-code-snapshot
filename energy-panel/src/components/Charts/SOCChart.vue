<script setup>
import { computed, ref, watch } from 'vue'
import { useEnergyStore } from '../../store'
import { useECharts } from '../../composables/useECharts'

const energyStore = useEnergyStore()
const chartRef = ref(null)

const option = computed(() => ({
  tooltip: { trigger: 'item' },
  color: ['#2cf7c4', '#57b7ff', '#203d65'],
  series: [
    {
      type: 'pie',
      radius: ['58%', '78%'],
      center: ['50%', '52%'],
      label: {
        color: '#b9d9ff',
        formatter: '{b}\n{c}',
      },
      data: [
        { name: '剩余容量', value: energyStore.socOverview.remaining },
        { name: '已用容量', value: energyStore.socOverview.used },
        { name: 'SOC', value: energyStore.socOverview.soc },
      ],
    },
  ],
  graphic: [
    {
      type: 'group',
      left: 'center',
      top: '40%',
      children: [
        {
          type: 'text',
          style: {
            text: `${energyStore.socOverview.soc}%`,
            fill: '#e8f6ff',
            font: '700 28px "Segoe UI"',
            textAlign: 'center',
          },
        },
        {
          type: 'text',
          top: 34,
          style: {
            text: '集群SOC',
            fill: '#7ea8cf',
            font: '14px "Segoe UI"',
            textAlign: 'center',
          },
        },
      ],
    },
  ],
}))

const { render } = useECharts(chartRef, () => option.value)
watch(option, render)
</script>

<template>
  <div ref="chartRef" class="chart"></div>
</template>
