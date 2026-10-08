import * as THREE from 'three'
import { latLngToVector3 } from '../../utils/coordTransform'

export class Markers {
  constructor(devices, radius) {
    this.group = new THREE.Group()
    this.markerMap = new Map()
    this.radius = radius

    devices.forEach((device) => {
      const position = latLngToVector3(device.lat, device.lng, radius + 0.12)
      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(0.11, 18, 18),
        new THREE.MeshStandardMaterial({
          color: device.color,
          emissive: device.color,
          emissiveIntensity: 1.1,
        }),
      )
      marker.position.copy(position)
      marker.userData = { type: 'device', id: device.id, baseScale: 1 }

      const halo = new THREE.Sprite(
        new THREE.SpriteMaterial({
          color: device.color,
          transparent: true,
          opacity: 0.45,
        }),
      )
      halo.scale.setScalar(0.42)
      marker.add(halo)

      this.markerMap.set(device.id, marker)
      this.group.add(marker)
    })
  }

  getObjects() {
    return Array.from(this.markerMap.values())
  }

  getWorldPosition(id) {
    const marker = this.markerMap.get(id)
    if (!marker) return null
    return marker.getWorldPosition(new THREE.Vector3())
  }

  setActive(id) {
    this.markerMap.forEach((marker, markerId) => {
      const isActive = markerId === id
      marker.scale.setScalar(isActive ? 1.7 : 1)
      marker.children.forEach((child) => child.scale.setScalar(isActive ? 0.7 : 0.42))
    })
  }

  update(elapsed) {
    this.markerMap.forEach((marker) => {
      const pulse = 1 + Math.sin(elapsed * 2.8 + marker.position.length()) * 0.06
      marker.children.forEach((child) => child.material.opacity = 0.28 + (pulse - 1) * 1.8)
    })
  }
}
