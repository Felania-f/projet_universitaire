"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Game_js_1 = require("./Game.js");
const game = new Game_js_1.Game(20, 20, 20);
function gameLoop() {
    game.update();
    requestAnimationFrame(gameLoop);
}
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp")
        game.player.move(0, -1);
    if (event.key === "ArrowDown")
        game.player.move(0, 1);
    if (event.key === "ArrowLeft")
        game.player.move(-1, 0);
    if (event.key === "ArrowRight")
        game.player.move(1, 0);
});
gameLoop();
//# sourceMappingURL=Sokoban.js.map