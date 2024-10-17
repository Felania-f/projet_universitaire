import * as readlineSync from 'readline-sync';

function mult(a: number, b: number): number {
  return a * b;
}

let a1: number = Number(readlineSync.question("Entrez a:"));
let b1: number = Number(readlineSync.question("Entrez b:"));

const resultMult = mult(a1, b1);
console.log("Le produit est:", resultMult);