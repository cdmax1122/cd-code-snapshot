<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import Earth3D from '../components/Earth3D/Earth3D.vue'
import PowerChart from '../components/Charts/PowerChart.vue'
import SOCChart from '../components/Charts/SOCChart.vue'
import EnergyFlow from '../components/Charts/EnergyFlow.vue'
import { useDevicesStore, useEnergyStore } from '../store'
import { formatCurrency, formatEnergy, formatPercent, formatPower } from '../utils/formatters'

const devicesStore = useDevicesStore()
const energyStore = useEnergyStore()
const now = ref(new Date())
let timer = 0

const currentTime = computed(() =>
  now.value.toLocaleString('zh-CN', {
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }),
)

const stats = computed(() => [
  { label: '总功率', value: formatPower(energyStore.totalPower) },
  { label: '今日收益', value: formatCurrency(energyStore.revenueToday) },
  { label: '集群SOC', value: formatPercent(energyStore.socOverview.soc) },
  { label: '剩余容量', value: formatEnergy(energyStore.socOverview.remaining) },
])

onMounted(() => {
  energyStore.startSimulation()
  timer = window.setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onBeforeUnmount(() => {
  window.clearInterval(timer)
  energyStore.stopSimulation()
})
</script>

<template>
  <div class="dashboard">
    <header class="topbar glass-panel">
      <div>
        <p class="eyebrow">储能大屏监控系统</p>
        <h1>Energy Dash</h1>
      </div>
      <div class="topbar__meta">
        <div class="time-box">
          <span>系统时间</span>
          <strong>{{ currentTime }}</strong>
        </div>
        <div class="time-box">
          <span>数据刷新</span>
          <strong>{{ new Date(energyStore.updatedAt).toLocaleTimeString('zh-CN', { hour12: false }) }}</strong>
        </div>
      </div>
    </header>

    <section class="stat-strip">
      <article v-for="item in stats" :key="item.label" class="stat-card glass-panel">
        <span>{{ item.label }}</span>
        <strong>{{ item.value }}</strong>
      </article>
    </section>

    <main class="dashboard-grid">
      <section class="side-column left-column">
        <article class="chart-card glass-panel tall">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Power Curve</p>
              <h2>实时功率曲线</h2>
            </div>
          </div>
          <PowerChart />
        </article>

        <article class="chart-card glass-panel device-panel">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Stations</p>
              <h2>储能站点列表</h2>
            </div>
          </div>
          <div class="device-list">
            <button
              v-for="device in devicesStore.devices"
              :key="device.id"
              class="device-item"
              :class="{ active: devicesStore.selectedDeviceId === device.id }"
              @mouseenter="devicesStore.setHoveredDevice(device.id)"
              @mouseleave="devicesStore.setHoveredDevice('')"
              @click="devicesStore.setSelectedDevice(device.id)"
            >
              <div>
                <strong>{{ device.name }}</strong>
                <span>{{ device.city }} · {{ device.status }}</span>
              </div>
              <div class="device-item__metrics">
                <em>{{ formatPower(device.power) }}</em>
                <em>{{ formatPercent(device.soc) }}</em>
              </div>
            </button>
          </div>
        </article>
      </section>

      <section class="center-column glass-panel">
        <div class="panel-header center-header">
          <div>
            <p class="eyebrow">Global Dispatch</p>
            <h2>三维能量地球</h2>
          </div>
          <div class="center-header__tips">
            <span>拖拽旋转</span>
            <span>滚轮缩放</span>
            <span>悬停查看站点</span>
          </div>
        </div>
        <Earth3D />
      </section>

      <section class="side-column right-column">
        <article class="chart-card glass-panel">
          <div class="panel-header">
            <div>
              <p class="eyebrow">SOC Ring</p>
              <h2>储能状态环图</h2>
            </div>
          </div>
          <SOCChart />
        </article>

        <article class="chart-card glass-panel tall">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Energy Routing</p>
              <h2>能量流向桑基图</h2>
            </div>
          </div>
          <EnergyFlow />
        </article>
      </section>
    </main>
  </div>
</template>
