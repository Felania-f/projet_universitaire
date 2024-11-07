import { Snake } from "./snake.js";
import { Apple } from "./apple.js";
export class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.snake = new Snake();
        this.apple = new Apple();
        this.score = 0;
        this.apple.applePosition(this.width, this.height);
        //initialiser les controles
        this.setupControls();
    }
    getScore() {
        return this.score;
    }
    play(display) {
        //récupérer la tete du serpent
        const head = this.snake.getBody()[0];
        //vérifier si le serpent mange la pomme
        if (head.x === this.apple.getPosition().x && head.y === this.apple.getPosition().y) {
            this.snake.eat();
            this.apple.applePosition(this.width, this.height);
            this.score++;
        }
        this.snake.move(this.width, this.height);
        //dessiner le serpent et la pomme
        this.snake.getBody().forEach(segment => {
            display.drawRectangle(segment.x, segment.y, "pink");
        });
        this.apple.draw(display);
        //vérifier si le serpent touche les bords
        // if (this.snake.checkCollision(this.width, this.height)) {
        //     return true;
        // }
        if (this.snake.checkSelfCollision()) {
            return true;
        }
        return false;
    }
    setupControls() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    this.snake.changeDirection({ x: 0, y: -1 });
                    this.snake.move(this.width, this.height);
                    break;
                case 'ArrowDown':
                    this.snake.changeDirection({ x: 0, y: 1 });
                    this.snake.move(this.width, this.height);
                    break;
                case 'ArrowLeft':
                    this.snake.changeDirection({ x: -1, y: 0 });
                    this.snake.move(this.width, this.height);
                    break;
                case 'ArrowRight':
                    this.snake.changeDirection({ x: 1, y: 0 });
                    this.snake.move(this.width, this.height);
                    break;
            }
        });
    }
    getSnake() {
        return this.snake;
    }
}
