"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bedroom = void 0;
const Room_1 = require("./Room");
class bedroom extends Room_1.Room {
    constructor(floor, area, beds) {
        super(floor, area);
        this.beds = beds;
    }
    display() {
        return `${this.beds}`;
    }
}
exports.bedroom = bedroom;
//# sourceMappingURL=Bedroom.js.map