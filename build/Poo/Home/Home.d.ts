import { Room } from './Room';
export declare class Home {
    private rooms;
    addRoom(room: Room): void;
    getTotalArea(): number;
    getFloorArea(floor: number): number;
    getLivingArea(): number;
    getNbWc(): number;
    getNbTv(): number;
}
