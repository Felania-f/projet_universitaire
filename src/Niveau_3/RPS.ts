// //entrer des nombres un à un, si le nombre entré est positif, on le prend. Dès qu'il est négatif, on s'arrête et on envoie la moyenne de
// //tous les nombres entrés

// import * as readlineSync from 'readline-sync';
// function rps(): number {
//   let R = 1;
//   let P = 2;
//   let C = 3;

//   while (true) {
//     let input: string = readlineSync.question('Entrez (Pierre (1), Papier(2), Ciseau(3)): ');
//     // convertion de la chaine (input) en nombre
//     let nombre = Number(input);

//     if (nombre < 0) {
//       break;
//     }
//     sum += nombre;
//     count++;
//   }

//   if (count === 0) {
//     return 0;
//   }
//   return sum / count;
// }

// const moyenne = rps();
// console.log(`La moyenne des nombres + est: ${moyenne}`);
