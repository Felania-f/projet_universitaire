import { Game } from "./Game.js";

const game = new Game(20, 20, 20);

function gameLoop() {
  game.update();
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (event) => {
  if (event.shiftKey) {
    if (event.key === "ArrowUp") game.pullRockWithPlayer(0, -1);
    if (event.key === "ArrowDown") game.pullRockWithPlayer(0, 1);
    if (event.key === "ArrowLeft") game.pullRockWithPlayer(-1, 0);
    if (event.key === "ArrowRight") game.pullRockWithPlayer(1, 0);
  } else {
    if (event.key === "ArrowUp") game.movePlayer(0, -1);
    if (event.key === "ArrowDown") game.movePlayer(0, 1);
    if (event.key === "ArrowLeft") game.movePlayer(-1, 0);
    if (event.key === "ArrowRight") game.movePlayer(1, 0);
  }
  if (event.key === "z") game.undo();
});

gameLoop();
