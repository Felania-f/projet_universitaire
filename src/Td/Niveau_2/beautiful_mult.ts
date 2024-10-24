import * as readlineSync from 'readline-sync';

function beautiful_mult(n: number): string {
  let multiplication = '';

  for (let i = 1; i <= 10; i++) {
    multiplication += `${n} x ${i} = ${n * i}`;
    if (i < 10) {
      multiplication += ', ';
    }
  }

  return multiplication;
}

let n1: number = Number(readlineSync.question('Entrez un nombre: '));
const multiplicationResult = beautiful_mult(n1);
console.log(multiplicationResult);