"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivingRoom = void 0;
const Room_1 = require("./Room");
class LivingRoom extends Room_1.Room {
    constructor(floor, area, hasTv) {
        super(floor, area);
        this.hasTv = hasTv;
    }
    gethasTv() {
        return this.hasTv;
    }
}
exports.LivingRoom = LivingRoom;
//# sourceMappingURL=LivingRoom.js.map