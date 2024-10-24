import * as readlineSync from 'readline-sync';

// Génère un nombre aléatoire entre 1 et 1000
const nombreDeviner: number = Math.floor(Math.random() * 1000) + 1;
let guess: number | undefined = undefined;
let attempts: number = 0;

while (guess !== nombreDeviner) {
  guess = parseInt(readlineSync.question('Quel est ton nombre ? '));
  attempts++;

  if (isNaN(guess)) {
    console.log("entre un nombre valide.");
  } else if (guess < nombreDeviner) {
    console.log("trop petit");
  } else if (guess > nombreDeviner) {
    console.log("trop grand");
  } else {
    console.log(`Bravo ! Tu as trouvé le nombre en ${attempts} coups`);
  }
}
