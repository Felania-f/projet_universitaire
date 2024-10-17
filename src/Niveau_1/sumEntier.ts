import * as readlineSync from 'readline-sync';

function sum_int(n: number): number {
  let sum: number = 0;
  // for (let index = 1; index <= n; index++) 
  for (let index = 0; index < n; index++) {
    sum += index + 1;
  }
  return sum;
}

let n1: number = Number(readlineSync.question('Entrz un nombre:'))
const sum_intResult = sum_int(n1);
console.log('Somme:', sum_intResult);