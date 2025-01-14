export class Rock {
  private static idCounter = 0;
  public id: number;
  x: number;
  y: number;
  color: string;
  isStuck: boolean;
  setColor: any;

  constructor(x: number, y: number) {
    this.id = Rock.idCounter++;
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