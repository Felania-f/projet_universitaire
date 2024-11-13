import { Display } from "./Display.js";
import { Snake } from "./snake.js";
export declare class Game {
    private snake;
    private apple;
    private width;
    private height;
    private score;
    constructor(width: number, height: number);
    getScore(): number;
    play(display: Display): boolean;
    private setupControls;
    getSnake(): Snake;
}
