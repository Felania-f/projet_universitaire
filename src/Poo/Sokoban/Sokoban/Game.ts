import { Display } from "./Display.js";
import { Player } from "./Player.js";
import { Rock } from "./Rock.js";
import { Hole } from "./Hole.js";

export class Game {
    private width: number;
    private height: number;
    private display: Display;
    private player: Player;
    private rocks: Rock[];
    private holes: Hole[];
    private level: number;

    constructor(width: number, height: number, scale: number) {
        this.width = width;
        this.height = height;
        this.display = new Display(width, height, scale);
        this.player = new Player(5, 5);
        this.level = 1;
        this.rocks = [new Rock(8, 8)];
        this.holes = [new Hole(10, 10)];
    }

    public getEntities() {
        return [this.player, ...this.rocks, ...this.holes];
    }

    private isOccupied(x: number, y: number): boolean {
        return this.rocks.some(rock => rock.x === x && rock.y === y) ||
            this.holes.some(hole => hole.x === x && hole.y === y && !this.getRockAt(x, y));
    }


    private getRockAt(x: number, y: number): Rock | null {
        return this.rocks.find(rock => rock.x === x && rock.y === y) || null;
    }

    public movePlayer(dx: number, dy: number): void {
        const newX = this.player.x + dx;
        const newY = this.player.y + dy;

        //Limite du déplacement du joueur
        if (!this.player.canMove(dx, dy, this.width, this.height)) return;

        //Vérifier si la case suivante contient un rocher
        const rock = this.getRockAt(newX, newY);
        if (rock && !rock.isStuck) {

            //Si la case suivante du rocher est libre ou contient un trou, pousser le rocher
            const rockNewX = rock.x + dx;
            const rockNewY = rock.y + dy;

            const holeAtNewPosition = this.holes.some(hole => hole.x === rockNewX && hole.y === rockNewY);

            //déplacer le rocher si la case suivante est libre ou si c'est un trou 
            if (!this.isOccupied(rockNewX, rockNewY) || holeAtNewPosition) {
                //Déplacer le rocher
                rock.move(dx, dy);

                //Déplacer le joueur
                this.player.move(dx, dy);
            }
        } else {
            //S'il n'y a pas de rocher, avancer seulement le joueur
            this.player.move(dx, dy);
        }

        this.checkWinCondition();
    }


    private checkWinCondition(): void {
        let allHolesFilled = true;

        this.holes.forEach(hole => {
            const rockInHole = this.rocks.find(rock => rock.x === hole.x && rock.y === hole.y);

            if (rockInHole) {
                rockInHole.color = "red";
                hole.setColor("red");
                //Bloquer le rocher
                rockInHole.isStuck = true;
            } else {
                allHolesFilled = false;
            }
        });

        if (allHolesFilled) {
            this.levelUp(); // Si tous les trous sont remplis, on passe au niveau suivant
        }
    }


    private levelUp(): void {
        //Augmente le niveau
        this.level++;

        //Réinitialiser les positions des roches et des trous
        this.rocks = [];
        this.holes = [];

        //Augmenter le nombre de trous et de roches
        for (let i = 0; i < this.level + 1; i++) {
            this.holes.push(new Hole(Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height)));
            this.rocks.push(new Rock(Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height)));
        }

        //Rnitialiser la position du joueur
        this.player = new Player(5, 5);

        //Réaffichage
        this.display.refreshLevel(this.level);
    }


    public update(): void {
        this.display.draw(this);
    }

    getPlayer(): Player {
        return this.player;
    }
}