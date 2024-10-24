import * as readlineSync from 'readline-sync';

function pgcd(n: number, m: number): number {
  while (m !== 0) {
    let temp: number = m;
    m = n % m;
    n = temp;
  }
  return n;
}
let n: number = Number(readlineSync.question('Entrez n: '));
let m: number = Number(readlineSync.question('Entrez m: '));

const result = pgcd(n, m);
console.log(`Le PGCD de ${n} et ${m} est : ${result}`);