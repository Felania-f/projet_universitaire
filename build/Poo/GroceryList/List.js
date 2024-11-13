"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const ListType_1 = require("./ListType");
class List {
    constructor(name, quantity, type) {
        this.name = name;
        this.quantity = quantity;
        this.type = type;
    }
    display() {
        return `Nom:${this.name}\n Quantite:${this.quantity} \n Type:${ListType_1.ListType[this.type]}`;
    }
}
exports.List = List;
//# sourceMappingURL=List.js.map