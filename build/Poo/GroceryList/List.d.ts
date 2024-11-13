import { ListType } from "./ListType";
export declare class List {
    private name;
    private quantity;
    private type;
    constructor(name: string, quantity: string, type: ListType);
    display(): string;
}
