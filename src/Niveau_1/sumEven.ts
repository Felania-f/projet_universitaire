import * as readlineSync from 'readline-sync';

function sum_even(n: number): number {
  let sum: number = 0;
  for (let index = 0; index < n; index++) {
    if (index % 2 === 0) {
      sum += index;
    }
  }
  return sum;
}

let n1: number = Number(readlineSync.question('Entrez un nombre: '));
console.log('La somme des nb pairs:', sum_even(n1));
