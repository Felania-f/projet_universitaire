import { Room } from "./Room";
export declare class LivingRoom extends Room {
    private hasTv;
    constructor(floor: number, area: number, hasTv: number);
    gethasTv(): number;
}
