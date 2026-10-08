/**
 * EarthScene - Three.js 场景主入口
 * 整合地球、飞线、标记、光照、交互控制等所有模块
 */
import * as THREE from 'three'
import { EarthCore } from './modules/EarthCore.js'
import { FlyLines }  from './modules/FlyLines.js'
import { Markers }   from './modules/Markers.js'
import { Controls }  from './modules/Controls.js'
import { Lighting }  from './modules/Lighting.js'
import { STATIONS, FLY_LINES } from '../utils/stationData.js'

export class EarthScene {
  constructor(canvas) {
    this.canvas = canvas
    this.renderer = null
    this.scene    = null
    this.camera   = null
    this.clock    = new THREE.Clock()
    this._animId  = null

    // 子模块
    this.earthCore = null
    this.flyLines  = null
    this.markers   = null
    this.controls  = null

    // 回调
    this.onMarkerPositions = null // (positions[]) => void
    this.onStationClick    = null // (stationId) => void

    this._init()
  }

  /* ─── 初始化 ─── */
  _init() {
    this._initRenderer()
    this._initScene()
    this._initCamera()
    new Lighting(this.scene)
    this._initModules()
    this._initRaycaster()
    this._startLoop()
    this._onResize()
    window.addEventListener('resize', this._onResize.bind(this))
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)
    this.renderer.setClearColor(0x00000, 0)
  }

  _initScene() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x020812)
  }

  _initCamera() {
    const { clientWidth: w, clientHeight: h } = this.canvas
    this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 200)
    this.camera.position.set(0, 0, 6)
  }

  _initModules() {
    const R = 2 // 球体半径
    this.earthCore = new EarthCore(this.scene, R)
    this.flyLines  = new FlyLines(this.scene, R)
    this.markers   = new Markers(this.scene, R)
    this.controls  = new Controls(this.camera, this.canvas)

    // 添加所有站点标记
    STATIONS.forEach(s => this.markers.addStation(s))

    // 添加所有飞线
    FLY_LINES.forEach(({ from, to }) => {
      const s = STATIONS.find(s => s.id === from)
      const e = STATIONS.find(s => s.id === to)
      if (s && e) {
        const color = s.status === 'online' ? '#00c8ff' : '#ffaa00'
        this.flyLines.addLine(s, e, color)
      }
    })
  }

  /* ─── Raycaster：点击标记拾取 ─── */
  _initRaycaster() {
    this._raycaster = new THREE.Raycaster()
    this._mouse = new THREE.Vector2()
    this.canvas.addEventListener('click', this._onClick.bind(this))
  }

  _onClick(e) {
    const rect = this.canvas.getBoundingClientRect()
    this._mouse.x = ((e.clientX - rect.left) / rect.width)  * 2 - 1
    this._mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1
    this._raycaster.setFromCamera(this._mouse, this.camera)

    // 检测所有标记 dot mesh
    const dots = this.markers.markerList.map(m => m.dot)
    const hits = this._raycaster.intersectObjects(dots)
    if (hits.length > 0) {
      const hitDot = hits[0].object
      const marker = this.markers.markerList.find(m => m.dot === hitDot)
      if (marker && this.onStationClick) {
        this.onStationClick(marker.stationId)
      }
    }
  }

  /* ─── 渲染循环 ─── */
  _startLoop() {
    const tick = () => {
      this._animId = requestAnimationFrame(tick)
      const delta   = this.clock.getDelta()
      const elapsed = this.clock.getElapsedTime()

      this.controls.update()
      this.earthCore.update(delta)
      this.flyLines.update(delta)
      this.markers.update(elapsed)

      this.renderer.render(this.scene, this.camera)

      // 每帧推送标记屏幕坐标给 Vue 层
      if (this.onMarkerPositions) {
        const { width, height } = this.renderer.domElement
        this.onMarkerPositions(
          this.markers.getScreenPositions(this.camera, width, height)
        )
      }
    }
    tick()
  }

  /* ─── 尺寸自适应 ─── */
  _onResize() {
    const w = this.canvas.clientWidth
    const h = this.canvas.clientHeight
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h, false)
  }

  /** 高亮选中站点（放大对应 dot） */
  highlightStation(stationId) {
    this.markers.markerList.forEach(m => {
      const active = m.stationId === stationId
      m.dot.scale.setScalar(active ? 2.2 : 1)
    })
  }

  /** 销毁场景 */
  dispose() {
    cancelAnimationFrame(this._animId)
    this.controls.dispose()
    window.removeEventListener('resize', this._onResize.bind(this))
    this.renderer.dispose()
  }
}
