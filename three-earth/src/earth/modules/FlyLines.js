/**
 * FlyLines - 飞线动画模块
 * 基于贝塞尔曲线生成站点间弧形飞线，流光粒子动画展示能量传输
 */
import * as THREE from 'three'
import { latLngToVector3 } from '../../utils/geoUtils.js'

export class FlyLines {
  constructor(scene, radius) {
    this.scene = scene
    this.radius = radius
    this.flyItems = [] // 每条飞线的数据{ points, progress, particle }
    this.group = new THREE.Group()
    scene.add(this.group)
  }

  /**
   * 添加飞线
   * @param {object} from  - { lat, lng }
   * @param {object} to    - { lat, lng }
   * @param {string} color - 十六进制颜色
   */
  addLine(from, to, color = '#00c8ff') {
    const points = this._buildArcPoints(from, to)
    this._createStaticLine(points, color)
    this._createFlowParticle(points, color)
  }

  /** 贝塞尔弧线点集（80段） */
  _buildArcPoints(from, to) {
    const r = this.radius
    const sv = this._v3(latLngToVector3(from.lat, from.lng, r))
    const ev = this._v3(latLngToVector3(to.lat, to.lng, r))
    const mid = sv.clone().add(ev).multiplyScalar(0.5)
    mid.normalize().multiplyScalar(r + sv.distanceTo(ev) * 0.38)
    return new THREE.QuadraticBezierCurve3(sv, mid, ev).getPoints(80)
  }

  _v3(o) { return new THREE.Vector3(o.x, o.y, o.z) }

  /** 静态弧线（低透明度） */
  _createStaticLine(points, color) {
    const geo = new THREE.BufferGeometry().setFromPoints(points)
    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.18,
    })
    this.group.add(new THREE.Line(geo, mat))
  }

  /** 流光粒子：拖尾点集逐帧沿曲线推进 */
  _createFlowParticle(points, color) {
    const TRAIL = 14
    const pos = new Float32Array(TRAIL * 3)
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))

    const mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(color) } },
      vertexShader: /* glsl */`
        attribute float aAlpha;
        varying float vAlpha;
        void main() {
          vAlpha = aAlpha;
          gl_PointSize = 4.5 * vAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: /* glsl */`
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if(d > 0.5) discard;
          gl_FragColor = vec4(uColor, vAlpha * (1.0 - d * 1.8));
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    // 逐点alpha
    const alphas = new Float32Array(TRAIL)
    for (let i = 0; i < TRAIL; i++) alphas[i] = (i + 1) / TRAIL
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1))

    const pts = new THREE.Points(geo, mat)
    this.group.add(pts)

    this.flyItems.push({
      points,
      progress: Math.random(), // 错开初始位置
      geo,
      posAttr: geo.attributes.position,
      trail: TRAIL,
    })
  }

  /** 每帧更新：推进流光位置 */
  update(delta) {
    const speed = 0.18 // 每秒走完整条线的比例
    for (const item of this.flyItems) {
      item.progress = (item.progress + delta * speed) % 1
      const total = item.points.length
      const headIdx = Math.floor(item.progress * total)
      for (let i = 0; i < item.trail; i++) {
        const idx = (headIdx - i + total) % total
        const p = item.points[idx]
        item.posAttr.setXYZ(item.trail - 1 - i, p.x, p.y, p.z)
      }
      item.posAttr.needsUpdate = true
    }
  }

  /** 清空所有飞线 */
  clear() {
    this.group.clear()
    this.flyItems = []
  }
}
