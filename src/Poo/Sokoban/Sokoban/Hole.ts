//trou
export class Hole {
  x: number;
  y: number;
  color: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.color = "black";
  }

  public setColor(color: string): void {
    this.color = color;
  }

}