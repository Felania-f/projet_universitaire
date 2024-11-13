"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const Task_1 = require("./Task");
class TodoList {
    constructor() {
        this.tasks = [];
    }
    addTask(name, person, type) {
        this.tasks.push(new Task_1.Task(name, person, type));
    }
    display() {
        let res = "";
        for (let i = 0; i < this.tasks.length; i++) {
            res = res + this.tasks[i].display() + "\n\n";
        }
        return res;
    }
    getTasks() {
        return this.tasks;
    }
}
exports.TodoList = TodoList;
//# sourceMappingURL=TodoList.js.map