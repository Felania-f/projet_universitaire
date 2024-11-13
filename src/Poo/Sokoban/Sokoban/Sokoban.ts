import { Game } from "./Game.js";

const game = new Game(20, 20, 20);

function gameLoop() {
  game.update();
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") game.movePlayer(0, -1);
  if (event.key === "ArrowDown") game.movePlayer(0, 1);
  if (event.key === "ArrowLeft") game.movePlayer(-1, 0);
  if (event.key === "ArrowRight") game.movePlayer(1, 0);
});

gameLoop();
