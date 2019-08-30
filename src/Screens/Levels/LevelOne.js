import {KScreen} from "game-kiln";
import TopBar from "../../Entities/TopBar/TopBar";
import Menu from "../../Entities/Menu/Menu";

export default class LevelOne extends KScreen {

    constructor() {
        super();
    }

    onCreate() {
        this.add(new TopBar());
        this.add(new Menu())
    }

}