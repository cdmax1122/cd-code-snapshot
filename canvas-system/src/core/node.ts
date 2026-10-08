import {
  createTransform,
  DEFAULT_NODE_STATE,
  finite,
  positive,
} from "./value-utils";
import type {
  ImageNodeOptions,
  ImageNodeSnapshot,
  NodeKind,
  NodeOptions,
  NodeSnapshot,
  NodeState,
  Point,
  Size,
  Transform,
} from "../types";

/**
 * 所有空间节点的基类。
 *
 * 公共内容：
 * - id：唯一标识
 * - transform：位置、缩放和旋转
 * - state：显示和锁定状态
 */
export abstract class Node {
  readonly id: string;

  // 子类必须声明自己的节点类型。
  abstract readonly kind: NodeKind;

  private _transform: Transform;
  private _state: NodeState;

  constructor(options: NodeOptions) {
    const id = options.id.trim();
    if (!id) {
      throw new TypeError("node id cannot be empty");
    }

    this.id = id;
    this._transform = createTransform(options.transform);
    this._state = {
      ...DEFAULT_NODE_STATE,
      ...options.state,
    };
  }

  // 返回副本，外部修改不会影响节点内部数据。
  get transform(): Transform {
    return { ...this._transform };
  }

  // 返回副本，外部修改不会影响节点内部数据。
  get state(): NodeState {
    return { ...this._state };
  }

  /** 设置节点位置。z 不传时保留原来的值。 */
  setPosition(x: number, y: number, z = this._transform.z): void {
    this._transform.x = finite(x, "transform.x");
    this._transform.y = finite(y, "transform.y");
    this._transform.z = finite(z, "transform.z");
  }

  /** 设置节点缩放。 */
  setScale(scale: number): void {
    this._transform.scale = positive(scale, "transform.scale");
  }

  /** 设置节点旋转角度。 */
  setRotation(rotation: number): void {
    this._transform.rotation = finite(rotation, "transform.rotation");
  }

  /** 输入相对移动距离，无返回值。 */
  translate(dx: number, dy: number, dz = 0): void {
    this.setPosition(
      this._transform.x + finite(dx, "dx"),
      this._transform.y + finite(dy, "dy"),
      this._transform.z + finite(dz, "dz"),
    );
  }

  /** 设置节点是否显示。 */
  setVisible(visible: boolean): void {
    this._state.visible = visible;
  }

  /** 设置节点是否锁定。 */
  setLocked(locked: boolean): void {
    this._state.locked = locked;
  }

  // 子类需要输出包含自身字段的普通数据。
  abstract toSnapshot(): NodeSnapshot;
}

/**
 * 图片节点只描述图片，不判断图片内容是 2D 还是 2.5D。
 */
export class ImageNode extends Node {
  readonly kind: "image" = "image";

  private _texture: string;
  private _size: Size;
  private _anchor: Point;

  constructor(options: ImageNodeOptions) {
    super(options);

    this._texture = validateTexture(options.texture);
    this._size = createSize(options.size);
    this._anchor = createAnchor(options.anchor);
  }

  get texture(): string {
    return this._texture;
  }

  get size(): Size {
    return { ...this._size };
  }

  get anchor(): Point {
    return { ...this._anchor };
  }

  /** 输入新的图片地址，无返回值。 */
  setTexture(texture: string): void {
    this._texture = validateTexture(texture);
  }

  /** 设置图片宽度和高度。 */
  setSize(width: number, height: number): void {
    this._size = createSize({ width, height });
  }

  /** 设置图片锚点。 */
  setAnchor(x: number, y: number): void {
    this._anchor = createAnchor({ x, y });
  }

  /** 返回可以保存为 JSON 的图片节点数据。 */
  toSnapshot(): ImageNodeSnapshot {
    return {
      id: this.id,
      kind: this.kind,
      texture: this._texture,
      transform: this.transform,
      state: this.state,
      size: this.size,
      anchor: this.anchor,
    };
  }
}

// 检查图片地址。
function validateTexture(texture: string): string {
  const value = texture.trim();
  if (!value) {
    throw new TypeError("image texture cannot be empty");
  }
  return value;
}

// 补全并检查图片尺寸。
function createSize(input?: Size): Size {
  return {
    width: positive(input?.width ?? 240, "size.width"),
    height: positive(input?.height ?? 160, "size.height"),
  };
}

// 补全并检查图片锚点。
function createAnchor(input?: Point): Point {
  const anchor = {
    x: finite(input?.x ?? 0.5, "anchor.x"),
    y: finite(input?.y ?? 0.5, "anchor.y"),
  };

  if (anchor.x < 0 || anchor.x > 1 || anchor.y < 0 || anchor.y > 1) {
    throw new RangeError("image anchor values must be between 0 and 1");
  }

  return anchor;
}
