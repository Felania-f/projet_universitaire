export class Display {
    constructor(width: any, height: any, scale?: number);
    drawer: Drawer;
    refreshScore(score: any): void;
    draw(game: any): void;
}
import Drawer from "./Drawer.js";
