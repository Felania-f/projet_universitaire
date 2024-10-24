import { LivingRoom } from './LivingRoom';
import { Room } from './Room';
import { wc } from './Wc';

export class Home {
  private rooms: Room[] = [];

  public addRoom(room: Room): void {
    this.rooms.push(room);
  }

  // surface totale de toutes les pièces
  public getTotalArea(): number {
    let totalArea: number = 0;
    //parcourir tous les rooms
    for (let i = 0; i < this.rooms.length; i++) {
      totalArea += this.rooms[i].getArea();
    }
    return totalArea;
  }

  // // surface totale des pieces a un étage specifique
  public getFloorArea(floor: number): number {
    let floorArea: number = 0;
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
  public getLivingArea(): number {
    let livingArea: number = 0;
    //parcourir tous les rooms
    for (let i = 0; i < this.rooms.length; i++) {
      //room est une instance de LivingRoom?
      if (this.rooms[i] instanceof LivingRoom) {
        livingArea += this.rooms[i].getArea();
      }
    }
    return livingArea;
  }


  //nombre de WC
  public getNbWc(): number {
    let wcNb: number = 0;
    for (let i = 0; i < this.rooms.length; i++) {
      //room est une instance de WC?
      if (this.rooms[i] instanceof wc) {
        wcNb = wcNb + 1;
      }
    }
    return wcNb;
  }

  //nombre total de TV
  public getNbTv(): number {
    let tvCount: number = 0;
    for (let i = 0; i < this.rooms.length; i++) {
      //room est une instance de salon?
      if (this.rooms[i] instanceof LivingRoom) {
        //  On ajoute le nombre de TV du salon au total et on doit faire un "cast" car TS sait pas que c un LivingRoom
        tvCount += (this.rooms[i] as LivingRoom).gethasTv();
      }
    }
    return tvCount;
  }
}