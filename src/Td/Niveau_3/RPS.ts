import * as readlineSync from 'readline-sync';

// function obtenirChoixJoueur(player: string): string {
//   let choice: string = readlineSync.question(`${player}, choisis entre Pierre(R), Papier(P), Ciseau(S):`);

//   while (choice !== "r" && choice !== "p" && choice !== "s") {
//     console.log(`${player}Choisissez entre R, P, S`)
//     choice = readlineSync.question(`${player}, choisis entre Pierre, Papier ou Ciseaux: `);
//   }
//   return choice;
// }

function obtenirChoixJoueur(player: number): number {
  const choice = readlineSync.questionInt(`Joueur ${player}, choisissez entre 1(Pierre), 2(Papier), 3(Ciseaux):`);

  if (choice !== 1 && choice !== 2 && choice !== 3) {
    console.log("choix invalide");
    return obtenirChoixJoueur(player);
  }
  return choice;
}

function determinerGagnant(choice1: number, choice2: number): string {
  if (choice1 === choice2) {
    return "match nul";
  } else if ((choice1 - choice2 + 3) % 3 === 1) {
    return "joueur 1 gagne";
  } else {
    return "joueur 2 gagne";
  }
}
const choicePlayer1 = obtenirChoixJoueur(1);
const choicePlayer2 = obtenirChoixJoueur(2);
const resultat = determinerGagnant(choicePlayer1, choicePlayer2);
console.log(resultat);
