
export class Room {
  private floor: number;
  private area: number;

  constructor(floor: number, area: number) {
    this.floor = floor;
    this.area = area;
  }

  public getFloor(): number {
    return this.floor;
  }

  public getArea(): number {
    return this.area;
  }

  public display(): string {
    return `${this.floor}:\n affected to:${this.area}`
  }
}