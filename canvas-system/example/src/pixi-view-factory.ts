import {
  Container,
  Graphics,
  Sprite,
  Texture,
} from "pixi.js";
import type {
  PixiDepthEntry,
  PixiViewFactory,
  ProjectedEdge,
  ProjectedImage,
} from "../../src";

export interface ImageView {
  container: Container;
  shadow: Graphics;
  sprite: Sprite;
  selection: Graphics;
  textureKey: string;
}

export type EdgeView = Graphics;

/**
 * 示例中的 Pixi 视图工厂。
 * Core 不认识 Pixi，只有这个类负责把投影数据转换成 Pixi 对象。
 */
export class DemoPixiViewFactory
  implements PixiViewFactory<ImageView, EdgeView>
{
  constructor(private readonly layer: Container) {}

  createImage(model: ProjectedImage): ImageView {
    const container = new Container();
    const shadow = new Graphics();
    const sprite = new Sprite(Texture.from(model.texture));
    const selection = new Graphics();

    container.addChild(shadow, sprite, selection);
    this.layer.addChild(container);

    return {
      container,
      shadow,
      sprite,
      selection,
      textureKey: model.texture,
    };
  }

  updateImage(view: ImageView, model: ProjectedImage): void {
    if (view.textureKey !== model.texture) {
      view.sprite.texture = Texture.from(model.texture);
      view.textureKey = model.texture;
    }

    view.container.position.set(model.position.x, model.position.y);
    view.container.rotation = model.rotation;
    view.container.visible = model.visible;

    const width = model.size.width * model.scale;
    const height = model.size.height * model.scale;
    const left = -model.anchor.x * width;
    const top = -model.anchor.y * height;

    view.sprite.anchor.set(model.anchor.x, model.anchor.y);
    view.sprite.width = width;
    view.sprite.height = height;

    view.shadow.clear();
    if (model.shadow) {
      view.shadow
        .ellipse(
          model.shadow.offsetX,
          model.shadow.offsetY,
          Math.max(12, width * 0.3),
          Math.max(5, height * 0.055),
        )
        .fill({
          color: 0x02070d,
          alpha: model.shadow.alpha,
        });
    }

    view.selection.clear();
    if (model.selected) {
      view.selection
        .roundRect(left - 5, top - 5, width + 10, height + 10, 8)
        .stroke({
          color: 0x76e5ee,
          width: 2,
          alpha: 0.95,
        });
    }
  }

  destroyImage(view: ImageView): void {
    view.container.destroy({ children: true });
  }

  createEdge(_model: ProjectedEdge): EdgeView {
    const graphics = new Graphics();
    this.layer.addChild(graphics);
    return graphics;
  }

  updateEdge(view: EdgeView, model: ProjectedEdge): void {
    view
      .clear()
      .moveTo(model.source.x, model.source.y)
      .lineTo(model.target.x, model.target.y)
      .stroke({
        color: model.style.color,
        width: model.style.width,
        alpha: model.style.alpha,
      });
  }

  destroyEdge(view: EdgeView): void {
    view.destroy();
  }

  setDepthOrder(
    entries: readonly PixiDepthEntry<ImageView, EdgeView>[],
  ): void {
    entries.forEach((entry, index) => {
      const displayObject =
        entry.kind === "image"
          ? (entry.view as ImageView).container
          : (entry.view as EdgeView);

      this.layer.setChildIndex(displayObject, index);
    });
  }
}

