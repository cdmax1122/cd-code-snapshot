<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as THREE from 'three'
import { useDevicesStore } from '../../store'
import { useScreenPosition } from '../../composables/useScreenPosition'
import { useThreeScene } from '../../composables/useThreeScene'
import FloatingCard from '../FloatingCard.vue'
import { Globe } from './Globe'
import { FlyingLines } from './FlyingLines'
import { Markers } from './Markers'

const devicesStore = useDevicesStore()
const containerRef = ref(null)
const cameraRef = ref(null)
const activeDevice = computed(() => devicesStore.activeDevice)
const activeDeviceId = computed(() => activeDevice.value?.id || '')

const { scene, camera, renderer, controls, mount } = useThreeScene(containerRef)
cameraRef.value = camera

const globe = new Globe(5)
const stars = new THREE.Points(
  new THREE.BufferGeometry(),
  new THREE.PointsMaterial({ color: '#d6e6ff', size: 0.06 }),
)
const starVertices = []
for (let i = 0; i < 1800; i += 1) {
  starVertices.push((Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120)
}
stars.geometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))

const markers = new Markers(devicesStore.devices, 5)
const flyingLines = new FlyingLines(devicesStore.routes, 5)
scene.add(stars, globe.group, flyingLines.group, markers.group)

const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()
let animationFrame = 0
let clock = new THREE.Clock()

function pickMarker(event) {
  const container = containerRef.value
  if (!container) return
  const rect = container.getBoundingClientRect()
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
  raycaster.setFromCamera(pointer, camera)
  const intersections = raycaster.intersectObjects(markers.getObjects(), false)
  if (intersections.length) {
    const id = intersections[0].object.userData.id
    devicesStore.setHoveredDevice(id)
  } else {
    devicesStore.setHoveredDevice('')
  }
}

function selectMarker() {
  if (devicesStore.hoveredDeviceId) {
    devicesStore.setSelectedDevice(devicesStore.hoveredDeviceId)
  }
}

function animate() {
  const delta = clock.getDelta()
  const elapsed = clock.elapsedTime
  globe.update(delta)
  markers.update(elapsed)
  flyingLines.update()
  controls.update()
  renderer.render(scene, camera)
  animationFrame = window.requestAnimationFrame(animate)
}

watch(activeDeviceId, (id) => {
  markers.setActive(id)
}, { immediate: true })

onMounted(() => {
  mount()
  const container = containerRef.value
  container?.addEventListener('pointermove', pickMarker)
  container?.addEventListener('pointerleave', () => devicesStore.setHoveredDevice(''))
  container?.addEventListener('click', selectMarker)
  animate()
})

onBeforeUnmount(() => {
  const container = containerRef.value
  container?.removeEventListener('pointermove', pickMarker)
  container?.removeEventListener('click', selectMarker)
  window.cancelAnimationFrame(animationFrame)
})

const { x, y, visible } = useScreenPosition({
  containerRef,
  cameraRef,
  enabled: computed(() => !!activeDevice.value),
  getWorldPosition: () => {
    if (!activeDevice.value) return null
    return markers.getWorldPosition(activeDevice.value.id)
  },
})
</script>

<template>
  <div ref="containerRef" class="earth-stage">
    <div class="earth-stage__overlay"></div>
    <div class="earth-stage__legend">
      <span><i class="low"></i> 中低负荷</span>
      <span><i class="mid"></i> 调峰传输</span>
      <span><i class="high"></i> 高负荷输出</span>
    </div>
    <FloatingCard
      :device="activeDevice"
      :position="{ x, y }"
      :visible="visible"
    />
  </div>
</template>
