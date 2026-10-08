import type {
  ProjectedEdge,
  ProjectedImage,
  RenderFrame,
  SpatialRenderer,
} from "../render-types";

/**
 * The concrete implementation may wrap PIXI.Sprite, Graphics and Container.
 * Keeping those values generic prevents Pixi types from leaking into the core.
 */
export interface PixiViewFactory<ImageView, EdgeView> {
  createImage(model: ProjectedImage): ImageView;
  updateImage(view: ImageView, model: ProjectedImage): void;
  destroyImage(view: ImageView): void;
  createEdge(model: ProjectedEdge): EdgeView;
  updateEdge(view: EdgeView, model: ProjectedEdge): void;
  destroyEdge(view: EdgeView): void;
  /** Receives a merged depth list so the stage can reorder its children. */
  setDepthOrder(entries: readonly PixiDepthEntry<ImageView, EdgeView>[]): void;
}

export interface PixiDepthEntry<ImageView, EdgeView> {
  id: string;
  kind: "image" | "edge";
  depthOrder: number;
  view: ImageView | EdgeView;
}

export class PixiSpatialRenderer<ImageView, EdgeView>
  implements SpatialRenderer
{
  private readonly imageViews = new Map<string, ImageView>();
  private readonly edgeViews = new Map<string, EdgeView>();
  private disposed = false;

  constructor(
    private readonly factory: PixiViewFactory<ImageView, EdgeView>,
  ) {}

  render(frame: RenderFrame): void {
    if (this.disposed) {
      throw new Error("renderer has been disposed");
    }

    const imageIds = new Set(frame.images.map((image) => image.id));
    const edgeIds = new Set(frame.edges.map((edge) => edge.id));

    this.removeMissing(this.imageViews, imageIds, (view) =>
      this.factory.destroyImage(view),
    );
    this.removeMissing(this.edgeViews, edgeIds, (view) =>
      this.factory.destroyEdge(view),
    );

    const order: PixiDepthEntry<ImageView, EdgeView>[] = [];
    for (const edge of frame.edges) {
      const view =
        this.edgeViews.get(edge.id) ?? this.createEdgeView(edge);
      this.factory.updateEdge(view, edge);
      order.push({
        id: edge.id,
        kind: "edge",
        depthOrder: edge.depthOrder,
        view,
      });
    }
    for (const image of frame.images) {
      const view =
        this.imageViews.get(image.id) ?? this.createImageView(image);
      this.factory.updateImage(view, image);
      order.push({
        id: image.id,
        kind: "image",
        depthOrder: image.depthOrder,
        view,
      });
    }

    order.sort((left, right) => left.depthOrder - right.depthOrder);
    this.factory.setDepthOrder(order);
  }

  dispose(): void {
    if (this.disposed) {
      return;
    }
    for (const view of this.imageViews.values()) {
      this.factory.destroyImage(view);
    }
    for (const view of this.edgeViews.values()) {
      this.factory.destroyEdge(view);
    }
    this.imageViews.clear();
    this.edgeViews.clear();
    this.disposed = true;
  }

  private createImageView(model: ProjectedImage): ImageView {
    const view = this.factory.createImage(model);
    this.imageViews.set(model.id, view);
    return view;
  }

  private createEdgeView(model: ProjectedEdge): EdgeView {
    const view = this.factory.createEdge(model);
    this.edgeViews.set(model.id, view);
    return view;
  }

  private removeMissing<View>(
    views: Map<string, View>,
    expectedIds: ReadonlySet<string>,
    destroy: (view: View) => void,
  ): void {
    for (const [id, view] of views) {
      if (!expectedIds.has(id)) {
        destroy(view);
        views.delete(id);
      }
    }
  }
}
