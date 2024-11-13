import { Game } from "./Game.js";
export declare class Display {
    private drawer;
    constructor(width: number, height: number, scale?: number);
    refreshScore(score: number): void;
    draw(game: Game): void;
}
