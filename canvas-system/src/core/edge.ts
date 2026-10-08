export interface EdgeStyle {
  color: number;
  width: number;
  alpha: number;
}

export interface EdgeSnapshot {
  id: string;
  sourceId: string;
  targetId: string;
  style: EdgeStyle;
}

const DEFAULT_EDGE_STYLE: Readonly<EdgeStyle> = Object.freeze({
  color: 0x8b93a7,
  width: 2,
  alpha: 0.72,
});

export class Edge {
  readonly id: string;
  readonly sourceId: string;
  readonly targetId: string;
  readonly style: EdgeStyle;

  constructor(
    id: string,
    sourceId: string,
    targetId: string,
    style: Partial<EdgeStyle> = {},
  ) {
    this.id = Edge.required(id, "edge id");
    this.sourceId = Edge.required(sourceId, "edge sourceId");
    this.targetId = Edge.required(targetId, "edge targetId");
    if (this.sourceId === this.targetId) {
      throw new RangeError("an edge must connect two different nodes");
    }
    this.style = { ...DEFAULT_EDGE_STYLE, ...style };
    if (this.style.width <= 0 || !Number.isFinite(this.style.width)) {
      throw new RangeError("edge width must be greater than zero");
    }
    if (this.style.alpha < 0 || this.style.alpha > 1) {
      throw new RangeError("edge alpha must be between 0 and 1");
    }
  }

  connects(nodeId: string): boolean {
    return this.sourceId === nodeId || this.targetId === nodeId;
  }

  toSnapshot(): EdgeSnapshot {
    return {
      id: this.id,
      sourceId: this.sourceId,
      targetId: this.targetId,
      style: { ...this.style },
    };
  }

  private static required(value: string, name: string): string {
    const normalized = value.trim();
    if (!normalized) {
      throw new TypeError(`${name} cannot be empty`);
    }
    return normalized;
  }
}

