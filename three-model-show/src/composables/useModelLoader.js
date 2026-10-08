import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import { STLLoader } from 'three/addons/loaders/STLLoader.js'
import { ColladaLoader } from 'three/addons/loaders/ColladaLoader.js'
import { PLYLoader } from 'three/addons/loaders/PLYLoader.js'

const DEFAULT_MAT = new THREE.MeshStandardMaterial({
  color: 0x8899cc,
  metalness: 0.2,
  roughness: 0.6
})

export function getFormat(name) {
  const ext = name.split('.').pop()?.toLowerCase() || ''
  const map = {
    glb: 'GLB', gltf: 'GLTF', obj: 'OBJ', fbx: 'FBX',
    stl: 'STL', dae: 'DAE', ply: 'PLY', '3ds': '3DS'
  }
  return map[ext] || ext.toUpperCase()
}

export function collectStats(object) {
  let vertices = 0, faces = 0, triangles = 0, meshes = 0, materials = 0
  const matSet = new Set()

  object.traverse(child => {
    if (child.isMesh) {
      meshes++
      const geo = child.geometry
      if (geo) {
        const pos = geo.attributes.position
        if (pos) vertices += pos.count
        if (geo.index) {
          triangles += geo.index.count / 3
          faces += geo.index.count / 3
        } else if (pos) {
          triangles += pos.count / 3
          faces += pos.count / 3
        }
      }
      if (Array.isArray(child.material)) {
        child.material.forEach(m => matSet.add(m.uuid))
      } else if (child.material) {
        matSet.add(child.material.uuid)
      }
    }
  })
  materials = matSet.size
  return {
    vertices: Math.round(vertices),
    faces: Math.round(faces),
    triangles: Math.round(triangles),
    meshes,
    materials
  }
}

function formatSize(bytes) {
  if (!bytes) return '-'
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1024 / 1024).toFixed(2) + ' MB'
}

export async function loadModelFromFile(file) {
  const url = URL.createObjectURL(file)
  const name = file.name
  const fmt = getFormat(name)
  const size = formatSize(file.size)

  try {
    const object = await loadByFormat(fmt, url, name, file)
    const stats = collectStats(object)
    URL.revokeObjectURL(url)
    return { object, info: { name, format: fmt, size, ...stats } }
  } catch (e) {
    URL.revokeObjectURL(url)
    throw e
  }
}

export async function loadByFormat(fmt, url, name, file) {
  switch (fmt) {
    case 'GLB':
    case 'GLTF': return loadGLTF(url)
    case 'OBJ': return loadOBJ(url)
    case 'FBX': return loadFBX(url)
    case 'STL': return loadSTL(url)
    case 'DAE': return loadDAE(url)
    case 'PLY': return loadPLY(url)
    default: throw new Error(`Unsupported format: ${fmt}`)
  }
}

function loadGLTF(url) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(url, gltf => resolve(gltf.scene), undefined, reject)
  })
}

function loadOBJ(url) {
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader()
    loader.load(url, obj => {
      obj.traverse(c => {
        if (c.isMesh && !c.material) c.material = DEFAULT_MAT.clone()
      })
      resolve(obj)
    }, undefined, reject)
  })
}

function loadFBX(url) {
  return new Promise((resolve, reject) => {
    const loader = new FBXLoader()
    loader.load(url, fbx => {
      fbx.traverse(c => {
        if (c.isMesh) c.castShadow = true
      })
      resolve(fbx)
    }, undefined, reject)
  })
}

function loadSTL(url) {
  return new Promise((resolve, reject) => {
    const loader = new STLLoader()
    loader.load(url, geo => {
      geo.computeVertexNormals()
      const mat = new THREE.MeshStandardMaterial({
        color: 0x8899cc, metalness: 0.3, roughness: 0.5
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.castShadow = true
      const group = new THREE.Group()
      group.add(mesh)
      resolve(group)
    }, undefined, reject)
  })
}

function loadDAE(url) {
  return new Promise((resolve, reject) => {
    const loader = new ColladaLoader()
    loader.load(url, collada => resolve(collada.scene), undefined, reject)
  })
}

function loadPLY(url) {
  return new Promise((resolve, reject) => {
    const loader = new PLYLoader()
    loader.load(url, geo => {
      geo.computeVertexNormals()
      const mat = new THREE.MeshStandardMaterial({
        vertexColors: geo.hasAttribute('color'),
        color: geo.hasAttribute('color') ? 0xffffff : 0x8899cc,
        metalness: 0.2,
        roughness: 0.6
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.castShadow = true
      const group = new THREE.Group()
      group.add(mesh)
      resolve(group)
    }, undefined, reject)
  })
}
