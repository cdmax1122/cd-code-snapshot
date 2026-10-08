import { Camera, Scene } from "./core";
import { CanvasController } from "./interaction";
import type { PointerInput, WheelInput } from "./interaction";
import { SpatialProjector } from "./renderer";
import type {
  RenderFrame,
  SpatialProjectionOptions,
  SpatialRenderer,
} from "./renderer";
import { SpatialStore } from "./store";

export interface SpatialCanvasOptions {
  scene?: Scene;
  camera?: Camera;
  renderer: SpatialRenderer;
  projection?: SpatialProjectionOptions;
  /**
   * Inject requestAnimationFrame in the browser. Immediate execution is useful
   * for tests and non-DOM hosts.
   */
  schedule?: (render: () => void) => void;
}

export class SpatialCanvas {
  readonly store: SpatialStore;
  readonly interaction: CanvasController;

  private readonly renderer: SpatialRenderer;
  private readonly projector: SpatialProjector;
  private readonly schedule: (render: () => void) => void;
  private readonly unsubscribe: () => void;
  private renderPending = false;
  private disposed = false;

  constructor(options: SpatialCanvasOptions) {
    this.store = new SpatialStore(options.scene, options.camera);
    this.renderer = options.renderer;
    this.schedule = options.schedule ?? ((render) => render());
    this.projector = new SpatialProjector(
      this.store.scene,
      this.store.camera,
      (id) => this.store.isSelected(id),
      options.projection,
    );
    this.interaction = new CanvasController(this.store, this.projector);
    this.unsubscribe = this.store.subscribe(() => this.requestRender());
    this.renderNow();
  }

  resize(width: number, height: number): void {
    this.store.camera.resize({ width, height });
    this.store.cameraChanged();
  }

  pointerDown(input: PointerInput): boolean {
    return this.interaction.pointerDown(input);
  }

  pointerMove(pointerId: number, x: number, y: number): boolean {
    return this.interaction.pointerMove(pointerId, { x, y });
  }

  pointerUp(pointerId: number): boolean {
    return this.interaction.pointerUp(pointerId);
  }

  wheel(input: WheelInput): void {
    this.interaction.wheel(input);
  }

  renderNow(): RenderFrame {
    this.assertActive();
    this.renderPending = false;
    const frame = this.projector.project();
    this.renderer.render(frame);
    return frame;
  }

  dispose(): void {
    if (this.disposed) {
      return;
    }
    this.unsubscribe();
    this.store.dispose();
    this.renderer.dispose();
    this.disposed = true;
  }

  private requestRender(): void {
    if (this.renderPending || this.disposed) {
      return;
    }
    this.renderPending = true;
    this.schedule(() => {
      if (!this.disposed) {
        this.renderNow();
      }
    });
  }

  private assertActive(): void {
    if (this.disposed) {
      throw new Error("spatial canvas has been disposed");
    }
  }
}
