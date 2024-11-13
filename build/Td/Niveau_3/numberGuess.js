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
// Génère un nombre aléatoire entre 1 et 1000
const nombreDeviner = Math.floor(Math.random() * 1000) + 1;
let guess = undefined;
let attempts = 0;
while (guess !== nombreDeviner) {
    guess = parseInt(readlineSync.question('Quel est ton nombre ? '));
    attempts++;
    if (isNaN(guess)) {
        console.log("entre un nombre valide.");
    }
    else if (guess < nombreDeviner) {
        console.log("trop petit");
    }
    else if (guess > nombreDeviner) {
        console.log("trop grand");
    }
    else {
        console.log(`Bravo ! Tu as trouvé le nombre en ${attempts} coups`);
    }
}
//# sourceMappingURL=numberGuess.js.map