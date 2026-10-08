import * as THREE from 'three'

function createEarthTexture() {
  const size = 1024
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  const seaGradient = ctx.createLinearGradient(0, 0, size, size)
  seaGradient.addColorStop(0, '#0b1530')
  seaGradient.addColorStop(0.5, '#143b74')
  seaGradient.addColorStop(1, '#09111f')
  ctx.fillStyle = seaGradient
  ctx.fillRect(0, 0, size, size)

  ctx.globalAlpha = 0.18
  for (let i = 0; i < 2200; i += 1) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = Math.random() * 3.5
    ctx.fillStyle = i % 2 === 0 ? '#2a6db8' : '#4db9ff'
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.globalAlpha = 0.95
  const landColors = ['#62f2d0', '#76d66b', '#b9ff6a']
  const continents = [
    [0.16, 0.32, 0.18, 0.12],
    [0.28, 0.58, 0.16, 0.2],
    [0.49, 0.35, 0.22, 0.16],
    [0.56, 0.63, 0.16, 0.12],
    [0.76, 0.34, 0.17, 0.13],
    [0.84, 0.66, 0.09, 0.06],
  ]

  continents.forEach(([cx, cy, rx, ry], index) => {
    ctx.fillStyle = landColors[index % landColors.length]
    ctx.beginPath()
    ctx.ellipse(cx * size, cy * size, rx * size, ry * size, Math.random() * 0.8, 0, Math.PI * 2)
    ctx.fill()

    ctx.globalAlpha = 0.5
    ctx.fillStyle = '#dfffe9'
    for (let i = 0; i < 28; i += 1) {
      ctx.beginPath()
      ctx.arc(
        cx * size + (Math.random() - 0.5) * rx * size * 1.4,
        cy * size + (Math.random() - 0.5) * ry * size * 1.4,
        Math.random() * 7,
        0,
        Math.PI * 2,
      )
      ctx.fill()
    }
    ctx.globalAlpha = 0.95
  })

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

export class Globe {
  constructor(radius = 5) {
    this.radius = radius
    this.group = new THREE.Group()

    const geometry = new THREE.SphereGeometry(radius, 96, 96)
    const material = new THREE.MeshStandardMaterial({
      map: createEarthTexture(),
      roughness: 0.82,
      metalness: 0.05,
      emissive: '#0a183f',
      emissiveIntensity: 0.68,
    })

    this.mesh = new THREE.Mesh(geometry, material)

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.09, 64, 64),
      new THREE.MeshBasicMaterial({
        color: '#3ea1ff',
        transparent: true,
        opacity: 0.14,
        side: THREE.BackSide,
      }),
    )

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius * 1.22, 0.06, 16, 180),
      new THREE.MeshBasicMaterial({ color: '#2cf7c4', transparent: true, opacity: 0.28 }),
    )
    ring.rotation.x = Math.PI / 1.9
    ring.rotation.y = Math.PI / 8

    this.group.add(this.mesh, atmosphere, ring)
  }

  update(delta) {
    this.mesh.rotation.y += delta * 0.08
    this.group.rotation.y += delta * 0.02
  }
}
