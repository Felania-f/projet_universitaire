import Drawer from "./Drawer.js";
import { Game } from "./Game.js";
import { Player } from "./Player.js";

export class Display {
    private drawer: Drawer;

    constructor(width: number, height: number, scale: number = 10) {
        this.drawer = new Drawer(width, height, scale);
    }

    public refreshScore(score: number) {
        const scoreElement = document.getElementById("score");
        if (scoreElement) {
            scoreElement.innerHTML = `Score: ${score}`;
        }
    }

    public refreshLevel(level: number) {
        const levelElement = document.getElementById("level");
        if (levelElement) {
            levelElement.innerHTML = `Level: ${level}`;
        }
    }

    public draw(game: Game): void {
        this.drawer.clear();
        game.getEntities().forEach(entity => {
            if (entity instanceof Player) {
                this.drawer.drawCircle(entity.x, entity.y, entity.color);
            } else {
                this.drawer.drawRectangle(entity.x, entity.y, entity.color);
            }
        });
    }
}