import { Card } from './Card';

export class Player {
  private hand: Card[];
  name: string;

  constructor(name: string) {
    this.name = name;
    this.hand = [];
  }

  public addCard(card: Card): void {
    this.hand.unshift(card);
  }

  public playCard(): Card | undefined {
    return this.hand.pop();
  }

  public displayHand(): void {
    console.log(`${this.name} à:\n`);
    this.hand.forEach(card => console.log(card.afficherCarte()));
  }

  public getHandLength(): number {
    return this.hand.length;
  }
}
