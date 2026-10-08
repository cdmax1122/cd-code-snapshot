import type {
  NodeState,
  Transform,
} from "../types";

// 节点没有传位置数据时使用的默认值。
export const DEFAULT_TRANSFORM: Readonly<Transform> = Object.freeze({
  x: 0,
  y: 0,
  z: 0,
  scale: 1,
  rotation: 0,
});

// 节点没有传状态时使用的默认值。
export const DEFAULT_NODE_STATE: Readonly<NodeState> = Object.freeze({
  visible: true,
  locked: false,
});

// 确保输入是正常的有限数字。
export function finite(value: number, name: string): number {
  if (!Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
  }
  return value;
}

// 确保输入是大于零的数字。
export function positive(value: number, name: string): number {
  finite(value, name);
  if (value <= 0) {
    throw new RangeError(`${name} must be greater than zero`);
  }
  return value;
}

// 将数字限制在最小值和最大值之间。
export function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

// 补全默认值并检查 Transform 数据。
export function createTransform(input?: Transform): Transform {
  const transform = input
    ? { ...input }
    : { ...DEFAULT_TRANSFORM };

  finite(transform.x, "transform.x");
  finite(transform.y, "transform.y");
  finite(transform.z, "transform.z");
  positive(transform.scale, "transform.scale");
  finite(transform.rotation, "transform.rotation");

  return transform;
}
