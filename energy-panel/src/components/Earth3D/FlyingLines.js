import * as THREE from 'three'
import { createCurvePoints, latLngToVector3 } from '../../utils/coordTransform'

const levelColors = {
  normal: ['#2cf7c4', '#9ef01a'],
  medium: ['#57b7ff', '#ffd166'],
  high: ['#ffd166', '#ff5f6d'],
}

export class FlyingLines {
  constructor(routes, radius) {
    this.group = new THREE.Group()
    this.flowDots = []

    routes.forEach((route) => {
      const start = latLngToVector3(route.source.lat, route.source.lng, radius + 0.06)
      const end = latLngToVector3(route.target.lat, route.target.lng, radius + 0.06)
      const points = createCurvePoints(start, end, 1.5)
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const [from, to] = levelColors[route.level]

      const line = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({ color: from, transparent: true, opacity: 0.52 }),
      )

      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 12, 12),
        new THREE.MeshBasicMaterial({ color: to }),
      )
      dot.userData = {
        speed: 0.002 + Math.random() * 0.0025,
        progress: Math.random(),
        points,
      }

      const glow = new THREE.Sprite(
        new THREE.SpriteMaterial({ color: to, transparent: true, opacity: 0.45 }),
      )
      glow.scale.setScalar(0.34)
      dot.add(glow)

      this.flowDots.push(dot)
      this.group.add(line, dot)
    })
  }

  update() {
    this.flowDots.forEach((dot) => {
      const { points, speed } = dot.userData
      dot.userData.progress = (dot.userData.progress + speed) % 1
      const index = Math.floor(dot.userData.progress * (points.length - 1))
      dot.position.copy(points[index])
    })
  }
}
