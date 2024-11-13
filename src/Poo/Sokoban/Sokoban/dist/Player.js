export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = "blue";
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    canMove(dx, dy, width, height) {
        const newX = this.x + dx;
        const newY = this.y + dy;
        return newX >= 0 && newX < width && newY >= 0 && newY < height;
    }
}
