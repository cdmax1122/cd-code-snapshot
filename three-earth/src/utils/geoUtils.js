/**
 * 地理坐标工具函数
 * 经纬度 <-> 三维球面坐标转换
 */

/**
 * 经纬度转三维坐标
 * @param {number} lat    - 纬度（度）
 * @param {number} lng    - 经度（度）
 * @param {number} radius - 球体半径
 * @returns {{ x, y, z }}
 */
export function latLngToVector3(lat, lng, radius) {
  const phi   = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return {
    x: -(radius * Math.sin(phi) * Math.cos(theta)),
    y:   radius * Math.cos(phi),
    z:   radius * Math.sin(phi) * Math.sin(theta),
  }
}
