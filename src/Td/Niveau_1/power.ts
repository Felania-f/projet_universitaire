import * as readlineSync from 'readline-sync';

function power(x: number, n: number): number {
  let result: number = 1;
  for (let index = 1; index <= n; index++) {
    result = result * x;
  }
  return result;
}

let x1: number = Number(readlineSync.question("Entrez x: "));
let n1: number = Number(readlineSync.question("Entrez n: "));

const powerResult = power(x1, n1);
console.log(`${x1} puissance ${n1} =`, powerResult);
