import Drawer from "./Drawer.js";
import { Game } from "./Game.js";

export class Display {
    private drawer: Drawer;

    constructor(width: number, height: number, scale: number = 10) {
        this.drawer = new Drawer(width, height, scale);
    }

    public refreshLevel(level: number) {
        let levelElement: HTMLElement | null = document.getElementById("score");
        if (levelElement != null) {
            levelElement.innerHTML = `${level}`;
        }
    }


    public draw(game: Game): void {
        this.drawer.clear();
        game.getEntities().forEach(entity => {
            this.drawer.drawRectangle(entity.x, entity.y, entity.color);
        });
    }


}