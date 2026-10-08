/**
 * Controls - 交互控制模块
 * 鼠标拖拽旋转、滚轮缩放、惯性阻尼、自动旋转
 */
import * as THREE from 'three'

export class Controls {
  constructor(camera, domElement) {
    this.camera = camera
    this.dom = domElement

    // 球坐标参数
    this.spherical = new THREE.Spherical().setFromVector3(camera.position)
    this.targetSpherical = this.spherical.clone()

    // 鼠标状态
    this._drag = false
    this._lastX = 0
    this._lastY = 0

    // 配置
    this.autoRotateSpeed = 0.08  // 自动旋转速度(度/帧)
    this.autoRotate = true
    this.dampingFactor = 0.08
    this.rotateSpeed = 0.4
    this.zoomSpeed = 0.15
    this.minRadius = 3.5
    this.maxRadius = 12

    this._bind()
  }

  _bind() {
    this.dom.addEventListener('mousedown', this._onDown.bind(this))
    this.dom.addEventListener('mousemove', this._onMove.bind(this))
    this.dom.addEventListener('mouseup',   this._onUp.bind(this))
    this.dom.addEventListener('mouseleave',this._onUp.bind(this))
    this.dom.addEventListener('wheel',     this._onWheel.bind(this), { passive: true })
    // 移动端触摸
    this.dom.addEventListener('touchstart', this._onTouchStart.bind(this), { passive: true })
    this.dom.addEventListener('touchmove',  this._onTouchMove.bind(this),  { passive: true })
    this.dom.addEventListener('touchend',   this._onUp.bind(this))
  }

  _onDown(e) {
    this._drag = true
    this._lastX = e.clientX
    this._lastY = e.clientY
    this.autoRotate = false
  }

  _onMove(e) {
    if (!this._drag) return
    const dx = e.clientX - this._lastX
    const dy = e.clientY - this._lastY
    this._lastX = e.clientX
    this._lastY = e.clientY
    this._rotate(dx, dy)
  }

  _onUp() {
    this._drag = false
    // 3 秒后恢复自动旋转
    clearTimeout(this._resumeTimer)
    this._resumeTimer = setTimeout(() => { this.autoRotate = true }, 3000)
  }

  _onWheel(e) {
    this.targetSpherical.radius = THREE.MathUtils.clamp(
      this.targetSpherical.radius + e.deltaY * this.zoomSpeed * 0.01,
      this.minRadius, this.maxRadius
    )
  }

  _rotate(dx, dy) {
    this.targetSpherical.theta -= dx * this.rotateSpeed * 0.01
    this.targetSpherical.phi   = THREE.MathUtils.clamp(
      this.targetSpherical.phi - dy * this.rotateSpeed * 0.01,
      0.1, Math.PI - 0.1
    )
  }

  _onTouchStart(e) {
    if (e.touches.length === 1) {
      this._drag = true
      this._lastX = e.touches[0].clientX
      this._lastY = e.touches[0].clientY
      this.autoRotate = false
    }
  }

  _onTouchMove(e) {
    if (!this._drag || e.touches.length !== 1) return
    const dx = e.touches[0].clientX - this._lastX
    const dy = e.touches[0].clientY - this._lastY
    this._lastX = e.touches[0].clientX
    this._lastY = e.touches[0].clientY
    this._rotate(dx, dy)
  }

  /** 每帧更新摄像机位置（阻尼插值） */
  update() {
    if (this.autoRotate) {
      this.targetSpherical.theta += this.autoRotateSpeed * 0.01
    }

    // 阻尼插值
    this.spherical.theta += (this.targetSpherical.theta - this.spherical.theta) * this.dampingFactor
    this.spherical.phi    += (this.targetSpherical.phi   - this.spherical.phi)   * this.dampingFactor
    this.spherical.radius += (this.targetSpherical.radius - this.spherical.radius) * this.dampingFactor
    this.spherical.makeSafe()

    this.camera.position.setFromSpherical(this.spherical)
    this.camera.lookAt(0, 0, 0)
  }

  dispose() {
    clearTimeout(this._resumeTimer)
  }
}
