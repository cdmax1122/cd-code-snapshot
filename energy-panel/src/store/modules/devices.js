import { defineStore } from 'pinia'

const deviceSeeds = [
  {
    id: 'beijing-storage',
    name: '北京储能站',
    city: '北京',
    lat: 39.9042,
    lng: 116.4074,
    power: 86,
    soc: 78,
    capacity: 240,
    target: 'tianjin-load',
    status: '充电中',
    color: '#2cf7c4',
  },
  {
    id: 'shanghai-storage',
    name: '上海储能中心',
    city: '上海',
    lat: 31.2304,
    lng: 121.4737,
    power: 112,
    soc: 65,
    capacity: 280,
    target: 'hangzhou-load',
    status: '并网调频',
    color: '#57b7ff',
  },
  {
    id: 'guangzhou-storage',
    name: '广州储能园区',
    city: '广州',
    lat: 23.1291,
    lng: 113.2644,
    power: 134,
    soc: 52,
    capacity: 310,
    target: 'shenzhen-load',
    status: '放电中',
    color: '#ffd166',
  },
  {
    id: 'chengdu-storage',
    name: '成都山地储能站',
    city: '成都',
    lat: 30.5728,
    lng: 104.0668,
    power: 74,
    soc: 88,
    capacity: 200,
    target: 'chongqing-load',
    status: '备用待机',
    color: '#60efff',
  },
  {
    id: 'wulumuqi-storage',
    name: '乌鲁木齐风储站',
    city: '乌鲁木齐',
    lat: 43.8256,
    lng: 87.6168,
    power: 96,
    soc: 71,
    capacity: 260,
    target: 'xian-load',
    status: '削峰运行',
    color: '#ff9f6e',
  },
]

const loadNodes = {
  'tianjin-load': { id: 'tianjin-load', name: '天津负荷中心', city: '天津', lat: 39.3434, lng: 117.3616 },
  'hangzhou-load': { id: 'hangzhou-load', name: '杭州云谷负荷', city: '杭州', lat: 30.2741, lng: 120.1551 },
  'shenzhen-load': { id: 'shenzhen-load', name: '深圳智算负荷', city: '深圳', lat: 22.5431, lng: 114.0579 },
  'chongqing-load': { id: 'chongqing-load', name: '重庆两江负荷', city: '重庆', lat: 29.563, lng: 106.5516 },
  'xian-load': { id: 'xian-load', name: '西安工业负荷', city: '西安', lat: 34.3416, lng: 108.9398 },
}

export const useDevicesStore = defineStore('devices', {
  state: () => ({
    devices: deviceSeeds,
    loadNodes,
    hoveredDeviceId: '',
    selectedDeviceId: deviceSeeds[0].id,
  }),
  getters: {
    selectedDevice(state) {
      return state.devices.find((item) => item.id === state.selectedDeviceId) || null
    },
    hoveredDevice(state) {
      return state.devices.find((item) => item.id === state.hoveredDeviceId) || null
    },
    activeDevice(state) {
      return (
        state.devices.find((item) => item.id === state.hoveredDeviceId) ||
        state.devices.find((item) => item.id === state.selectedDeviceId) ||
        null
      )
    },
    routes(state) {
      return state.devices.map((device) => ({
        id: `${device.id}-${device.target}`,
        source: device,
        target: state.loadNodes[device.target],
        level: device.power > 120 ? 'high' : device.power > 90 ? 'medium' : 'normal',
      }))
    },
  },
  actions: {
    setHoveredDevice(id) {
      this.hoveredDeviceId = id || ''
    },
    setSelectedDevice(id) {
      this.selectedDeviceId = id
    },
    updateDeviceMetrics(updates) {
      this.devices = this.devices.map((device) => {
        const patch = updates.find((item) => item.id === device.id)
        return patch ? { ...device, ...patch } : device
      })
    },
  },
})
