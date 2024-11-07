import { Display } from "./Display.js";
import { Game } from "./Game.js";
const g = new Game(50, 50);
const d = new Display(50, 50, 10, 150);
d.play(g);
