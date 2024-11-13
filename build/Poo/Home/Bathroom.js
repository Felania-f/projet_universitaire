"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bathroom = void 0;
const Room_1 = require("./Room");
class Bathroom extends Room_1.Room {
    constructor(floor, area, hasWc) {
        super(floor, area);
        this.hasWc = hasWc;
    }
    // getter pour savoir si la salle de bain a des WC
    getHasWc() {
        return this.hasWc;
    }
}
exports.Bathroom = Bathroom;
//# sourceMappingURL=Bathroom.js.map