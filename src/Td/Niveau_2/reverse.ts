// en chaine de caratere
import * as readlineSync from 'readline-sync';
function n_reverse(n: number): string {
  let reverse = '';
  for (let i = n; i >= 1; i--) {
    reverse += i;
  }
  return reverse;
}

let n1: number = Number(readlineSync.question('Entrez un nombre n:'));
const reverseResult = n_reverse(n1);
console.log(reverseResult);

