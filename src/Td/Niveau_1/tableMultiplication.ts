import * as readlineSync from 'readline-sync';

function mult_table(n: number): void {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

let n1: number = Number(readlineSync.question('Entrez un nombre: '));
mult_table(n1);
