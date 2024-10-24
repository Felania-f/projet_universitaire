//entrer des nombres un à un, si le nombre entré est positif, on le prend. Dès qu'il est négatif, on s'arrête et on envoie la moyenne de 
//tous les nombres entrés 

import * as readlineSync from 'readline-sync';
function avg_inputs(): number {
  let sum = 0;
  let count = 0;

  while (true) {
    let input: string = readlineSync.question('Entrez un nombre: ');
    // convertion de la chaine (input) en nombre
    let nombre = Number(input);

    if (nombre < 0) {
      break;
    }
    sum += nombre;
    count++;
  }

  if (count === 0) {
    return 0;
  }
  return sum / count;
}

const moyenne = avg_inputs();
console.log(`La moyenne des nombres positifs est: ${moyenne}`);
