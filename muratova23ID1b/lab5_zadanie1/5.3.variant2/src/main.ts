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

    // Веер (π радиан) от -90° до +90°
    const fanAngle = Math.PI * 1.1;
    const centerAngle = 0; // вправо

    // Максимальная и минимальная длина лучей
    const minLength = 70;
    const maxLength = 800;

    for (let i = 0; i < count; i++) {
      // Угол для i-го луча
      const angle = centerAngle - fanAngle / 2 + (fanAngle / (count - 1)) * i;

      // Расстояние от центра веера (чем ближе к краю, тем больше distance)
      const distanceFromCenter = Math.abs(angle - centerAngle);

      // Нормируем расстояние от 0 (в центре) до max (на краях)
      const maxDistance = fanAngle / 2;
      const normDistance = distanceFromCenter / maxDistance; // от 0 до 1

      // Длина — максимальная в центре, минимальная на краях, плавно меняется
      // Можно использовать параболическую зависимость, чтобы «пикировать» в центре
      const length = minLength + (1 - normDistance * normDistance) * (maxLength - minLength);

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
  raysCollection.generateRays(200);  // например, 500 лучей
  raysCollection.draw(ctx);
};
