import { Room } from "./Room";

export class bedroom extends Room {
  private beds: number;


  constructor(floor: number, area: number, beds: number) {
    super(floor, area);
    this.beds = beds;
  }

  public display(): string {
    return `${this.beds}`
  }
}