import { Card } from './Card';
export declare class Player {
    private hand;
    name: string;
    constructor(name: string);
    addCard(card: Card): void;
    playCard(): Card | undefined;
    displayHand(): void;
    getHandLength(): number;
}
