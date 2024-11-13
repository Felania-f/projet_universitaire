"use strict";
//entrer des nombres un à un, si le nombre entré est positif, on le prend. Dès qu'il est négatif, on s'arrête et on envoie la moyenne de 
//tous les nombres entrés 
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
function avg_inputs() {
    let sum = 0;
    let count = 0;
    while (true) {
        let input = readlineSync.question('Entrez un nombre: ');
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
//# sourceMappingURL=moyenne.js.map