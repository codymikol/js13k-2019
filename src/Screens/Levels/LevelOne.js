import {KScreen} from "game-kiln";
import Character from "../../Entities/Character/Character";

export default class LevelOne extends KScreen {

    constructor() {
        super();
    }

    onCreate() {
        this.add(new Character());
    }

}