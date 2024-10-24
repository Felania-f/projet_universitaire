import * as readlineSync from 'readline-sync';

function is_div(a: number, b: number): boolean {
  if (a % b === 0) {
    return true;
  } else { return false; }
}
let a1: number = Number(readlineSync.question("Entrez a:"))
let b1: number = Number(readlineSync.question("Entrez b:"))

const resultDiv = is_div(a1, b1);
console.log(resultDiv ? `${b1} divise ${a1}` : `${b1} ne divise pas ${a1}`);


