"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
// function obtenirChoixJoueur(player: string): string {
//   let choice: string = readlineSync.question(`${player}, choisis entre Pierre(R), Papier(P), Ciseau(S):`);
//   while (choice !== "r" && choice !== "p" && choice !== "s") {
//     console.log(`${player}Choisissez entre R, P, S`)
//     choice = readlineSync.question(`${player}, choisis entre Pierre, Papier ou Ciseaux: `);
//   }
//   return choice;
// }
function obtenirChoixJoueur(player) {
    const choice = readlineSync.questionInt(`Joueur ${player}, choisissez entre 1(Pierre), 2(Papier), 3(Ciseaux):`);
    if (choice !== 1 && choice !== 2 && choice !== 3) {
        console.log("choix invalide");
        return obtenirChoixJoueur(player);
    }
    return choice;
}
function determinerGagnant(choice1, choice2) {
    if (choice1 === choice2) {
        return "match nul";
    }
    else if ((choice1 - choice2 + 3) % 3 === 1) {
        return "joueur 1 gagne";
    }
    else {
        return "joueur 2 gagne";
    }
}
const choicePlayer1 = obtenirChoixJoueur(1);
const choicePlayer2 = obtenirChoixJoueur(2);
const resultat = determinerGagnant(choicePlayer1, choicePlayer2);
console.log(resultat);
//# sourceMappingURL=RPS.js.map