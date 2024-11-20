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
    private score: number;

    constructor(width: number, height: number, scale: number) {
        this.width = width;
        this.height = height;
        this.display = new Display(width, height, scale);
        this.player = new Player(5, 5);
        this.level = 1;
        this.score = 0;
        this.rocks = [new Rock(8, 8)];
        this.holes = [new Hole(10, 10)];
    }

    public getEntities() {
        return [...this.holes, ...this.rocks, this.player];
    }

    private isOccupied(x: number, y: number): boolean {
        return this.rocks.some(rock => rock.x === x && rock.y === y) ||
            this.holes.some(hole => hole.x === x && hole.y === y && !this.getRockAt(x, y) && !hole.isFilled);
    }



    private getRockAt(x: number, y: number): Rock | null {
        return this.rocks.find(rock => rock.x === x && rock.y === y) || null;
    }

    public movePlayer(dx: number, dy: number): void {
        const newX = this.player.x + dx;
        const newY = this.player.y + dy;

        //Vérifie si le joueur peut se déplacer dans les limites de la grille
        if (!this.player.canMove(dx, dy, this.width, this.height)) return;

        //Empèche le joueur de tomber dans un trou non bouché
        const targetHole = this.holes.find(hole => hole.x === newX && hole.y === newY);
        if (targetHole && !targetHole.isFilled) return;

        //vérifie s'y a un rocher à la position cible
        const targetRock = this.getRockAt(newX, newY);
        if (targetRock && !targetRock.isStuck) {
            this.pushRock(targetRock, dx, dy);
        } else {
            //déplace le joueur si y a pas rocher
            this.player.move(dx, dy);
        }

        this.checkWinCondition();
    }

    //déplacer rocher et gère les interactions avec les trous
    private pushRock(rock: Rock, dx: number, dy: number): void {
        const rockNewX = rock.x + dx;
        const rockNewY = rock.y + dy;

        //limite du déplacements du rocher
        if (rockNewX < 0 || rockNewX >= this.width || rockNewY < 0 || rockNewY >= this.height) {
            return;
        }

        const holeForRock = this.holes.find(hole => hole.x === rockNewX && hole.y === rockNewY);
        if (!this.player.canMove(dx, dy, this.width, this.height)) return;

        //pousse le rocher si la case suivante est libre ou contient un trou
        if (!this.isOccupied(rockNewX, rockNewY) || (holeForRock && !holeForRock.isFilled)) {
            rock.move(dx, dy);

            //boucher le trou s'il n'est pas boucher
            if (holeForRock && !holeForRock.isFilled) {
                //bloquer le roche
                // rock.isStuck = true;
                this.rocks = this.rocks.filter(r => r.id !== rock.id); // Utilise l'ID pour supprimer la roche
                //marque le trou comme bouché
                holeForRock.fill();
                this.score++;
                this.display.refreshScore(this.score);
            }

            //déplace le joueur après avoir poussé le rocher
            this.player.move(dx, dy);
        }
    }

    private checkWinCondition(): void {
        const allHolesFilled = this.holes.every(hole => hole.isFilled);

        if (allHolesFilled) {
            this.levelUp();
        }
    }

    private levelUp(): void {
        //Augmente le level
        this.level++;

        //Réinitialiser les positions des roches et des trous
        this.rocks = [];
        this.holes = [];

        //Augmenter le nombre de trous et de roches
        for (let i = 0; i < this.level; i++) {
            this.holes.push(new Hole(Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height)));
            //évite les roches à safficher sur 0 et this.width-1
            let rockX = Math.floor(Math.random() * (this.width - 2)) + 1;
            //évite les roches à safficher sur 0 et this.height-1
            let rockY = Math.floor(Math.random() * (this.height - 2)) + 1;
            this.rocks.push(new Rock(rockX, rockY));
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