export class Snake {
  private body: Array<{ x: number, y: number }>;
  private direction: { x: number, y: number };
  private grow: boolean;

  constructor() {
    this.body = [{ x: 5, y: 5 }];
    this.direction = { x: 0, y: 0 };
    this.grow = false;
  }

  move(width: number, height: number) {
    if (this.direction.x === 0 && this.direction.y === 0) return;

    //calcul la nouvelle position de la tete
    const head = {
      x: (this.body[0].x + this.direction.x + width) % width,
      y: (this.body[0].y + this.direction.y + height) % height
    };
    // if (head.x < 0) {
    //   head.x = width - 1;
    // } else if (head.x >= width) {
    //   head.x = 0;
    // }

    // if (head.y < 0) {
    //   head.y = height - 1;
    // } else if (head.y >= height) {
    //   head.y = 0;
    // }

    //mise a jour la position du serpent
    this.body.unshift(head);
    if (!this.grow) {
      this.body.pop();
    } else {
      this.grow = false;
    }
  }

  changeDirection(newDirection: { x: number, y: number }) {
    //permet au serpent de ne pas revenir sur lui-meme
    if (this.direction.x === 0 && newDirection.x !== 0) {
      //horizontalement
      this.direction = newDirection;
    } else if (this.direction.y === 0 && newDirection.y !== 0) {
      //verticalement
      this.direction = newDirection;
    }
  }

  // checkCollision(width: number, height: number): boolean {
  //   const head = this.body[0];

  //   //vérifier la collision avec les bords
  //   if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
  //     return true;
  //   }
  //   return false;
  // }

  checkSelfCollision(): boolean {
    const head = this.body[0];

    //vérifier collision avec le corps
    for (let i = 1; i < this.body.length; i++) {
      if (head.x === this.body[i].x && head.y === this.body[i].y) {
        return true;
      }
    }
    return false;
  }

  eat() {
    this.grow = true;
  }

  getBody() {
    return this.body;
  }
}

