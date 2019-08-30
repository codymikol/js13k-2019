import {KDraw, KEntity} from "game-kiln";

export default class Menu extends KEntity {

    constructor() {

        super(0,0,200,0);
        this.brush = new KDraw('game');
        this.width = this.brush.getCtx().canvas.width;
        this.y = this.brush.getCtx().canvas.height - this.height;

        this.onRender = () => {
            this.brush.square(this.x, this.y, this.width, this.height, 'black', 1);
        }

    }


}