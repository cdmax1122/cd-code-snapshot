import { Camera, ImageNode, Scene } from "../core";
import type { Point } from "../types";
import type { NodeHitTester } from "../interaction";
import type {
  ProjectedEdge,
  ProjectedImage,
  RenderFrame,
} from "./render-types";

export interface SpatialProjectionOptions {
  /** Shadows are a renderer concern and are disabled by default. */
  shadows?: boolean;
  shadowAlpha?: number;
  baseShadowOffset?: number;
  shadowOffsetPerHeight?: number;
}

export class SpatialProjector implements NodeHitTester {
  private lastImages: readonly ProjectedImage[] = [];
  private readonly shadowAlpha: number;
  private readonly baseShadowOffset: number;
  private readonly shadowOffsetPerHeight: number;
  private readonly shadows: boolean;

  constructor(
    private readonly scene: Scene,
    private readonly camera: Camera,
    private readonly isSelected: (id: string) => boolean = () => false,
    options: SpatialProjectionOptions = {},
  ) {
    this.shadows = options.shadows ?? false;
    this.shadowAlpha = Math.min(1, Math.max(0, options.shadowAlpha ?? 0.28));
    this.baseShadowOffset = options.baseShadowOffset ?? 16;
    this.shadowOffsetPerHeight = options.shadowOffsetPerHeight ?? 0.08;
  }

  project(): RenderFrame {
    const images = this.scene
      .getNodes()
      .filter((node): node is ImageNode => node instanceof ImageNode)
      .map((node) => this.projectImage(node))
      .sort((left, right) => left.depthOrder - right.depthOrder);

    const imageById = new Map(images.map((image) => [image.id, image]));
    const edges = this.scene
      .getEdges()
      .map((edge): ProjectedEdge | undefined => {
        const source = imageById.get(edge.sourceId);
        const target = imageById.get(edge.targetId);
        if (!source || !target || !source.visible || !target.visible) {
          return undefined;
        }
        return {
          id: edge.id,
          source: this.visualCenter(source),
          target: this.visualCenter(target),
          style: { ...edge.style },
          depthOrder: Math.min(source.depthOrder, target.depthOrder) - 0.5,
        };
      })
      .filter((edge): edge is ProjectedEdge => edge !== undefined)
      .sort((left, right) => left.depthOrder - right.depthOrder);

    this.lastImages = images;
    return { images, edges };
  }

  hitTest(screen: Point): string | undefined {
    for (let index = this.lastImages.length - 1; index >= 0; index -= 1) {
      const image = this.lastImages[index];
      if (!image.visible) {
        continue;
      }

      const dx = screen.x - image.position.x;
      const dy = screen.y - image.position.y;
      const cos = Math.cos(-image.rotation);
      const sin = Math.sin(-image.rotation);
      const localX = (dx * cos - dy * sin) / image.scale;
      const localY = (dx * sin + dy * cos) / image.scale;
      const left = -image.anchor.x * image.size.width;
      const right = (1 - image.anchor.x) * image.size.width;
      const top = -image.anchor.y * image.size.height;
      const bottom = (1 - image.anchor.y) * image.size.height;

      if (
        localX >= left &&
        localX <= right &&
        localY >= top &&
        localY <= bottom
      ) {
        return image.id;
      }
    }
    return undefined;
  }

  private projectImage(node: ImageNode): ProjectedImage {
    const { transform } = node;
    const screenScale = transform.scale * this.camera.zoom;
    const shadowOffset = Math.max(
      0,
      this.baseShadowOffset + transform.z * this.shadowOffsetPerHeight,
    );

    return {
      id: node.id,
      texture: node.texture,
      position: this.camera.worldToScreen(transform, transform.z),
      anchor: { ...node.anchor },
      size: { ...node.size },
      scale: screenScale,
      rotation: transform.rotation,
      visible: node.state.visible,
      selected: this.isSelected(node.id),
      depthOrder: transform.z * 1_000_000 + transform.y,
      shadow: this.shadows
        ? {
            offsetX: shadowOffset * 0.55 * this.camera.zoom,
            offsetY: shadowOffset * this.camera.zoom,
            alpha: this.shadowAlpha,
            scale: 1,
          }
        : undefined,
    };
  }

  private visualCenter(image: ProjectedImage): Point {
    const localX = (0.5 - image.anchor.x) * image.size.width * image.scale;
    const localY = (0.5 - image.anchor.y) * image.size.height * image.scale;
    const cos = Math.cos(image.rotation);
    const sin = Math.sin(image.rotation);
    return {
      x: image.position.x + localX * cos - localY * sin,
      y: image.position.y + localX * sin + localY * cos,
    };
  }
}
