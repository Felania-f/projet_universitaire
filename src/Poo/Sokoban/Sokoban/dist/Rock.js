export class Rock {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = "gray";
        this.isStuck = false; // Par défaut, le rocher n'est pas bloqué
    }
    move(dx, dy) {
        if (this.isStuck)
            return; // Si le rocher est bloqué, il ne bouge pas
        this.x += dx;
        this.y += dy;
    }
}
