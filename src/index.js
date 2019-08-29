import { KGame } from "game-kiln";

import Title from "./Screens/Title/Title";

window.onload =  () => KGame('game', document.getElementById('game'), new Title());

