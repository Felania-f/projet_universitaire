import { Home } from './Home';
import { LivingRoom } from './LivingRoom';
import { bedroom } from './Bedroom';
import { kitchen } from './Kitchen';
import { Bathroom } from './Bathroom';
import { wc } from './Wc';


function main() {
  console.log("Créer une nouvelle maison");
  const maMaison = new Home();

  //-----------------------------------------------------------------------------
  console.log("Ajout des pièces");
  //RDC(étage 0)
  console.log("RDC:");
  // étage 0, 30m², 2 TVs
  const salon = new LivingRoom(0, 30, 2);
  maMaison.addRoom(salon);
  console.log("Salon ajouté: 30m², 2TV");

  // étage 0, 15m²
  const cuisine = new kitchen(0, 15);
  maMaison.addRoom(cuisine);
  console.log("Cuisine ajoutée: 15m2");

  // étage 0, 3m²
  const wc1 = new wc(0, 3);
  maMaison.addRoom(wc1);
  console.log("WC 1 ajouté: 3m2");

  //Premier étage(étage1)
  console.log("1ère étage:");
  //étage 1, 20m², 2 lits
  const chambre1 = new bedroom(1, 20, 2);
  maMaison.addRoom(chambre1);
  console.log("Chambre 1 ajoutée: 20m², 2 lits");

  //étage 1, 16m², 1 lit
  const chambre2 = new bedroom(1, 16, 1);
  maMaison.addRoom(chambre2);
  console.log("Chambre 2 ajoutée: 16m², 1 lit");

  //étage 1, 10m², avec douche
  const salleDeBain = new Bathroom(1, 10, true);
  maMaison.addRoom(salleDeBain);
  console.log("Salle de bain ajoutée: 10m²");

  //étage 1, 3m²
  const wc2 = new wc(1, 3);
  maMaison.addRoom(wc2);
  console.log("WC 2 ajouté: 3m²");

  console.log("\n\n\n\n");


  //-------------------------------------------------------------------------
  //Surface totale
  console.log("\Caractéristiques de la maisob:");
  console.log(`\nSurface totale de la maison: ${maMaison.getTotalArea()} m2`);

  //Surface par étage
  console.log("\nSurface par étage:");
  console.log(`RDC: ${maMaison.getFloorArea(0)} m2`);
  console.log(`Premier étage: ${maMaison.getFloorArea(1)} m2`);

  //Surface du salon
  console.log(`\nSurface totale des salons: ${maMaison.getLivingArea()} m2`);

  //Nombre de wc
  console.log(`\nNombre de WC dans la maison: ${maMaison.getNbWc()} WC"`);

  //Nombre de TV
  console.log(`\nNombre total de TV:${maMaison.getNbTv()} TV`);
  console.log();
}
main();