"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
const Drawer_js_1 = __importDefault(require("./Drawer.js"));
class Display {
    constructor(width, height, scale = 10) {
        this.drawer = new Drawer_js_1.default(width, height, scale);
    }
    refreshScore(score) {
        let scoreElement = document.getElementById("score");
        if (scoreElement != null)
            scoreElement.innerHTML = score.toString();
    }
    draw(game) {
        this.drawer.clear();
        game.getEntities().forEach(entity => {
            this.drawer.drawRectangle(entity.x, entity.y, entity.color);
        });
    }
}
exports.Display = Display;
//# sourceMappingURL=Display.js.map