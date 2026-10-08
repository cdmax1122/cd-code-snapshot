import { defineStore } from 'pinia'
import { useDevicesStore } from './devices'

function createSeries(base) {
  return Array.from({ length: 24 }, (_, index) => {
    const hour = `${String(index).padStart(2, '0')}:00`
    const wave = Math.sin((index / 24) * Math.PI * 2) * 16
    const noise = Math.cos((index / 24) * Math.PI * 3) * 7
    return {
      time: hour,
      charge: Math.max(12, Math.round(base + wave + noise + (index % 4) * 2)),
      discharge: Math.max(8, Math.round(base - wave * 0.68 + noise * 0.5 + (index % 3) * 3)),
    }
  })
}

export const useEnergyStore = defineStore('energy', {
  state: () => ({
    powerHistory: createSeries(82),
    revenueToday: 286400,
    totalPower: 502,
    updatedAt: Date.now(),
    timer: null,
  }),
  getters: {
    socOverview() {
      const devicesStore = useDevicesStore()
      const totalCapacity = devicesStore.devices.reduce((sum, item) => sum + item.capacity, 0)
      const remaining = devicesStore.devices.reduce((sum, item) => sum + item.capacity * (item.soc / 100), 0)
      const soc = totalCapacity ? Math.round((remaining / totalCapacity) * 100) : 0
      return {
        soc,
        totalCapacity,
        remaining: Math.round(remaining),
        used: Math.round(totalCapacity - remaining),
      }
    },
    sankeyData() {
      const devicesStore = useDevicesStore()
      const nodes = [
        { name: '储能站集群' },
        ...devicesStore.devices.map((item) => ({ name: item.name })),
        ...Object.values(devicesStore.loadNodes).map((item) => ({ name: item.name })),
      ]
      const links = [
        ...devicesStore.devices.map((item) => ({
          source: '储能站集群',
          target: item.name,
          value: Math.round(item.capacity * (item.soc / 100)),
        })),
        ...devicesStore.routes.map((route) => ({
          source: route.source.name,
          target: route.target.name,
          value: route.source.power,
        })),
      ]
      return { nodes, links }
    },
  },
  actions: {
    tick() {
      const devicesStore = useDevicesStore()
      const updates = devicesStore.devices.map((device, index) => {
        const offset = Math.sin(Date.now() / 5500 + index) * 6
        const power = Math.max(40, Math.round(device.power + offset + (Math.random() * 10 - 5)))
        const soc = Math.min(96, Math.max(28, Math.round(device.soc + Math.random() * 6 - 3)))
        return {
          id: device.id,
          power,
          soc,
          status: power > 120 ? '高负荷输出' : power > 90 ? '并网调频' : '稳定充放',
        }
      })

      devicesStore.updateDeviceMetrics(updates)

      const latestHour = new Date().getHours()
      this.powerHistory = this.powerHistory.map((item, index) => {
        if (index !== latestHour) return item
        return {
          ...item,
          charge: Math.max(16, item.charge + Math.round(Math.random() * 10 - 5)),
          discharge: Math.max(10, item.discharge + Math.round(Math.random() * 10 - 5)),
        }
      })

      this.totalPower = devicesStore.devices.reduce((sum, item) => sum + item.power, 0)
      this.revenueToday += Math.round(this.totalPower * 1.8)
      this.updatedAt = Date.now()
    },
    startSimulation() {
      if (this.timer) return
      this.tick()
      this.timer = window.setInterval(() => this.tick(), 4000)
    },
    stopSimulation() {
      if (!this.timer) return
      window.clearInterval(this.timer)
      this.timer = null
    },
  },
})
