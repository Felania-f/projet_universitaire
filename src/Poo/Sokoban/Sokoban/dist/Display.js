import Drawer from "./Drawer.js";
export class Display {
    constructor(width, height, scale = 10) {
        this.drawer = new Drawer(width, height, scale);
    }
    refreshLevel(level) {
        let levelElement = document.getElementById("score");
        if (levelElement != null) {
            levelElement.innerHTML = `Niveau: ${level}`;
        }
    }
    draw(game) {
        this.drawer.clear();
        game.getEntities().forEach(entity => {
            this.drawer.drawRectangle(entity.x, entity.y, entity.color);
        });
    }
}
