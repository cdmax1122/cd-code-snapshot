import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

export function useThreeScene(canvas) {
  let renderer, scene, camera, controls, animId
  let gridHelper, axesHelper
  let currentModel = null

  function init() {
    // Renderer
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2

    // Scene
    scene = new THREE.Scene()

    // Camera
    camera = new THREE.PerspectiveCamera(45, 1, 0.001, 10000)
    camera.position.set(3, 2, 5)

    // Controls
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.minDistance = 0.01
    controls.maxDistance = 5000
    controls.panSpeed = 0.8
    controls.zoomSpeed = 1.2

    // Lights
    setupLights()

    // Grid
    gridHelper = new THREE.GridHelper(20, 40, 0x1f2330, 0x1a1f2b)
    scene.add(gridHelper)

    // Axes
    axesHelper = new THREE.AxesHelper(5)
    axesHelper.visible = false
    scene.add(axesHelper)

    // Environment map (simple gradient IBL)
    setupEnvMap()

    animate()
  }

  function setupLights() {
    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)

    const dir1 = new THREE.DirectionalLight(0xffffff, 1.2)
    dir1.position.set(5, 8, 5)
    dir1.castShadow = true
    dir1.shadow.mapSize.set(2048, 2048)
    dir1.shadow.camera.near = 0.1
    dir1.shadow.camera.far = 100
    dir1.shadow.bias = -0.001
    scene.add(dir1)

    const dir2 = new THREE.DirectionalLight(0x8899ff, 0.5)
    dir2.position.set(-5, 3, -5)
    scene.add(dir2)

    const fill = new THREE.DirectionalLight(0xffd4a0, 0.3)
    fill.position.set(0, -5, 0)
    scene.add(fill)
  }

  function setupEnvMap() {
    const pmremGenerator = new THREE.PMREMGenerator(renderer)
    pmremGenerator.compileEquirectangularShader()
    const envScene = new RoomEnvironment()
    const envMap = pmremGenerator.fromScene(envScene, 0.04)
    scene.environment = envMap.texture
    pmremGenerator.dispose()
  }

  function animate() {
    animId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }

  function resize(w, h) {
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }

  function setBackground(color) {
    if (color === 'transparent') {
      scene.background = null
    } else {
      scene.background = new THREE.Color(color)
    }
  }

  function setGrid(visible) {
    if (gridHelper) gridHelper.visible = visible
  }

  function setAxes(visible) {
    if (axesHelper) axesHelper.visible = visible
  }

  function setWireframe(enabled) {
    if (!currentModel) return
    currentModel.traverse(child => {
      if (child.isMesh) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => { m.wireframe = enabled })
        } else if (child.material) {
          child.material.wireframe = enabled
        }
      }
    })
  }

  function clearModel() {
    if (currentModel) {
      scene.remove(currentModel)
      currentModel.traverse(child => {
        if (child.isMesh) {
          child.geometry?.dispose()
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose())
          } else {
            child.material?.dispose()
          }
        }
      })
      currentModel = null
    }
  }

  function addModel(object) {
    clearModel()
    currentModel = object
    scene.add(currentModel)
    fitToModel()
  }

  function fitToModel(object) {
    const target = object || currentModel
    if (!target) return
    const box = new THREE.Box3().setFromObject(target)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)
    if (maxDim === 0) return

    const fov = camera.fov * (Math.PI / 180)
    let dist = Math.abs(maxDim / Math.sin(fov / 2)) * 0.75
    dist = Math.max(dist, maxDim * 1.5)

    controls.target.copy(center)
    camera.position.copy(center)
    camera.position.x += dist * 0.6
    camera.position.y += dist * 0.4
    camera.position.z += dist
    camera.near = dist * 0.001
    camera.far = dist * 100
    camera.updateProjectionMatrix()
    controls.update()

    if (gridHelper) {
      const gridSize = maxDim * 4
      const gridY = box.min.y
      gridHelper.scale.setScalar(gridSize / 20)
      gridHelper.position.y = gridY
    }
  }

  function resetCamera() {
    camera.position.set(3, 2, 5)
    controls.target.set(0, 0, 0)
    controls.update()
  }

  function getScene() { return scene }
  function getCamera() { return camera }
  function getRenderer() { return renderer }

  function dispose() {
    cancelAnimationFrame(animId)
    clearModel()
    renderer.dispose()
    controls.dispose()
  }

  return {
    init, resize, dispose,
    setBackground, setGrid, setAxes, setWireframe,
    addModel, clearModel, fitToModel, resetCamera,
    getScene, getCamera, getRenderer
  }
}
