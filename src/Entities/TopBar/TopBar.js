import {KDraw, KEntity, KInput} from "game-kiln";

export default class TopBar extends KEntity {

    constructor() {

        super(0, 0, 150, 1125);

        this.brush = new KDraw('game');
        this.keys = new KInput.Keyboard();

        this.location = 'THE DEFAULT LOCATION';

        this.dialogText = null;
        this.dialogColor = 'red';
        this.dialogTimer = 0;

        this.onRender = () => {

            this.brush.square(this.x, this.y, this.width, this.height, 'black', 1);

            if (this.dialogText) {
                this.brush.text(TopBar.getSlicedText(this.dialogTimer, this.dialogText), this.x + 50, this.height / 2, this.dialogColor, 30, 1);
            } else {
                this.brush.text(this.location, this.x + this.width / 2, this.height / 2, 'white', 30, 1, 'center');
            }

        };

        this.onTick = function (dt) {
            this.dialogTimer += dt;
        };



       this.keys.onUp('a',  () => this.printDialog('Hello John, This is an example of dialog text'));

        this.keys.onUp('s', () => this.clearDialog());

    }

    static getSlicedText(timer, text) {
        return text.substring(0, timer / 30)
    }

    printDialog(text) {
        this.dialogText= text;
        this.dialogTimer = 0;
    }

    clearDialog() {
        this.dialogText = null;
    }

}