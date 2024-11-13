"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskType_1 = require("./TaskType");
// import { Task } from "./Task";
const TodoList_1 = require("./TodoList");
// let task: Task = new Task("Dodotr", "Tout le mondeer", TaskType.ENTRETIEN);
let todo = new TodoList_1.TodoList();
todo.addTask("Dodo", "Tout le monde", TaskType_1.TaskType.ENTRETIEN);
// console.log(task.display())
console.log(todo.display());
//# sourceMappingURL=Main.js.map