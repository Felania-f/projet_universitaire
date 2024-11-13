import { Room } from "./Room";
export declare class bedroom extends Room {
    private beds;
    constructor(floor: number, area: number, beds: number);
    display(): string;
}
