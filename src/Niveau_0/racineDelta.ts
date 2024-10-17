// import * as readlineSync from 'readline-sync';

// function racine_delta(a: number, b: number, c: number): number {
//   let delta: number = Math.pow(b, 2) - 4 * a * c;
//   if (delta == 0) { -b / 2 * a }
//   if (delta < 0) { console.log("[]") }
//   if (delta > 0) { [- b - Math.sqrt(delta) / 2 * a], [- b + Math.sqrt(delta) / 2 * a] }

// }

// let a1: number = Number(readlineSync.question("Entrez a:"))
// let b1: number = Number(readlineSync.question("Entrez b:"))
// let c1: number = Number(readlineSync.question("Entrz c:"))

// const resultDelta = racine_delta(a1, b1, c1);
// console.log('Delta =', resultDelta);

import * as readlineSync from 'readline-sync';

function delta(a: number, b: number, c: number): number {
  return Math.pow(b, 2) - 4 * a * c;
}

function root(a: number, b: number, c: number): number[] {
  const deltaResult = delta(a, b, c);

  if (deltaResult < 0) {
    return [];
  } else if (deltaResult === 0) {
    const rootUnique = -b / (2 * a);
    return [rootUnique];
  } else {
    const root1 = (-b - Math.sqrt(deltaResult)) / (2 * a);
    const root2 = (-b + Math.sqrt(deltaResult)) / (2 * a);
    return [root1, root2];
  }
}
let a1: number = Number(readlineSync.question("Entrez a: "));
let b1: number = Number(readlineSync.question("Entrez b: "));
let c1: number = Number(readlineSync.question("Entrez c: "));

const resultDelta = delta(a1, b1, c1);
const resultRoots = root(a1, b1, c1);
console.log('Delta:', resultDelta, 'Racines:', resultRoots);
