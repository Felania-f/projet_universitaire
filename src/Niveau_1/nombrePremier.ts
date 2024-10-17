import * as readlineSync from 'readline-sync';

function isprime(n: number): boolean {
  if (n < 2) {
    return false;
  }
  const racine_carree = Math.sqrt(n);
  for (let index = 2; index <= racine_carree; index++) {
    if (n % index === 0) {
      return false;
    }
  }
  return true;
}

let n1: number = Number(readlineSync.question('Entrez un nombre:'));
const isprimeResult = isprime(n1);
console.log(isprimeResult);

