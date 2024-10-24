import { ListType } from "./ListType";

export class List {
  private name: string;
  private quantity: string;
  private type: ListType;

  constructor(name: string, quantity: string, type: ListType) {
    this.name = name;
    this.quantity = quantity;
    this.type = type;
  }

  public display(): string {
    return `Nom:${this.name}\n Quantite:${this.quantity} \n Type:${ListType[this.type]}`
  }
}