import * as readlineSync from 'readline-sync';

function max_nb(a: number, b: number): number {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
let a1: number = Number(readlineSync.question("Entrez nb a:"));
let b1: number = Number(readlineSync.question("Entrez nb b:"));

const max = max_nb(a1, b1);
console.log('Le plus grand nombre est:', max);