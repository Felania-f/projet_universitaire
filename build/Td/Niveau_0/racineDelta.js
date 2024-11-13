"use strict";
// import * as readlineSync from 'readline-sync';
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
const readlineSync = __importStar(require("readline-sync"));
function delta(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}
function root(a, b, c) {
    const deltaResult = delta(a, b, c);
    if (deltaResult < 0) {
        return [];
    }
    else if (deltaResult === 0) {
        const rootUnique = -b / (2 * a);
        return [rootUnique];
    }
    else {
        const root1 = (-b - Math.sqrt(deltaResult)) / (2 * a);
        const root2 = (-b + Math.sqrt(deltaResult)) / (2 * a);
        return [root1, root2];
    }
}
let a1 = Number(readlineSync.question("Entrez a: "));
let b1 = Number(readlineSync.question("Entrez b: "));
let c1 = Number(readlineSync.question("Entrez c: "));
const resultDelta = delta(a1, b1, c1);
const resultRoots = root(a1, b1, c1);
console.log('Delta:', resultDelta, 'Racines:', resultRoots);
//# sourceMappingURL=racineDelta.js.map