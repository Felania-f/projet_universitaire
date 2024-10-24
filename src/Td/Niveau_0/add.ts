import * as readlineSync from 'readline-sync';

function add(a: number, b: number): number {
  return a + b;
}

let a1: number = Number(readlineSync.question("Entrez a:"))
let b1: number = Number(readlineSync.question("Entrez b:"))

const resultAdd = add(a1, b1);
console.log("La somme est:", resultAdd);