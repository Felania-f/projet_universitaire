import { TaskType } from "./TaskType";
import { Task } from "./Task";
export declare class TodoList {
    private tasks;
    constructor();
    addTask(name: string, person: string, type: TaskType): void;
    display(): string;
    getTasks(): Task[];
}
