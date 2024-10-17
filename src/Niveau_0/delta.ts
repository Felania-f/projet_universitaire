import * as readlineSync from 'readline-sync';

function delta(a: number, b: number, c: number): number {
  return Math.pow(b, 2) - 4 * a * c;
}

let a1: number = Number(readlineSync.question("Entrez a:"))
let b1: number = Number(readlineSync.question("Entrez b:"))
let c1: number = Number(readlineSync.question("Entrz c:"))

const resultDelta = delta(a1, b1, c1);
console.log('Delta =', resultDelta);