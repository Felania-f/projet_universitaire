import { Display } from "./Display.js";
export declare class Apple {
    private position;
    constructor();
    applePosition(width: number, height: number): void;
    draw(display: Display): void;
    getPosition(width?: number, height?: number): {
        x: number;
        y: number;
    };
}
