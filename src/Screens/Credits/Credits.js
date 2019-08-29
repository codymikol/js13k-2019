import {KScreen} from "game-kiln";
import Button from "../../Entities/Button/Button";

export default class Credits extends KScreen {

    constructor() {
        super();
        this.add(new Button(100,100,100,100,() => {}, 'Back'))
    }

}