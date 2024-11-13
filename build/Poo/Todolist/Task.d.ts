import { TaskType } from "./TaskType";
export declare class Task {
    private name;
    private person;
    private type;
    constructor(name: string, person: string, type: TaskType);
    display(): string;
}
