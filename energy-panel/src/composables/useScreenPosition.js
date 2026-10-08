import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { worldToScreen } from '../utils/coordTransform'

export function useScreenPosition({ containerRef, cameraRef, getWorldPosition, enabled }) {
  const x = ref(0)
  const y = ref(0)
  const visible = ref(false)
  let rafId = 0

  const update = () => {
    const container = containerRef.value
    const camera = cameraRef.value
    const position = getWorldPosition?.()

    if (!container || !camera || !position || enabled?.value === false) {
      visible.value = false
      rafId = window.requestAnimationFrame(update)
      return
    }

    const point = worldToScreen(position, camera, container)
    x.value = point.x
    y.value = point.y
    visible.value = point.visible
    rafId = window.requestAnimationFrame(update)
  }

  onMounted(() => {
    rafId = window.requestAnimationFrame(update)
  })

  onBeforeUnmount(() => {
    window.cancelAnimationFrame(rafId)
  })

  return {
    x,
    y,
    visible: computed(() => visible.value && enabled?.value !== false),
  }
}
