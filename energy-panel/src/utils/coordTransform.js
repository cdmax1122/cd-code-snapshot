import * as THREE from 'three'

/**
 * 将经纬度转换为球面坐标。
 * 经度控制水平旋转，纬度控制南北方向抬升。
 */
export function latLngToVector3(lat, lng, radius = 5) {
  const phi = ((90 - lat) * Math.PI) / 180
  const theta = ((lng + 180) * Math.PI) / 180

  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

/**
 * Three.js 世界坐标转为容器内屏幕坐标。
 * 这里返回相对 container 左上角的像素位置，适合给 HTML 浮层直接使用。
 */
export function worldToScreen(position, camera, container) {
  const projected = position.clone().project(camera)
  const { clientWidth, clientHeight } = container

  return {
    x: ((projected.x + 1) / 2) * clientWidth,
    y: ((-projected.y + 1) / 2) * clientHeight,
    visible: projected.z < 1,
  }
}

export function createCurvePoints(startVector, endVector, altitude = 1.4) {
  const mid = startVector.clone().add(endVector).multiplyScalar(0.5)
  const distance = startVector.distanceTo(endVector)
  mid.normalize().multiplyScalar(startVector.length() + altitude + distance * 0.08)

  const curve = new THREE.QuadraticBezierCurve3(startVector, mid, endVector)
  return curve.getPoints(160)
}
