import Drawer from "./Drawer.js";
import { Player } from "./Player.js";
export class Display {
    constructor(width, height, scale = 10) {
        this.drawer = new Drawer(width, height, scale);
    }
    refreshScore(score) {
        const scoreElement = document.getElementById("score");
        if (scoreElement) {
            scoreElement.innerHTML = `Score: ${score}`;
        }
    }
    refreshLevel(level) {
        const levelElement = document.getElementById("level");
        if (levelElement) {
            levelElement.innerHTML = `Level: ${level}`;
        }
    }
    draw(game) {
        this.drawer.clear();
        game.getEntities().forEach(entity => {
            if (entity instanceof Player) {
                this.drawer.drawCircle(entity.x, entity.y, entity.color);
            }
            else {
                this.drawer.drawRectangle(entity.x, entity.y, entity.color);
            }
        });
    }
}
