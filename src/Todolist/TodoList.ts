import { TaskType } from "./TaskType";
import { Task } from "./Task";

export class TodoList {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  public addTask(name: string, person: string, type: TaskType): void {
    this.tasks.push(new Task(name, person, type));
  }

  public display(): string {
    let res: string = ""
    for (let i = 0; i < this.tasks.length; i++) {
      res = res + this.tasks[i].display() + "\n\n"
    }
    return res;
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
