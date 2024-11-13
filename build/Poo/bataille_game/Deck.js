"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const Card_1 = require("./Card");
const couleur_1 = require("./couleur");
const Valeur_1 = require("./Valeur");
class Deck {
    constructor() {
        this.cards = this.createDeck();
    }
    createDeck() {
        const deck = [];
        // Obtenir les couleurs avec l'enum
        for (let i = 0; i < (Object.values(couleur_1.Couleur).length / 2); i++) {
            //prendre la couleur actuelle
            for (let j = 0; j < (Object.values(Valeur_1.Valeur).length / 2); j++) {
                //Ajouter chaque carte au deck
                deck.push(new Card_1.Card(Valeur_1.Valeur[j], couleur_1.Couleur[i]));
            }
        }
        return deck;
    }
    //   s as symbol
    // v as values
    //   create Deck(){
    //   for (let v = 0; v < 13; v++) {
    //     for (let s = 0; s < 4; s++) {
    //       this.cards.push(new Card(s, v))
    //     }
    //   }
    // }
    //afficher toutes les cartes du deck
    display() {
        for (let i = 0; i < this.cards.length; i++) {
            //afficher cartes utilisant la méthode afficherCarte() de la classe Card
            console.log(this.cards[i].afficherCarte());
        }
    }
    //Mélanger
    melanger() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            //Échange
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    //Tirer une carte du dessus du deck
    carteTirage() {
        // Vérifier si le deck a des cartes
        if (this.cards.length > 0) {
            //Retourner la carte du dessus
            const carte = this.cards.pop();
            return carte;
        }
        else {
            console.log("deck vide");
            return undefined;
        }
    }
}
exports.Deck = Deck;
//# sourceMappingURL=Deck.js.map