/**
 * Lighting - 场景光照模块
 * 配置环境光、平行光（模拟太阳）、半球光
 */
import * as THREE from 'three'

export class Lighting {
  constructor(scene) {
    this.scene = scene
    this._init()
  }

  _init() {
    // 环境光（微弱冷色，模拟宇宙散射）
    const ambient = new THREE.AmbientLight(0x111133, 0.8)
    this.scene.add(ambient)

    // 平行光（主光源，模拟太阳）
    const sun = new THREE.DirectionalLight(0xfff5e0, 1.6)
    sun.position.set(5, 3, 5)
    this.scene.add(sun)

    // 半球光（天地反射补光）
    const hemi = new THREE.HemisphereLight(0x0033aa, 0x001122, 0.4)
    this.scene.add(hemi)

    // 背面轮廓补光（冷蓝色）
    const rim = new THREE.DirectionalLight(0x0066ff, 0.5)
    rim.position.set(-5, -2, -5)
    this.scene.add(rim)
  }
}
