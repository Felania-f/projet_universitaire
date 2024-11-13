import { Display } from "./Display.js";

export class Apple {
  private position: { x: number, y: number };

  constructor() {
    this.position = { x: 0, y: 0 };
  }

  applePosition(width: number, height: number) {
    this.position = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    };
  }

  draw(display: Display) {
    display.drawCircle(this.position.x, this.position.y, "purple");
  }

  getPosition(width?: number, height?: number) {
    return this.position;
  }
}