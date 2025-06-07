class Ray {
  constructor(
    public startX: number,
    public startY: number,
    public length: number,
    public angle: number,
    public color: string = 'blue',
    public width: number = 0.3
  ) { }

  draw(ctx: CanvasRenderingContext2D) {
    const endX = this.startX + this.length * Math.cos(this.angle);
    const endY = this.startY + this.length * Math.sin(this.angle);

    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;

    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
}

class RaysCollection {
  rays: Ray[] = [];

  constructor(public canvasWidth: number, public canvasHeight: number) { }

  generateRays(count: number) {
    this.rays = [];
    const startX = 0;
    const startY = this.canvasHeight / 2;

    for (let i = 0; i < count; i++) {
      const length = Math.random() * 900 + 50;      // длина от 50 до 350 px
      const angle = Math.random() * 2 * Math.PI;    // угол от 0 до 2π (вокруг точки)
      this.rays.push(new Ray(startX, startY, length, angle));
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (const ray of this.rays) {
      ray.draw(ctx);
    }
  }
}

window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    console.error('2D context not supported');
    return;
  }

  const raysCollection = new RaysCollection(canvas.width, canvas.height);
  raysCollection.generateRays(1500);
  raysCollection.draw(ctx);
};
