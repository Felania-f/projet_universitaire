import { Game } from "./Game.js";
export declare class Display {
    private ctx;
    private scale;
    speed: number;
    score: number;
    constructor(width: number, height: number, scale?: number, speed?: number);
    drawRectangle(x: number, y: number, color: string): void;
    drawCircle(x: number, y: number, color: string): void;
    refreshScore(): void;
    play(game: Game): void;
}
