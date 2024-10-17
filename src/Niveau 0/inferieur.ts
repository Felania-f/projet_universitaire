import * as readlineSync from 'readline-sync';

function min_nb(a: number, b: number): number {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

let a1: number = Number(readlineSync.question("Entrez a: "));
let b1: number = Number(readlineSync.question("Entrez b: "));

const min = min_nb(a1, b1);
console.log('Le plus petit nombre est:', min);