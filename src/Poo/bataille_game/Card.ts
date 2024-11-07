import { Couleur } from "./couleur";
import { Valeur } from "./Valeur";

export class Card {
  private valeur: Valeur;
  private couleur: Couleur;

  constructor(valeur: Valeur, couleur: Couleur) {
    this.valeur = valeur;
    this.couleur = couleur;
  }

  public getValeur(): number {
    return this.valeur;
  }

  public getCouleur(): Couleur {
    return this.couleur;
  }

  public afficherCarte(): string {
    return this.getValeur() + ' de ' + this.getCouleur();
  }

  public getStrength(): number {
    return this.valeur;
  }
}