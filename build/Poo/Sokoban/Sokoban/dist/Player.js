"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = "blue";
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map