import * as THREE from 'three'

const EXAMPLE_CONFIGS = {
  box: () => {
    const geo = new THREE.BoxGeometry(1.5, 1.5, 1.5, 4, 4, 4)
    const mat = new THREE.MeshStandardMaterial({
      color: 0x4f8eff, metalness: 0.4, roughness: 0.3
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.castShadow = true
    const g = new THREE.Group()
    g.add(mesh)
    return g
  },
  sphere: () => {
    const geo = new THREE.SphereGeometry(1.0, 64, 32)
    const mat = new THREE.MeshStandardMaterial({
      color: 0xa259ff, metalness: 0.5, roughness: 0.2
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.castShadow = true
    const g = new THREE.Group()
    g.add(mesh)
    return g
  },
  torus: () => {
    const geo = new THREE.TorusGeometry(1.0, 0.35, 32, 128)
    const mat = new THREE.MeshStandardMaterial({
      color: 0x00d4b4, metalness: 0.6, roughness: 0.2
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.castShadow = true
    const g = new THREE.Group()
    g.add(mesh)
    return g
  },
  knot: () => {
    const geo = new THREE.TorusKnotGeometry(0.9, 0.28, 200, 32)
    const mat = new THREE.MeshStandardMaterial({
      color: 0xf5a623, metalness: 0.5, roughness: 0.25
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.castShadow = true
    const g = new THREE.Group()
    g.add(mesh)
    return g
  },
  diamond: () => {
    const geo = new THREE.OctahedronGeometry(1.2, 0)
    const mat = new THREE.MeshStandardMaterial({
      color: 0xff5f6d, metalness: 0.7, roughness: 0.1,
      envMapIntensity: 2.0
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.castShadow = true
    const g = new THREE.Group()
    g.add(mesh)
    return g
  },
  cone: () => {
    const geo = new THREE.ConeGeometry(0.9, 2.0, 64, 8)
    const mat = new THREE.MeshStandardMaterial({
      color: 0x3dd68c, metalness: 0.3, roughness: 0.4
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.castShadow = true
    const g = new THREE.Group()
    g.add(mesh)
    return g
  }
}

export function buildExampleModel(id) {
  const fn = EXAMPLE_CONFIGS[id]
  if (!fn) throw new Error(`Unknown example: ${id}`)
  return fn()
}

export function getExampleStats(id) {
  const statMap = {
    box:    { vertices: 96,   faces: 48,   triangles: 48,  meshes: 1, materials: 1 },
    sphere: { vertices: 2082, faces: 2048, triangles: 2048, meshes: 1, materials: 1 },
    torus:  { vertices: 4224, faces: 4096, triangles: 4096, meshes: 1, materials: 1 },
    knot:   { vertices: 6600, faces: 6400, triangles: 6400, meshes: 1, materials: 1 },
    diamond:{ vertices: 6,    faces: 8,    triangles: 8,   meshes: 1, materials: 1 },
    cone:   { vertices: 578,  faces: 512,  triangles: 512,  meshes: 1, materials: 1 },
  }
  return statMap[id] || { vertices: 0, faces: 0, triangles: 0, meshes: 1, materials: 1 }
}
