"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const TaskType_1 = require("./TaskType");
class Task {
    constructor(name, person, type) {
        this.name = name;
        this.person = person;
        this.type = type;
    }
    display() {
        return `${this.name}:\n affected to:${this.person} \n type:${TaskType_1.TaskType[this.type]}`;
    }
}
exports.Task = Task;
//# sourceMappingURL=Task.js.map