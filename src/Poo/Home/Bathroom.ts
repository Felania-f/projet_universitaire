import { Room } from "./Room";

export class Bathroom extends Room {
  private hasWc: boolean;

  constructor(floor: number, area: number, hasWc: boolean) {
    super(floor, area);
    this.hasWc = hasWc;
  }

  // getter pour savoir si la salle de bain a des WC
  public getHasWc(): boolean {
    return this.hasWc;
  }
}