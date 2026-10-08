import {
  Camera,
  ImageNode,
  Scene,
} from "../core";
import type {
  CameraSnapshot,
  Node,
  SceneChange,
  SceneSnapshot,
} from "../core";
import type { ImageNodeOptions } from "../types";

export type StoreChangeReason =
  | "scene"
  | "camera"
  | "selection"
  | "batch";

export interface StoreChange {
  reason: StoreChangeReason;
  sceneChange?: SceneChange;
}

export interface SpatialStoreSnapshot {
  scene: SceneSnapshot;
  camera: CameraSnapshot;
  selectedNodeIds: string[];
}

export type StoreListener = (change: StoreChange) => void;

export class SpatialStore {
  readonly scene: Scene;
  readonly camera: Camera;

  private readonly selectedIds = new Set<string>();
  private readonly listeners = new Set<StoreListener>();
  private sceneUnsubscribe: () => void;
  private batchDepth = 0;
  private pendingBatchChange = false;

  constructor(scene = new Scene(), camera = new Camera()) {
    this.scene = scene;
    this.camera = camera;
    this.sceneUnsubscribe = scene.subscribe((change) => {
      if (change.kind === "node-removed" && change.id) {
        this.selectedIds.delete(change.id);
      }
      this.emit("scene", change);
    });
  }

  get selectedNodeIds(): readonly string[] {
    return [...this.selectedIds];
  }

  createImage(options: ImageNodeOptions): ImageNode {
    const node = new ImageNode(options);
    this.scene.addNode(node);
    return node;
  }

  updateNode(id: string, mutate: (node: Node) => void): void {
    this.scene.updateNode(id, mutate);
  }

  removeNode(id: string): boolean {
    return this.scene.removeNode(id);
  }

  selectOnly(id?: string): void {
    if (id) {
      this.scene.requireNode(id);
    }
    const next = id ? [id] : [];
    if (
      next.length === this.selectedIds.size &&
      next.every((nodeId) => this.selectedIds.has(nodeId))
    ) {
      return;
    }
    this.selectedIds.clear();
    next.forEach((nodeId) => this.selectedIds.add(nodeId));
    this.emit("selection");
  }

  toggleSelection(id: string): void {
    this.scene.requireNode(id);
    if (this.selectedIds.has(id)) {
      this.selectedIds.delete(id);
    } else {
      this.selectedIds.add(id);
    }
    this.emit("selection");
  }

  isSelected(id: string): boolean {
    return this.selectedIds.has(id);
  }

  cameraChanged(): void {
    this.emit("camera");
  }

  batch(action: () => void): void {
    this.batchDepth += 1;
    try {
      action();
    } finally {
      this.batchDepth -= 1;
      if (this.batchDepth === 0 && this.pendingBatchChange) {
        this.pendingBatchChange = false;
        this.publish({ reason: "batch" });
      }
    }
  }

  subscribe(listener: StoreListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  dispose(): void {
    this.sceneUnsubscribe();
    this.listeners.clear();
  }

  toSnapshot(): SpatialStoreSnapshot {
    return {
      scene: this.scene.toSnapshot(),
      camera: this.camera.toSnapshot(),
      selectedNodeIds: [...this.selectedIds],
    };
  }

  private emit(reason: StoreChangeReason, sceneChange?: SceneChange): void {
    if (this.batchDepth > 0) {
      this.pendingBatchChange = true;
      return;
    }
    this.publish({ reason, sceneChange });
  }

  private publish(change: StoreChange): void {
    for (const listener of this.listeners) {
      listener(change);
    }
  }
}
