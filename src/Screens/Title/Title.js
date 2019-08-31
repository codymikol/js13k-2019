import {KScreen, KGame, KDraw} from "game-kiln";
import Button from "../../Entities/Button/Button";
import LevelOne from "../Levels/LevelOne";
import Credits from "../Credits/Credits";
import Background from "../Background/Background";
import OutsideGround from "../../Entities/Ground/OutsideGround";
import Castle from "../../Entities/Castle/Castle";

export default class Title extends KScreen {

    constructor() {
        super();
        this.test = 'wow';
    }

    onCreate() {
        this.background = new Background();
        this.add(this.background);
        this.add(new OutsideGround());
        this.add(new Castle());
        this.add(new Button(10, 50, 40, 200, () => KGame('game').setScreen(new LevelOne()), 'Start'));
        this.add(new Button(10, 100, 40, 200, () => KGame('game').setScreen(new Credits()),  'Credits'));
    }

}