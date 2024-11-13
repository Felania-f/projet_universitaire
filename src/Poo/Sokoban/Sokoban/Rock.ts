export class Rock {
  x: number;
  y: number;
  color: string;
  isStuck: boolean;
  setColor: any;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.color = "gray";
    this.isStuck = false;
  }

  public move(dx: number, dy: number): void {
    if (this.isStuck) return;
    this.x += dx;
    this.y += dy;
  }
}