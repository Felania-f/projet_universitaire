import { Room } from "./Room";

export class livingRoom extends Room {
  private hasWc: boolean;

  constructor(floor: number, area: number, hasWc: boolean) {
    super(floor, area);
    this.hasWc = hasWc;
  }

  // public getNbWc(): boolean {
  //   return this.NbWc;
  // }

  public display(): string {
    return `${this.hasWc}`
  }
}