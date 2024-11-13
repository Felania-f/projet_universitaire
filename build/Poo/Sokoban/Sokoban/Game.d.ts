import { Player } from "./Player.js";
import { Rock } from "./Rock.js";
import { Hole } from "./Hole.js";
export declare class Game {
    private width;
    private height;
    private display;
    private player;
    private rocks;
    private holes;
    constructor(width: number, height: number, scale: number);
    getEntities(): (Player | Rock | Hole)[];
    update(): void;
}
