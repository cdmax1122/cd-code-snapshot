/**
 * EarthCore - 地球主体模块
 * 负责球体网格、贴图、大气层光晕、星空背景的创建
 */
import * as THREE from 'three'

export class EarthCore {
  constructor(scene, radius = 2) {
    this.scene = scene
    this.radius = radius
    this.mesh = null
    this.atmosphere = null
    this.cloudsMesh = null
    this._init()
  }

  _init() {
    this._createGlobe()
    this._createAtmosphere()
    this._createClouds()
    this._createStarfield()
  }

  /** 创建地球球体（canvas程序化纹理） */
  _createGlobe() {
    const geo = new THREE.SphereGeometry(this.radius, 64, 64)
    const texture = this._buildEarthTexture()
    const bumpTex = this._buildBumpTexture()

    const mat = new THREE.MeshPhongMaterial({
      map: texture,
      bumpMap: bumpTex,
      bumpScale: 0.04,
      specular: new THREE.Color(0x112244),
      shininess: 20,
    })

    this.mesh = new THREE.Mesh(geo, mat)
    this.scene.add(this.mesh)
  }

  /** 程序化生成地球贴图 */
  _buildEarthTexture() {
    const W = 2048, H = 1024
    const canvas = document.createElement('canvas')
    canvas.width = W; canvas.height = H
    const ctx = canvas.getContext('2d')

    // 深海底色
    ctx.fillStyle = '#060e1f'
    ctx.fillRect(0, 0, W, H)

    // 海洋蓝色调
    const ocean = ctx.createLinearGradient(0, 0, 0, H)
    ocean.addColorStop(0, 'rgba(8,30,80,0.85)')
    ocean.addColorStop(0.5, 'rgba(5,18,55,0.9)')
    ocean.addColorStop(1, 'rgba(8,30,80,0.85)')
    ctx.fillStyle = ocean
    ctx.fillRect(0, 0, W, H)

    // 陆地色
    ctx.fillStyle = '#1a3a28'

    // 亚欧大陆
    this._poly(ctx, [
      [830,240],[920,210],[1100,205],[1260,215],[1420,195],[1530,215],
      [1580,255],[1560,310],[1470,360],[1340,385],[1200,395],[1080,375],
      [980,398],[920,425],[875,405],[845,375],[825,330],[815,275]
    ])
    // 印度半岛
    this._poly(ctx, [[1080,380],[1120,370],[1150,430],[1130,490],[1090,520],[1060,480],[1050,420]])
    // 东南亚
    this._poly(ctx, [[1280,390],[1330,375],[1380,395],[1390,440],[1360,460],[1300,445],[1270,420]])
    // 日本
    this._poly(ctx, [[1440,255],[1460,245],[1470,270],[1455,290],[1435,280]])

    // 非洲
    this._poly(ctx, [
      [950,405],[990,375],[1040,368],[1075,395],[1090,455],[1095,530],
      [1070,610],[1030,660],[975,685],[928,665],[895,610],[882,545],
      [890,480],[915,440]
    ])
    // 马达加斯加
    this._poly(ctx, [[1065,540],[1080,525],[1090,555],[1080,595],[1060,600],[1048,568]])

    // 北美洲
    this._poly(ctx, [
      [220,185],[310,170],[400,165],[470,180],[510,225],[520,280],
      [490,340],[450,385],[400,410],[340,430],[290,420],[240,390],
      [200,350],[185,300],[195,250]
    ])
    // 格陵兰
    this._poly(ctx, [[360,120],[420,105],[460,115],[450,155],[400,165],[355,155]])
    // 中美洲/加勒比
    this._poly(ctx, [[430,415],[470,410],[490,435],[470,455],[440,450],[420,435]])

    // 南美洲
    this._poly(ctx, [
      [390,440],[450,425],[510,445],[540,500],[540,570],[520,640],
      [490,700],[450,730],[400,720],[360,680],[340,620],[345,550],
      [360,490]
    ])

    // 澳大利亚
    this._poly(ctx, [
      [1390,540],[1460,520],[1540,530],[1590,570],[1600,630],[1560,680],
      [1490,700],[1420,690],[1375,650],[1360,590]
    ])
    // 新西兰
    this._poly(ctx, [[1620,660],[1640,645],[1655,670],[1640,700],[1620,700]])

    // 南极洲
    ctx.fillStyle = '#c8d8e8'
    this._poly(ctx, [
      [0,890],[200,870],[400,855],[600,860],[800,850],[1000,855],
      [1200,850],[1400,855],[1600,860],[1800,865],[2048,870],
      [2048,1024],[0,1024]
    ])
    // 北极
    this._poly(ctx, [
      [0,130],[200,120],[400,125],[600,118],[800,122],[1000,118],
      [1200,122],[1400,118],[1600,125],[1800,120],[2048,130],[2048,0],[0,0]
    ])

    // 网格线（经纬线）
    ctx.strokeStyle = 'rgba(0,200,255,0.06)'
    ctx.lineWidth = 0.8
    for (let lon = 0; lon < 360; lon += 30) {
      const x = (lon / 360) * W
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
    }
    for (let lat = 0; lat <= 180; lat += 30) {
      const y = (lat / 180) * H
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
    }

    return new THREE.CanvasTexture(canvas)
  }

  /** 凸包多边形绘制辅助 */
  _poly(ctx, pts) {
    ctx.beginPath()
    ctx.moveTo(pts[0][0], pts[0][1])
    pts.slice(1).forEach(([x, y]) => ctx.lineTo(x, y))
    ctx.closePath()
    ctx.fill()
  }

  /** 法线贴图（简单噪声） */
  _buildBumpTexture() {
    const canvas = document.createElement('canvas')
    canvas.width = 512; canvas.height = 256
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#808080'
    ctx.fillRect(0, 0, 512, 256)
    return new THREE.CanvasTexture(canvas)
  }

  /** 大气层外光晕（Additive混合） */
  _createAtmosphere() {
    const geo = new THREE.SphereGeometry(this.radius * 1.08, 64, 64)
    const mat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0,0,1.0)), 3.0);
          gl_FragColor = vec4(0.1, 0.6, 1.0, 1.0) * intensity;
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    })
    this.atmosphere = new THREE.Mesh(geo, mat)
    this.scene.add(this.atmosphere)
  }

  /** 云层（半透明白色） */
  _createClouds() {
    const geo = new THREE.SphereGeometry(this.radius * 1.02, 48, 48)
    const mat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    })
    this.cloudsMesh = new THREE.Mesh(geo, mat)
    this.scene.add(this.cloudsMesh)
  }

  /** 星空背景（随机粒子） */
  _createStarfield() {
    const count = 6000
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 80 + Math.random() * 40
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.cos(phi)
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.12,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    })
    this.scene.add(new THREE.Points(geo, mat))
  }

  /** 每帧更新（云层缓慢旋转） */
  update(delta) {
    if (this.cloudsMesh) {
      this.cloudsMesh.rotation.y += delta * 0.02
    }
  }

  /** 获取球体半径 */
  getRadius() { return this.radius }
}
