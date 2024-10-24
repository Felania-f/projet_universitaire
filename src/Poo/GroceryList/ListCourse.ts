import { ListType } from "./ListType";
import { List } from "./List";

export class ListCourse {
  private lists: List[];

  constructor() {
    this.lists = [];
  }

  public addGrocery(name: string, quantity: string, type: ListType): void {
    this.lists.push(new List(name, quantity, type));
  }

  public display(): string {
    let res: string = ""
    for (let i = 0; i < this.lists.length; i++) {
      res = res + this.lists[i].display() + "\n\n"
    }
    return res;
  }

  getGrocery(): List[] {
    return this.lists;
  }
}
