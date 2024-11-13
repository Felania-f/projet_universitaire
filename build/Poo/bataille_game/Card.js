"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(valeur, couleur) {
        this.valeur = valeur;
        this.couleur = couleur;
    }
    getValeur() {
        return this.valeur;
    }
    getCouleur() {
        return this.couleur;
    }
    afficherCarte() {
        return this.getValeur() + ' de ' + this.getCouleur();
    }
    getStrength() {
        return this.valeur;
    }
}
exports.Card = Card;
//# sourceMappingURL=Card.js.map