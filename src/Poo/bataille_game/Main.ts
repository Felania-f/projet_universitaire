// import { Couleur } from './couleur';
import { Game } from './Game';
// import { Deck } from './deck';

function main() {
  // const deck = new Deck();
  // console.log("avant le mélange :");
  // deck.display();

  // deck.melanger();   
  // console.log("\naprès le mélange :");
  // deck.display();

  // // Tirer une carte du dessus du deck
  // const carteTiree = deck.carteTirage();
  // if (carteTiree) {
  //   console.log(`\nCarte tirée : ${carteTiree.afficherCarte()}`);
  // console.log(Object.keys(Couleur));
  (function main() {
    const players = ['Joueur 1', 'Joueur 2'];
    const game = new Game(players);
    game.start();
  })();
}
main();