import { TaskType } from "./TaskType";
// import { Task } from "./Task";
import { TodoList } from "./TodoList";

// let task: Task = new Task("Dodotr", "Tout le mondeer", TaskType.ENTRETIEN);
let todo = new TodoList();
todo.addTask("Dodo", "Tout le monde", TaskType.ENTRETIEN)

// console.log(task.display())
console.log(todo.display())


