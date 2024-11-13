"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Display_js_1 = require("./Display.js");
const Player_js_1 = require("./Player.js");
const Rock_js_1 = require("./Rock.js");
const Hole_js_1 = require("./Hole.js");
class Game {
    constructor(width, height, scale) {
        this.width = width;
        this.height = height;
        this.display = new Display_js_1.Display(width, height, scale);
        this.player = new Player_js_1.Player(5, 5);
        this.rocks = [new Rock_js_1.Rock(8, 8)];
        this.holes = [new Hole_js_1.Hole(10, 10)];
    }
    getEntities() {
        return [this.player, ...this.rocks, ...this.holes];
    }
    update() {
        // Update game logic here, like checking if rock falls in hole
        this.display.draw(this);
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map