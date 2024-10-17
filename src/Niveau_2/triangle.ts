import * as readlineSync from 'readline-sync';
function h_triangle(h: number): string {
  let triangle = '';
  for (let i = 1; i <= h; i++) {
    triangle += '*'.repeat(i) + '\n';
  }
  return triangle;
}

let h1: number = Number(readlineSync.question('Entrez un nombre h:'));
const triangleResult = h_triangle(h1);
console.log(triangleResult);


