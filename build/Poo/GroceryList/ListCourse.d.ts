import { ListType } from "./ListType";
import { List } from "./List";
export declare class ListCourse {
    private lists;
    constructor();
    addGrocery(name: string, quantity: string, type: ListType): void;
    display(): string;
    getGrocery(): List[];
}
