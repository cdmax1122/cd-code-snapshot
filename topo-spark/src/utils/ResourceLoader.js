export class ResourceLoader {
  constructor() {
    this.cache = new Map();
  }

  loadImage(src) {
    if (!src) return Promise.resolve(null);
    if (this.cache.has(src)) return this.cache.get(src);

    const promise = new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => resolve(null);
      image.src = src;
    });

    this.cache.set(src, promise);
    return promise;
  }
}
