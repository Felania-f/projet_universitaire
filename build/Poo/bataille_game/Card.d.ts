import { Couleur } from "./couleur";
import { Valeur } from "./Valeur";
export declare class Card {
    private valeur;
    private couleur;
    constructor(valeur: Valeur, couleur: Couleur);
    getValeur(): number;
    getCouleur(): Couleur;
    afficherCarte(): string;
    getStrength(): number;
}
