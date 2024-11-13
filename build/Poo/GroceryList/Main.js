"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListType_1 = require("./ListType");
// import { List } from "./List";
const ListCourse_1 = require("./ListCourse");
// let list: List = new List("Dodotr", "9", ListType.LEGUME);
let todo = new ListCourse_1.ListCourse();
todo.addGrocery("Pattes", "3", ListType_1.ListType.LEGUME);
todo.addGrocery("Patte", "3", ListType_1.ListType.LEGUME);
// console.log(list.display())
console.log(todo.display());
//# sourceMappingURL=Main.js.map