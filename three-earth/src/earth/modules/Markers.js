/**
 * Markers - 储能站位置标识模块
 * 在球面指定经纬度处渲染光柱 + 脉冲圆环标记
 */
import * as THREE from 'three'
import { latLngToVector3 } from '../../utils/geoUtils.js'
import { STATUS_COLORS } from '../../utils/stationData.js'

export class Markers {
  constructor(scene, radius) {
    this.scene = scene
    this.radius = radius
    this.markerList = [] // { mesh, ring, pulse, worldPos, stationId }
    this.group = new THREE.Group()
    scene.add(this.group)
  }

  /**
   * 添加储能站标记
   * @param {object} station - 站点数据
   */
  addStation(station) {
    const pos = latLngToVector3(station.lat, station.lng, this.radius)
    const worldPos = new THREE.Vector3(pos.x, pos.y, pos.z)
    const color = STATUS_COLORS[station.status] || '#00ff88'

    // --- 光柱 ---
    const pillarH = 0.18
    const pillarGeo = new THREE.CylinderGeometry(0.012, 0.025, pillarH, 8)
    const pillarMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.85,
    })
    const pillar = new THREE.Mesh(pillarGeo, pillarMat)

    // 定位到球面，并朝向球心法线方向
    pillar.position.copy(worldPos)
    pillar.lookAt(0, 0, 0)
    pillar.rotateX(Math.PI / 2)
    // 让柱底在球面
    const dir = worldPos.clone().normalize()
    pillar.position.copy(dir.multiplyScalar(this.radius + pillarH / 2))

    // --- 脉冲圆环 ---
    const ringGeo = new THREE.RingGeometry(0.04, 0.06, 32)
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.position.copy(worldPos.clone().normalize().multiplyScalar(this.radius + 0.01))
    ring.lookAt(0, 0, 0)

    // --- 外扩圆环（动画用） ---
    const pulseGeo = new THREE.RingGeometry(0.04, 0.07, 32)
    const pulseMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    })
    const pulse = new THREE.Mesh(pulseGeo, pulseMat)
    pulse.position.copy(ring.position)
    pulse.rotation.copy(ring.rotation)

    // --- 中心点 ---
    const dotGeo = new THREE.SphereGeometry(0.022, 12, 12)
    const dotMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color) })
    const dot = new THREE.Mesh(dotGeo, dotMat)
    dot.position.copy(worldPos.clone().normalize().multiplyScalar(this.radius + 0.022))

    this.group.add(pillar, ring, pulse, dot)

    this.markerList.push({
      stationId: station.id,
      worldPos: worldPos.clone().normalize().multiplyScalar(this.radius + 0.022),
      pillar,
      ring,
      pulse,
      dot,
      phase: Math.random() * Math.PI * 2, // 动画相位错开
    })
  }

  /** 每帧更新：脉冲动画 */
  update(elapsed) {
    for (const m of this.markerList) {
      const t = (elapsed * 1.5 + m.phase) % (Math.PI * 2)
      const scale = 1 + Math.sin(t) * 0.5
      m.pulse.scale.set(scale, scale, 1)
      m.pulse.material.opacity = 0.4 * (1 - Math.sin(t) * 0.5)
    }
  }

  /** 获取所有标记的屏幕投影数据（供HUD定位使用） */
  getScreenPositions(camera, width, height) {
    return this.markerList.map((m) => {
      const pos = m.worldPos.clone().project(camera)
      const visible = pos.z < 1 // z>1 表示在摄像机背后
      return {
        stationId: m.stationId,
        x: (pos.x * 0.5 + 0.5) * width,
        y: (-pos.y * 0.5 + 0.5) * height,
        visible,
      }
    })
  }
}
