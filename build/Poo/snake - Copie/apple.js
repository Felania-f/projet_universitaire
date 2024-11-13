"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apple = void 0;
class Apple {
    constructor() {
        this.position = { x: 0, y: 0 };
    }
    applePosition(width, height) {
        this.position = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height)
        };
    }
    draw(display) {
        display.drawCircle(this.position.x, this.position.y, "purple");
    }
    getPosition(width, height) {
        return this.position;
    }
}
exports.Apple = Apple;
//# sourceMappingURL=apple.js.map