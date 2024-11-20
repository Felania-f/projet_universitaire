export class Rock {
    constructor(x, y) {
        this.id = Rock.idCounter++;
        this.x = x;
        this.y = y;
        this.color = "gray";
        this.isStuck = false;
    }
    move(dx, dy) {
        if (this.isStuck)
            return;
        this.x += dx;
        this.y += dy;
    }
}
Rock.idCounter = 0;
