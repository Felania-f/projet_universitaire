"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCourse = void 0;
const List_1 = require("./List");
class ListCourse {
    constructor() {
        this.lists = [];
    }
    addGrocery(name, quantity, type) {
        this.lists.push(new List_1.List(name, quantity, type));
    }
    display() {
        let res = "";
        for (let i = 0; i < this.lists.length; i++) {
            res = res + this.lists[i].display() + "\n\n";
        }
        return res;
    }
    getGrocery() {
        return this.lists;
    }
}
exports.ListCourse = ListCourse;
//# sourceMappingURL=ListCourse.js.map