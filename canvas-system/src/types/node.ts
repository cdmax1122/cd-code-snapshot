import type { Point, Size } from "./common";

/** 当前支持的节点类型，未来可以增加 "text"、"video"。 */
export type NodeKind = "image";

/** 节点完整的空间变换数据。 */
export interface Transform {
  x: number;
  y: number;
  z: number;
  scale: number;
  rotation: number;
}

/** 节点完整的状态数据。 */
export interface NodeState {
  visible: boolean;
  locked: boolean;
}

/**
 * 创建 Node 的公共参数。
 * transform 和 state 可以省略；如果传入，需要提供完整数据。
 */
export interface NodeOptions {
  id: string;
  transform?: Transform;
  state?: NodeState;
}

/**
 * 创建 ImageNode 的参数。
 * size 和 anchor 可以省略；如果传入，需要提供完整数据。
 */
export interface ImageNodeOptions extends NodeOptions {
  texture: string;
  size?: Size;
  anchor?: Point;
}

/** Node 转换成普通数据后的结构。 */
export interface NodeSnapshot {
  id: string;
  kind: NodeKind;
  transform: Transform;
  state: NodeState;
}

/** ImageNode 转换成普通数据后的结构。 */
export interface ImageNodeSnapshot extends NodeSnapshot {
  kind: "image";
  texture: string;
  size: Size;
  anchor: Point;
}

