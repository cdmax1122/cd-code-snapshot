import type { Node } from "../core";
import type { Point } from "../types";
import { SpatialStore } from "../store";

export type PointerButton = 0 | 1 | 2;

export interface PointerInput {
  pointerId: number;
  screen: Point;
  button: PointerButton;
  shiftKey?: boolean;
}

export interface WheelInput {
  screen: Point;
  deltaY: number;
}

export interface NodeHitTester {
  /** Returns the topmost node at a screen coordinate. */
  hitTest(screen: Point): string | undefined;
}

type Gesture =
  | {
      kind: "drag-node";
      pointerId: number;
      nodeId: string;
      worldOffset: Point;
    }
  | {
      kind: "pan-camera";
      pointerId: number;
      lastScreen: Point;
    };

export class CanvasController {
  private gesture?: Gesture;

  constructor(
    private readonly store: SpatialStore,
    private readonly hitTester: NodeHitTester,
  ) {}

  pointerDown(input: PointerInput): boolean {
    if (this.gesture) {
      return false;
    }

    const nodeId = this.hitTester.hitTest(input.screen);
    const shouldPan = input.button === 1 || input.button === 2 || !nodeId;
    if (shouldPan) {
      if (input.button === 0 && !input.shiftKey) {
        this.store.selectOnly();
      }
      this.gesture = {
        kind: "pan-camera",
        pointerId: input.pointerId,
        lastScreen: { ...input.screen },
      };
      return true;
    }

    const node = this.store.scene.requireNode(nodeId);
    if (node.state.locked) {
      return false;
    }

    if (input.shiftKey) {
      this.store.toggleSelection(node.id);
    } else if (!this.store.isSelected(node.id)) {
      this.store.selectOnly(node.id);
    }

    const world = this.store.camera.screenToWorld(input.screen, node.transform.z);
    this.gesture = {
      kind: "drag-node",
      pointerId: input.pointerId,
      nodeId: node.id,
      worldOffset: {
        x: world.x - node.transform.x,
        y: world.y - node.transform.y,
      },
    };
    return true;
  }

  pointerMove(pointerId: number, screen: Point): boolean {
    if (!this.gesture || this.gesture.pointerId !== pointerId) {
      return false;
    }

    if (this.gesture.kind === "pan-camera") {
      this.store.camera.panBy(
        screen.x - this.gesture.lastScreen.x,
        screen.y - this.gesture.lastScreen.y,
      );
      this.gesture.lastScreen = { ...screen };
      this.store.cameraChanged();
      return true;
    }

    const gesture = this.gesture;
    this.store.updateNode(gesture.nodeId, (node: Node) => {
      const world = this.store.camera.screenToWorld(
        screen,
        node.transform.z,
      );
      node.setPosition(
        world.x - gesture.worldOffset.x,
        world.y - gesture.worldOffset.y,
      );
    });
    return true;
  }

  pointerUp(pointerId: number): boolean {
    if (!this.gesture || this.gesture.pointerId !== pointerId) {
      return false;
    }
    this.gesture = undefined;
    return true;
  }

  pointerCancel(pointerId: number): boolean {
    return this.pointerUp(pointerId);
  }

  wheel(input: WheelInput): void {
    const factor = Math.exp(-input.deltaY * 0.0015);
    this.store.camera.zoomAt(input.screen, factor);
    this.store.cameraChanged();
  }
}
