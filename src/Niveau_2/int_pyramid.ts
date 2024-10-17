import * as readlineSync from 'readline-sync';
function int_pyramid(n: number): string {
  let pyramid = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pyramid += j;
    }
    pyramid += '\n';
  }
  return pyramid;
}

let n1: number = Number(readlineSync.question('Entrez un nombre n:'));
const triangleResult = int_pyramid(n1);
console.log(triangleResult);
