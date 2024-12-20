"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Drawer {
    constructor(width, height, scale = 10) {
        this.scale = scale;
        const canvas = document.createElement('canvas');
        canvas.width = width * this.scale;
        canvas.height = height * this.scale;
        this.ctx = canvas.getContext('2d');
        document.body.appendChild(canvas);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
    drawRectangle(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
    }
}
exports.default = Drawer;
//# sourceMappingURL=Drawer.js.map