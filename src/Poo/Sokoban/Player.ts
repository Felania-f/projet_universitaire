export class Player {
  x: number;
  y: number;
  color: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.color = "blue";
  }

  public move(dx: number, dy: number): void {
    this.x += dx;
    this.y += dy;
  }

  public canMove(dx: number, dy: number, width: number, height: number): boolean {
    const newX = this.x + dx;
    const newY = this.y + dy;
    return newX >= 0 && newX < width && newY >= 0 && newY < height;
  }
}