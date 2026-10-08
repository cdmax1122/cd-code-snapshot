import type {
  EdgeStyle,
} from "../core";
import type { Point, Size } from "../types";

export interface ProjectedShadow {
  offsetX: number;
  offsetY: number;
  alpha: number;
  scale: number;
}

export interface ProjectedImage {
  id: string;
  texture: string;
  /** Image anchor position in screen coordinates. */
  position: Point;
  /** Normalized image anchor supplied by ImageNode. */
  anchor: Point;
  size: Size;
  scale: number;
  rotation: number;
  visible: boolean;
  selected: boolean;
  depthOrder: number;
  shadow?: ProjectedShadow;
}

export interface ProjectedEdge {
  id: string;
  source: Point;
  target: Point;
  style: EdgeStyle;
  depthOrder: number;
}

export interface RenderFrame {
  images: readonly ProjectedImage[];
  edges: readonly ProjectedEdge[];
}

export interface SpatialRenderer {
  render(frame: RenderFrame): void;
  dispose(): void;
}
