import { Room } from "./Room";
export declare class Bathroom extends Room {
    private hasWc;
    constructor(floor: number, area: number, hasWc: boolean);
    getHasWc(): boolean;
}
