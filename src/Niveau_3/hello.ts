import * as readlineSync from 'readline-sync';

function hello(): void {
  let name: string = readlineSync.question('Entrez votre nom: ');
  console.log(`Bonjour, ${name}!`);
}
hello();
