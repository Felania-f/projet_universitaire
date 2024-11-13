export class Game {
    constructor(width: any, height: any, scale: any);
    width: any;
    height: any;
    display: Display;
    player: Player;
    rocks: Rock[];
    holes: Hole[];
    getEntities(): (Player | Rock | Hole)[];
    update(): void;
}
import { Display } from "./Display.js";
import { Player } from "./Player.js";
import { Rock } from "./Rock.js";
import { Hole } from "./Hole.js";
