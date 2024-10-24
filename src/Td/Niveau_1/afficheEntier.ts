import * as readlineSync from 'readline-sync';

function print_int(n: number): number {
  // for (let index = 1; index <= n; index++) 
  for (let index = 0; index < n; index++) {
    console.log(index + 1);
  }
  return n;
}

let n1: number = Number(readlineSync.question('Entrz un nombre:'))
print_int(n1);