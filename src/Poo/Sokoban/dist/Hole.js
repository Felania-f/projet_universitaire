//trou
export class Hole {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = "black";
        this.isFilled = false;
    }
    setColor(color) {
        this.color = color;
    }
    fill() {
        if (!this.isFilled) {
            this.isFilled = true;
            this.setColor("red");
        }
    }
}
