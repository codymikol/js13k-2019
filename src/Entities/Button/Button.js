import {KDraw, KEntity, KInput} from "game-kiln";

export default class Button extends KEntity {

    constructor(x, y, height, width, action, text) {

        super(x, y, height, width);

        this.brush = new KDraw('game');
        this.keys = new KInput.Mouse();
        this.keys.onUp(this, action);
        this.text = text;

        this.onRender = function () {
            this.brush.square(this.x, this.y, this.width, this.height, 'red');
            this.brush.text(this.text, this.x + 5, this.y + 28)
        };

    }

}