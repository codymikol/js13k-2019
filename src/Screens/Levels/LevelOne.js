import {KScreen} from "game-kiln";
import Character from "../../Entities/Character/Character";
import TopBar from "../../Entities/TopBar/TopBar";

export default class LevelOne extends KScreen {

    constructor() {
        super();
    }

    onCreate() {
        this.add(new TopBar());
    }

}