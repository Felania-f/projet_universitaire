import { Display } from "./Display.js";
import { Player } from "./Player.js";
import { Rock } from "./Rock.js";
import { Hole } from "./Hole.js";
export class Game {
    constructor(width, height, scale) {
        this.width = width;
        this.height = height;
        this.display = new Display(width, height, scale);
        this.player = new Player(5, 5);
        this.level = 1; // Niveau de départ
        this.rocks = [new Rock(8, 8)];
        this.holes = [new Hole(10, 10)];
    }
    getEntities() {
        return [this.player, ...this.rocks, ...this.holes];
    }
    isOccupied(x, y) {
        return this.rocks.some(rock => rock.x === x && rock.y === y) ||
            this.holes.some(hole => hole.x === x && hole.y === y && !this.getRockAt(x, y));
    }
    getRockAt(x, y) {
        return this.rocks.find(rock => rock.x === x && rock.y === y) || null;
    }
    movePlayer(dx, dy) {
        const newX = this.player.x + dx;
        const newY = this.player.y + dy;
        // Vérifier si le joueur peut se déplacer dans cette direction
        if (!this.player.canMove(dx, dy, this.width, this.height))
            return;
        // Vérifier si la case suivante contient un rocher
        const rock = this.getRockAt(newX, newY);
        if (rock && !rock.isStuck) {
            // Si la case suivante du rocher est libre ou contient un trou, pousser le rocher
            const rockNewX = rock.x + dx;
            const rockNewY = rock.y + dy;
            const holeAtNewPosition = this.holes.some(hole => hole.x === rockNewX && hole.y === rockNewY);
            // Si la case suivante est libre ou si c'est un trou, déplacer le rocher
            if (!this.isOccupied(rockNewX, rockNewY) || holeAtNewPosition) {
                // Déplacer le rocher
                rock.move(dx, dy);
                // Déplacer le joueur
                this.player.move(dx, dy);
            }
        }
        else {
            // Si il n'y a pas de rocher, déplacer simplement le joueur
            this.player.move(dx, dy);
        }
        this.checkWinCondition();
    }
    checkWinCondition() {
        let allHolesFilled = true;
        this.holes.forEach(hole => {
            const rockInHole = this.rocks.find(rock => rock.x === hole.x && rock.y === hole.y);
            if (rockInHole) {
                // Change la couleur du rocher et du trou lorsqu'ils sont sur la même position
                rockInHole.color = "red";
                hole.setColor("red");
                rockInHole.isStuck = true; // Marque le rocher comme bloqué
            }
            else {
                allHolesFilled = false; // Si un trou n'est pas rempli, la condition n'est pas encore satisfaite
            }
        });
        if (allHolesFilled) {
            this.levelUp(); // Si tous les trous sont remplis, on passe au niveau suivant
        }
    }
    levelUp() {
        // Augmente le niveau
        this.level++;
        // console.log(Niveau ${ this.level } atteint!);
        // Réinitialiser les positions des roches et des trous
        this.rocks = [];
        this.holes = [];
        // Augmenter le nombre de trous et de roches
        for (let i = 0; i < this.level + 1; i++) {
            this.holes.push(new Hole(Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height)));
            this.rocks.push(new Rock(Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height)));
        }
        // Réinitialise la position du joueur
        this.player = new Player(5, 5);
        // Met à jour l'affichage du niveau
        this.display.refreshLevel(this.level);
    }
    update() {
        this.display.draw(this);
    }
    getPlayer() {
        return this.player;
    }
}
