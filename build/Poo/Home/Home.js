"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const LivingRoom_1 = require("./LivingRoom");
const Wc_1 = require("./Wc");
class Home {
    constructor() {
        this.rooms = [];
    }
    addRoom(room) {
        this.rooms.push(room);
    }
    // surface totale de toutes les pièces
    getTotalArea() {
        let totalArea = 0;
        //parcourir tous les rooms
        for (let i = 0; i < this.rooms.length; i++) {
            totalArea += this.rooms[i].getArea();
        }
        return totalArea;
    }
    // // surface totale des pieces a un étage specifique
    getFloorArea(floor) {
        let floorArea = 0;
        //parcourir tous les rooms
        for (let i = 0; i < this.rooms.length; i++) {
            //le room est bien dans l'étage spécifique recherchez?
            if (this.rooms[i].getFloor() === floor) {
                floorArea += this.rooms[i].getArea();
            }
        }
        return floorArea;
    }
    //surface totale salon
    getLivingArea() {
        let livingArea = 0;
        //parcourir tous les rooms
        for (let i = 0; i < this.rooms.length; i++) {
            //room est une instance de LivingRoom?
            if (this.rooms[i] instanceof LivingRoom_1.LivingRoom) {
                livingArea += this.rooms[i].getArea();
            }
        }
        return livingArea;
    }
    //nombre de WC
    getNbWc() {
        let wcNb = 0;
        for (let i = 0; i < this.rooms.length; i++) {
            //room est une instance de WC?
            if (this.rooms[i] instanceof Wc_1.wc) {
                wcNb = wcNb + 1;
            }
        }
        return wcNb;
    }
    //nombre total de TV
    getNbTv() {
        let tvCount = 0;
        for (let i = 0; i < this.rooms.length; i++) {
            //room est une instance de salon?
            if (this.rooms[i] instanceof LivingRoom_1.LivingRoom) {
                //  On ajoute le nombre de TV du salon au total et on doit faire un "cast" car TS sait pas que c un LivingRoom
                tvCount += this.rooms[i].gethasTv();
            }
        }
        return tvCount;
    }
}
exports.Home = Home;
// getNbBeds
// getArea
//# sourceMappingURL=Home.js.map