//trou
export class Hole {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = "black";
    }
    // Méthode pour changer la couleur du trou
    setColor(color) {
        this.color = color;
    }
}
