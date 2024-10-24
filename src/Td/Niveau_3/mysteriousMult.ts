import * as readlineSync from 'readline-sync';

const nombreDeviner: number = Math.floor(Math.random() * 5000) + 1;
console.log(nombreDeviner);

function nombreEntrez(guess: number): boolean {
  if (nombreDeviner % guess !== 0) {
    return false;
  } else { return true }
}

let guess1: number = parseInt(readlineSync.question("Entrez un nombre:"));
const resultMult = nombreEntrez(guess1);
console.log(resultMult);