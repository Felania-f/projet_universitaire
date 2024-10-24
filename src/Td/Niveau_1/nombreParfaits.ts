import * as readlineSync from 'readline-sync';

function is_perfect(n: number): boolean {
  let sum: number = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum === n;
}

let n1: number = Number(readlineSync.question('Entrz un nb:'))
if (is_perfect(n1)) {
  console.log(`${n1} est parfait.`);
} else {
  console.log(`${n1} n'est pas parfait.`);
}