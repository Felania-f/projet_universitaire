// import { Card } from './Card';
import { Card } from './Card';
import { Deck } from './Deck';
import { Player } from './Player';

export class Game {
  private deck: Deck;
  private players: Player[];

  constructor(playerNames: string[]) {
    this.deck = new Deck();
    this.players = [];

    //Instances de joueurs
    for (let i = 0; i < playerNames.length; i++) {
      const player = new Player(playerNames[i]);
      this.players.push(player);
    }
  }

  public start(): void {
    console.log("Deck avant le mélange:");
    this.deck.display();

    //Mélanger
    this.deck.melanger();
    console.log("\nDeck après le mélange:");
    this.deck.display();

    //Distribution
    this.distributeCards();

    //Afficher les cartes des joueur
    console.log("\nCartes de chaque joueur après distribution:");
    this.players.forEach(player => player.displayHand());

    //Commence le jeu
    this.commencerJeu();
  }

  private distributeCards(): void {
    let joueurEnCours = 0;

    while (true) {
      const card = this.deck.carteTirage();
      if (!card) break;

      this.players[joueurEnCours].addCard(card);
      joueurEnCours = (joueurEnCours + 1) % this.players.length;
    }
  }




  private commencerJeu(): void {
    console.log("\nDébut des tours de jeu :\n");

    let tour = 0;

    while (this.players[0].getHandLength() > 0 && this.players[1].getHandLength() > 0 && tour < 10) {
      tour++;

      const pile: Card[] = [];
      let card1 = this.players[0].playCard();
      let card2 = this.players[1].playCard();

      if (!card1 || !card2) break;

      pile.push(card1, card2);

      console.log(`${this.players[0].name} joue (${this.players[0].getHandLength()} cartes restantes) : ${card1.afficherCarte()}`);
      console.log(`${this.players[1].name} joue (${this.players[1].getHandLength()} cartes restantes): ${card2.afficherCarte()}`);

      if (card1.getStrength() === card2.getStrength()) {
        console.log("Bataille");

        if (this.players[0].getHandLength() < 2 || this.players[1].getHandLength() < 2) {
          console.log("Un des joueurs n'a pas assez de cartes pour la bataille!");
          break;
        }

        const carteCachee1 = this.players[0].playCard();
        const cartecachee2 = this.players[1].playCard();
        if (!carteCachee1 || !cartecachee2) break;

        pile.push(carteCachee1, cartecachee2);
        console.log("Cartes cachées posées-----------");

        card1 = this.players[0].playCard();
        card2 = this.players[1].playCard();
        if (!card1 || !card2) break;

        pile.push(card1, card2);
        console.log(`${this.players[0].name} joue:${card1.afficherCarte()}`);
        console.log(`${this.players[1].name} joue:${card2.afficherCarte()}`);
      }

      if (card1 && card2) {
        const battleWinner = card1.getStrength() > card2.getStrength() ? this.players[0] : this.players[1];
        console.log(`${battleWinner.name} remporte la pile\n`);
        pile.forEach(card => battleWinner.addCard(card));
      }
    }

    const winner = this.players[0].getHandLength() < this.players[1].getHandLength() ? this.players[1] : this.players[0];
    console.log(`\nFin du Jeu après ${tour} tours. ${winner.name} gagne la partie avec ${winner.getHandLength()} cartes!`);
  }
}
