import { onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function useThreeScene(containerRef) {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 1000)
  camera.position.set(0, 2.6, 15)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.minDistance = 9
  controls.maxDistance = 24
  controls.enablePan = false

  const resize = () => {
    const container = containerRef.value
    if (!container) return
    const width = container.clientWidth
    const height = container.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  const mount = () => {
    const container = containerRef.value
    if (!container) return
    renderer.domElement.className = 'earth-canvas'
    container.appendChild(renderer.domElement)
    resize()
    window.addEventListener('resize', resize)
  }

  const ambient = new THREE.AmbientLight('#8db7ff', 1.8)
  const directional = new THREE.DirectionalLight('#bfe0ff', 2.2)
  directional.position.set(8, 6, 10)
  const rim = new THREE.PointLight('#2cf7c4', 28, 80)
  rim.position.set(-10, -4, -8)
  scene.add(ambient, directional, rim)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
    controls.dispose()
    renderer.dispose()
  })

  return {
    camera,
    controls,
    mount,
    renderer,
    resize,
    scene,
  }
}
