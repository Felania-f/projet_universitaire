//trou
export class Hole {
  x: number;
  y: number;
  color: string;
  isFilled: boolean;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.color = "black";
    this.isFilled = false;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public fill(): void {
    if (!this.isFilled) {
      this.isFilled = true;
      this.setColor("red");
    }
  }
}