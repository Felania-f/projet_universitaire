import { Room } from "./Room";

export class LivingRoom extends Room {
  private hasTv: number;

  constructor(floor: number, area: number, hasTv: number) {
    super(floor, area);
    this.hasTv = hasTv;
  }

  public gethasTv(): number {
    return this.hasTv;
  }
}
