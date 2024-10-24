import * as readlineSync from 'readline-sync';

function is_even(a: number): boolean {
  return a % 2 === 0;
}
let a1: number = Number(readlineSync.question("Entrez nb:"));

const resultEven = is_even(a1);
console.log(resultEven ? `${a1} est pair` : `${a1} est impair`);
