"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    addCard(card) {
        this.hand.unshift(card);
    }
    playCard() {
        return this.hand.pop();
    }
    displayHand() {
        console.log(`${this.name} à:\n`);
        this.hand.forEach(card => console.log(card.afficherCarte()));
    }
    getHandLength() {
        return this.hand.length;
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map