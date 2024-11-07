import { Card } from './Card';
import { Couleur } from './couleur';
import { Valeur } from './Valeur';

export class Deck {
  private cards: Card[];

  constructor() {
    this.cards = this.createDeck();
  }

  private createDeck(): Card[] {
    const deck: Card[] = [];

    // Obtenir les couleurs avec l'enum
    for (let i = 0; i < (Object.values(Couleur).length / 2); i++) {

      //prendre la couleur actuelle
      for (let j = 0; j < (Object.values(Valeur).length / 2); j++) {
        //Ajouter chaque carte au deck
        deck.push(new Card(Valeur[j as unknown as keyof typeof Valeur], Couleur[i as unknown as keyof typeof Couleur]));
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
  public display(): void {
    for (let i = 0; i < this.cards.length; i++) {
      //afficher cartes utilisant la méthode afficherCarte() de la classe Card
      console.log(this.cards[i].afficherCarte());
    }
  }

  //Mélanger
  public melanger(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      //Échange
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  //Tirer une carte du dessus du deck
  public carteTirage(): Card | undefined {
    // Vérifier si le deck a des cartes
    if (this.cards.length > 0) {
      //Retourner la carte du dessus
      const carte = this.cards.pop();
      return carte;
    } else {
      console.log("deck vide");
      return undefined;
    }
  }
}