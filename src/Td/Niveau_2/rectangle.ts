import * as readlineSync from 'readline-sync';
function rectangle(n: number, m: number): string {
  let ligne = '*'.repeat(n);
  let colonne = '';
  for (let i = 0; i < m; i++) {
    colonne += ligne + '\n';
  }
  return colonne;
}

let n1: number = Number(readlineSync.question('Entrez un nombre n:'));
let m1: number = Number(readlineSync.question('Entrez un nombre m:'));
const rectangleResult = rectangle(n1, m1);
console.log(rectangleResult); 