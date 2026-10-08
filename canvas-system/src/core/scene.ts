import { Edge } from "./edge";
import type { EdgeSnapshot } from "./edge";
import { ImageNode } from "./node";
import type { Node } from "./node";
import type { ImageNodeSnapshot } from "../types";

export type SceneChangeKind =
  | "node-added"
  | "node-updated"
  | "node-removed"
  | "edge-added"
  | "edge-removed"
  | "reset";

export interface SceneChange {
  kind: SceneChangeKind;
  id?: string;
}

export interface SceneSnapshot {
  nodes: ImageNodeSnapshot[];
  edges: EdgeSnapshot[];
}

export type SceneListener = (change: SceneChange) => void;

export class Scene {
  private readonly nodes = new Map<string, Node>();
  private readonly edges = new Map<string, Edge>();
  private readonly listeners = new Set<SceneListener>();

  get nodeCount(): number {
    return this.nodes.size;
  }

  get edgeCount(): number {
    return this.edges.size;
  }

  addNode(node: Node): this {
    if (this.nodes.has(node.id)) {
      throw new Error(`node "${node.id}" already exists`);
    }
    this.nodes.set(node.id, node);
    this.emit("node-added", node.id);
    return this;
  }

  updateNode(id: string, mutate: (node: Node) => void): this {
    const node = this.requireNode(id);
    mutate(node);
    this.emit("node-updated", id);
    return this;
  }

  removeNode(id: string): boolean {
    if (!this.nodes.delete(id)) {
      return false;
    }
    for (const edge of [...this.edges.values()]) {
      if (edge.connects(id)) {
        this.edges.delete(edge.id);
      }
    }
    this.emit("node-removed", id);
    return true;
  }

  getNode(id: string): Node | undefined {
    return this.nodes.get(id);
  }

  requireNode(id: string): Node {
    const node = this.nodes.get(id);
    if (!node) {
      throw new Error(`node "${id}" does not exist`);
    }
    return node;
  }

  getNodes(): readonly Node[] {
    return [...this.nodes.values()];
  }

  addEdge(edge: Edge): this {
    if (this.edges.has(edge.id)) {
      throw new Error(`edge "${edge.id}" already exists`);
    }
    this.requireNode(edge.sourceId);
    this.requireNode(edge.targetId);
    this.edges.set(edge.id, edge);
    this.emit("edge-added", edge.id);
    return this;
  }

  removeEdge(id: string): boolean {
    if (!this.edges.delete(id)) {
      return false;
    }
    this.emit("edge-removed", id);
    return true;
  }

  getEdges(): readonly Edge[] {
    return [...this.edges.values()];
  }

  clear(): void {
    this.nodes.clear();
    this.edges.clear();
    this.emit("reset");
  }

  subscribe(listener: SceneListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  toSnapshot(): SceneSnapshot {
    return {
      nodes: this.getNodes().map((node) => node.toSnapshot() as ImageNodeSnapshot),
      edges: this.getEdges().map((edge) => edge.toSnapshot()),
    };
  }

  static fromSnapshot(snapshot: SceneSnapshot): Scene {
    const scene = new Scene();
    for (const node of snapshot.nodes) {
      scene.addNode(
        new ImageNode({
          id: node.id,
          texture: node.texture,
          transform: node.transform,
          state: node.state,
          size: node.size,
          anchor: node.anchor,
        }),
      );
    }
    for (const edge of snapshot.edges) {
      scene.addEdge(
        new Edge(edge.id, edge.sourceId, edge.targetId, edge.style),
      );
    }
    return scene;
  }

  private emit(kind: SceneChangeKind, id?: string): void {
    const change = { kind, id };
    for (const listener of this.listeners) {
      listener(change);
    }
  }
}
