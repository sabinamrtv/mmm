class Rectangle {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public fillColor: string,
    public borderColor: string = 'black',
    public borderWidth: number = 1
  ) { }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderWidth;

    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}

class RectanglesCollection {
  rectangles: Rectangle[] = [];

  constructor(public canvasWidth: number, public canvasHeight: number) { }

  private randomColor(): string {
    const r = Math.floor(Math.random() * 200 + 30);
    const g = Math.floor(Math.random() * 200 + 30);
    const b = Math.floor(Math.random() * 200 + 30);
    return `rgb(${r},${g},${b})`;
  }

  generateRectangles(count: number) {
    this.rectangles = [];
    for (let i = 0; i < count; i++) {
      const width = Math.random() * 100 + 5; // ширина от 20 до 120
      const height = Math.random() * 80 + 10; // высота от 20 до 100
      const x = Math.random() * (this.canvasWidth - width);
      const y = Math.random() * (this.canvasHeight - height);
      const fillColor = this.randomColor();

      this.rectangles.push(new Rectangle(x, y, width, height, fillColor));
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (const rect of this.rectangles) {
      rect.draw(ctx);
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

  const collection = new RectanglesCollection(canvas.width, canvas.height);
  collection.generateRectangles(70); // генерируем 50 прямоугольников
  collection.draw(ctx);
};
