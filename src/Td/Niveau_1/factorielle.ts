import * as readlineSync from 'readline-sync';

function factorial(n: number): number {
  let result: number = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
let n1: number = Number(readlineSync.question('Entrez n:'));
const factorialResult = factorial(n1);
console.log(`Factorielle de ${n1} est: ${factorialResult}`);