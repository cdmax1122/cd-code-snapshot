import {
  Application,
  Assets,
  Container,
} from "pixi.js";
import {
  Camera,
  Edge,
  ImageNode,
  PixiSpatialRenderer,
  Scene,
  SpatialCanvas,
} from "../../src";
import { GridView } from "./grid-view";
import {
  DEMO_TEXTURES,
  HOUSE_TEXTURE,
  MAP_TEXTURE,
  TREE_TEXTURE,
} from "./textures";
import {
  DemoPixiViewFactory,
} from "./pixi-view-factory";
import "./style.css";

const host = requireElement<HTMLElement>("canvas-host");
const status = requireElement<HTMLElement>("status");

const app = new Application();
await app.init({
  width: host.clientWidth,
  height: host.clientHeight,
  antialias: true,
  autoDensity: true,
  resolution: Math.min(window.devicePixelRatio, 2),
  backgroundAlpha: 0,
});
host.appendChild(app.canvas);

await Assets.load(DEMO_TEXTURES);

const camera = new Camera({
  viewport: {
    width: host.clientWidth,
    height: host.clientHeight,
  },
  zoom: 1,
});
const scene = createScene();

const grid = new GridView();
const worldLayer = new Container();
app.stage.addChild(grid.graphics, worldLayer);

const viewFactory = new DemoPixiViewFactory(worldLayer);
const renderer = new PixiSpatialRenderer(viewFactory);
const canvas = new SpatialCanvas({
  scene,
  camera,
  renderer,
  projection: {
    shadows: true,
    shadowAlpha: 0.2,
    baseShadowOffset: 14,
  },
  schedule: (render) => requestAnimationFrame(render),
});

grid.draw(camera);
bindPointerEvents(canvas);
bindResize(canvas);

canvas.store.subscribe(() => {
  grid.draw(camera);
  const selected = canvas.store.selectedNodeIds;
  status.textContent =
    selected.length === 0
      ? "未选择节点"
      : `已选择：${selected.join(", ")}`;
});

window.addEventListener("beforeunload", () => {
  canvas.dispose();
  app.destroy();
});

function createScene(): Scene {
  const result = new Scene();

  const house = new ImageNode({
    id: "house",
    texture: HOUSE_TEXTURE,
    size: { width: 230, height: 195 },
    anchor: { x: 0.5, y: 1 },
  });
  house.setPosition(40, 35);

  const tree = new ImageNode({
    id: "tree",
    texture: TREE_TEXTURE,
    size: { width: 145, height: 176 },
    anchor: { x: 0.5, y: 1 },
  });
  tree.setPosition(-220, 90);

  const map = new ImageNode({
    id: "map",
    texture: MAP_TEXTURE,
    size: { width: 230, height: 148 },
    anchor: { x: 0.5, y: 0.5 },
  });
  map.setPosition(290, -125);
  map.setRotation(-0.04);

  result.addNode(house);
  result.addNode(tree);
  result.addNode(map);
  result.addEdge(new Edge("tree-house", "tree", "house"));
  result.addEdge(
    new Edge("house-map", "house", "map", {
      color: 0x69d8df,
      width: 2,
      alpha: 0.58,
    }),
  );

  return result;
}

function bindPointerEvents(spatialCanvas: SpatialCanvas): void {
  const element = app.canvas;

  element.addEventListener("pointerdown", (event) => {
    const handled = spatialCanvas.pointerDown({
      pointerId: event.pointerId,
      screen: getCanvasPoint(event),
      button: normalizeButton(event.button),
      shiftKey: event.shiftKey,
    });

    if (handled) {
      element.setPointerCapture(event.pointerId);
    }
  });

  element.addEventListener("pointermove", (event) => {
    const point = getCanvasPoint(event);
    spatialCanvas.pointerMove(event.pointerId, point.x, point.y);
  });

  element.addEventListener("pointerup", (event) => {
    spatialCanvas.pointerUp(event.pointerId);
    if (element.hasPointerCapture(event.pointerId)) {
      element.releasePointerCapture(event.pointerId);
    }
  });

  element.addEventListener("pointercancel", (event) => {
    spatialCanvas.interaction.pointerCancel(event.pointerId);
  });

  element.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      spatialCanvas.wheel({
        screen: getCanvasPoint(event),
        deltaY: event.deltaY,
      });
    },
    { passive: false },
  );

  element.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
}

function bindResize(spatialCanvas: SpatialCanvas): void {
  const observer = new ResizeObserver(() => {
    const width = Math.max(1, host.clientWidth);
    const height = Math.max(1, host.clientHeight);

    app.renderer.resize(width, height);
    spatialCanvas.resize(width, height);
    grid.draw(camera);
  });

  observer.observe(host);
}

function getCanvasPoint(event: MouseEvent): { x: number; y: number } {
  const bounds = app.canvas.getBoundingClientRect();
  return {
    x: event.clientX - bounds.left,
    y: event.clientY - bounds.top,
  };
}

function normalizeButton(button: number): 0 | 1 | 2 {
  if (button === 1) return 1;
  if (button === 2) return 2;
  return 0;
}

function requireElement<ElementType extends HTMLElement>(
  id: string,
): ElementType {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`element #${id} was not found`);
  }
  return element as ElementType;
}

