import { clamp, finite, positive } from "./value-utils";
import type { Point, Size } from "../types";

export interface CameraOptions {
  position?: Partial<Point>;
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  viewport?: Partial<Size>;
  /** How many world Y units one Z unit is lifted on screen. */
  depthLift?: number;
}

export interface CameraSnapshot {
  position: Point;
  zoom: number;
  viewport: Size;
  depthLift: number;
}

export class Camera {
  private _position: Point;
  private _zoom: number;
  private _viewport: Size;
  private readonly minZoom: number;
  private readonly maxZoom: number;
  readonly depthLift: number;

  constructor(options: CameraOptions = {}) {
    this.minZoom = positive(options.minZoom ?? 0.1, "camera.minZoom");
    this.maxZoom = positive(options.maxZoom ?? 8, "camera.maxZoom");
    if (this.minZoom > this.maxZoom) {
      throw new RangeError("camera minZoom cannot exceed maxZoom");
    }
    this._position = {
      x: finite(options.position?.x ?? 0, "camera.position.x"),
      y: finite(options.position?.y ?? 0, "camera.position.y"),
    };
    this._zoom = clamp(
      positive(options.zoom ?? 1, "camera.zoom"),
      this.minZoom,
      this.maxZoom,
    );
    this._viewport = {
      width: positive(options.viewport?.width ?? 1, "viewport.width"),
      height: positive(options.viewport?.height ?? 1, "viewport.height"),
    };
    this.depthLift = finite(options.depthLift ?? 0.35, "camera.depthLift");
  }

  get position(): Readonly<Point> {
    return this._position;
  }

  get zoom(): number {
    return this._zoom;
  }

  get viewport(): Readonly<Size> {
    return this._viewport;
  }

  panBy(screenDx: number, screenDy: number): void {
    this._position = {
      x: this._position.x - finite(screenDx, "screenDx") / this._zoom,
      y: this._position.y - finite(screenDy, "screenDy") / this._zoom,
    };
  }

  moveTo(position: Point): void {
    this._position = {
      x: finite(position.x, "camera.position.x"),
      y: finite(position.y, "camera.position.y"),
    };
  }

  resize(viewport: Size): void {
    this._viewport = {
      width: positive(viewport.width, "viewport.width"),
      height: positive(viewport.height, "viewport.height"),
    };
  }

  zoomAt(screenPoint: Point, factor: number): void {
    positive(factor, "zoom factor");
    const anchorBefore = this.screenToWorld(screenPoint);
    this._zoom = clamp(this._zoom * factor, this.minZoom, this.maxZoom);
    const anchorAfter = this.screenToWorld(screenPoint);
    this._position = {
      x: this._position.x + anchorBefore.x - anchorAfter.x,
      y: this._position.y + anchorBefore.y - anchorAfter.y,
    };
  }

  worldToScreen(point: Point, z = 0): Point {
    return {
      x:
        (point.x - this._position.x) * this._zoom +
        this._viewport.width / 2,
      y:
        (point.y - this._position.y - z * this.depthLift) * this._zoom +
        this._viewport.height / 2,
    };
  }

  screenToWorld(point: Point, z = 0): Point {
    return {
      x:
        (point.x - this._viewport.width / 2) / this._zoom +
        this._position.x,
      y:
        (point.y - this._viewport.height / 2) / this._zoom +
        this._position.y +
        z * this.depthLift,
    };
  }

  toSnapshot(): CameraSnapshot {
    return {
      position: { ...this._position },
      zoom: this._zoom,
      viewport: { ...this._viewport },
      depthLift: this.depthLift,
    };
  }
}
