class Line {
  constructor(
    public x1: number,
    public y1: number,
    public x2: number,
    public y2: number,
    public color: string,
    public width: number = 2
  ) { }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
  }
}

class TangledLines {
  lines: Line[] = [];

  constructor(public width: number, public height: number) { }

  private randomColor(): string {
    const r = Math.floor(Math.random() * 200 + 30);
    const g = Math.floor(Math.random() * 200 + 30);
    const b = Math.floor(Math.random() * 200 + 30);
    return `rgb(${r},${g},${b})`;
  }

  generateLines(count: number) {
    this.lines = [];
    for (let i = 0; i < count; i++) {
      const x1 = Math.random() * this.width;
      const y1 = Math.random() * this.height;
      const x2 = Math.random() * this.width;
      const y2 = Math.random() * this.height;
      const color = this.randomColor();
      const width = 1;
      this.lines.push(new Line(x1, y1, x2, y2, color, width));
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (const line of this.lines) {
      line.draw(ctx);
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

  const tangled = new TangledLines(canvas.width, canvas.height);
  tangled.generateLines(5000);
  tangled.draw(ctx);
};
