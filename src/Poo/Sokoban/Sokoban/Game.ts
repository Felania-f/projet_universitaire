import { Display } from "./Display.js";
import { Player } from "./Player.js";
import { Rock } from "./Rock.js";
import { Hole } from "./Hole.js";

interface MoveHistory {
    playerX: number;
    playerY: number;
    rocks: { x: number, y: number }[];
}

export class Game {
    private width: number;
    private height: number;
    private display: Display;
    private player: Player;
    private rocks: Rock[];
    private holes: Hole[];
    private level: number;
    private score: number;
    private moveHistory: MoveHistory[] = [];

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

    private saveMoveState() {
        const rocksState = this.rocks.map(rock => ({ x: rock.x, y: rock.y }));
        this.moveHistory.push({
            playerX: this.player.x,
            playerY: this.player.y,
            rocks: rocksState
        });
    }

    private isOccupied(x: number, y: number): boolean {
        return this.rocks.some(rock => rock.x === x && rock.y === y) ||
            this.holes.some(hole => hole.x === x && hole.y === y && !this.getRockAt(x, y) && !hole.isFilled);
    }



    private getRockAt(x: number, y: number): Rock | null {
        return this.rocks.find(rock => rock.x === x && rock.y === y) || null;
    }

    public undo(): void {
        if (this.moveHistory.length === 0) return;

        //remet le joueur à l'état précédent
        const lastMove = this.moveHistory.pop()!;
        this.player.x = lastMove.playerX;
        this.player.y = lastMove.playerY;

        //remet le rocher à l'état précédent
        this.rocks.forEach((rock, index) => {
            rock.x = lastMove.rocks[index].x;
            rock.y = lastMove.rocks[index].y;
        });

        this.update();
        // this.displayMoveHistory();
    }

    public pullRockWithPlayer(dx: number, dy: number): void {
        this.saveMoveState();

        //rocher derrière le joueur
        const rockX = this.player.x - dx;
        const rockY = this.player.y - dy;

        //trouver le rocher à tirer
        const rockToPull = this.getRockAt(rockX, rockY);

        //faire bouger le joueur et le rocher ensemble
        if (rockToPull && !rockToPull.isStuck) {
            //vérification de la nouvelle position si valide
            const newPlayerX = this.player.x + dx;
            const newPlayerY = this.player.y + dy;
            const newRockX = rockX + dx;
            const newRockY = rockY + dy;

            //vérification des limites et collisions
            if (
                newPlayerX >= 0 && newPlayerX < this.width &&
                newPlayerY >= 0 && newPlayerY < this.height &&
                newRockX >= 0 && newRockX < this.width &&
                newRockY >= 0 && newRockY < this.height &&
                !this.isOccupied(newPlayerX, newPlayerY) &&
                !this.isOccupied(newRockX, newRockY)
            ) {

                this.player.x = newPlayerX;
                this.player.y = newPlayerY;

                rockToPull.x = newRockX;
                rockToPull.y = newRockY;

                this.checkWinCondition();
            }
        } else {
            this.movePlayer(dx, dy);
        }
    }

    public movePlayer(dx: number, dy: number): void {
        this.saveMoveState();
        const newX = this.player.x + dx;
        const newY = this.player.y + dy;

        //limites de la grille
        if (!this.player.canMove(dx, dy, this.width, this.height)) return;

        //Empèche le joueur de tomber dans un trou non bouché
        const targetHole = this.holes.find(hole => hole.x === newX && hole.y === newY);
        if (targetHole && !targetHole.isFilled) return;

        //vérifie s'y a un rocher
        const targetRock = this.getRockAt(newX, newY);
        if (targetRock && !targetRock.isStuck) {
            this.pushRock(targetRock, dx, dy);
        } else {
            //déplace le joueur si y a pas rocher
            this.player.move(dx, dy);
        }

        this.checkWinCondition();
        // this.displayMoveHistory();
    }

    //déplacer rocher et gère les interactions avec les trous
    private pushRock(rock: Rock, dx: number, dy: number): void {
        const rocksToMove: Rock[] = [];
        let currentX = rock.x;
        let currentY = rock.y;

        //identifie tous les rochers dans la cascade
        while (true) {
            const nextRock = this.getRockAt(currentX + dx, currentY + dy);
            if (nextRock) {
                rocksToMove.push(nextRock);
                currentX += dx;
                currentY += dy;
            } else {
                break;
            }
        }

        const finalX = currentX + dx;
        const finalY = currentY + dy;

        //limite du déplacements du rocher, voir si la position finale est libre ou contient un trou
        const holeForLastRock = this.holes.find(hole => hole.x === finalX && hole.y === finalY);
        if (
            finalX < 0 || finalX >= this.width || finalY < 0 || finalY >= this.height ||
            (this.isOccupied(finalX, finalY) && !holeForLastRock)
        ) {
            return;
        }

        //Déplacé tous les roches dans l'ordre inverse
        for (let i = rocksToMove.length - 1; i >= 0; i--) {
            rocksToMove[i].move(dx, dy);
        }
        rock.move(dx, dy);

        // Gère le trou si le dernier rocher tombe dedans
        if (holeForLastRock && !holeForLastRock.isFilled) {
            holeForLastRock.fill();
            //supprime le rocher tombé dans le trou
            this.rocks = this.rocks.filter(r => r !== rock);
            this.score++;
            this.display.refreshScore(this.score);
        }

        // Déplace le joueur après avoir poussé les rochers
        this.player.move(dx, dy);
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

    // public displayMoveHistory(): void {
    //     console.log("Historique des mouvements :");
    //     this.moveHistory.forEach((move, index) => {
    //         console.log(`Mouvement ${index + 1}:`);
    //         console.log(`  Position du joueur: (${move.playerX}, ${move.playerY})`);
    //         move.rocks.forEach((rock, i) => {
    //             console.log(`  Rocher ${i + 1}: (${rock.x}, ${rock.y})`);
    //         });
    //     });
    //     const historyElement = document.getElementById('moveHistory');
    //     if (historyElement) {
    //         historyElement.innerHTML = "<h3>Historique des mouvements :</h3>";
    //         this.moveHistory.forEach((move, index) => {
    //             historyElement.innerHTML += `<p><strong>Mouvement ${index + 1}:</strong><br> 
    //                Position du joueur: (${move.playerX}, ${move.playerY})<br>`;
    //             move.rocks.forEach((rock, i) => {
    //                 historyElement.innerHTML += `Rocher ${i + 1}: (${rock.x}, ${rock.y})<br>`;
    //             });
    //             historyElement.innerHTML += "<br>";
    //         });
    //     }
    // }

    getPlayer(): Player {
        return this.player;
    }
}