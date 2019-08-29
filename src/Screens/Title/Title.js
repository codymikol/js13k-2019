import { KScreen, KGame } from "game-kiln";
import Button from "../../Entities/Button/Button";
import LevelOne from "../Levels/LevelOne";
import Credits from "../Credits/Credits";

export default class Title extends KScreen {

    constructor() {
        super();
        this.test = 'wow';
    }

    onCreate() {
        this.add(new Button(10, 50, 40, 200, () => KGame('game').setScreen(new LevelOne()), 'Start'));
        this.add(new Button(10, 100, 40, 200, () => KGame('game').setScreen(new Credits()),  'Credits'));
    }

}