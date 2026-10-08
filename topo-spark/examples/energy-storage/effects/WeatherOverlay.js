export class WeatherOverlay {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.dpr = window.devicePixelRatio || 1;
    this.scene = 'sunny';
    this.particles = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.setScene('sunny');
    requestAnimationFrame(this.tick.bind(this));
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = Math.floor(rect.width * this.dpr);
    this.canvas.height = Math.floor(rect.height * this.dpr);
  }

  setScene(scene) {
    this.scene = scene;
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;
    const count = scene === 'rainy' ? 120 : 34;
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      l: 12 + Math.random() * 20,
      speed: 0.6 + Math.random() * 1.8,
      radius: 20 + Math.random() * 50,
      alpha: 0.08 + Math.random() * 0.16
    }));
  }

  tick() {
    const ctx = this.ctx;
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    if (this.scene === 'rainy') {
      ctx.strokeStyle = 'rgba(125, 211, 252, 0.26)';
      ctx.lineWidth = 1;
      for (const drop of this.particles) {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - drop.l * 0.36, drop.y + drop.l);
        ctx.stroke();
        drop.x -= drop.speed * 0.8;
        drop.y += drop.speed * 4;
        if (drop.y > height + 40) {
          drop.y = -40;
          drop.x = Math.random() * width;
        }
      }
    } else {
      for (const glow of this.particles) {
        const gradient = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, glow.radius);
        gradient.addColorStop(0, `rgba(250, 204, 21, ${glow.alpha})`);
        gradient.addColorStop(1, 'rgba(250, 204, 21, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(glow.x, glow.y, glow.radius, 0, Math.PI * 2);
        ctx.fill();
        glow.x += Math.sin(Date.now() * 0.0003 + glow.y) * 0.12;
      }
    }

    requestAnimationFrame(this.tick.bind(this));
  }
}
