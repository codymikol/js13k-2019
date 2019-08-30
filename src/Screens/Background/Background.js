import {KDraw, KEntity} from "game-kiln";

export default class Background extends KEntity {

    constructor() {
        super(0, 0, window.innerHeight, window.innerWidth)
        this.brush = new KDraw('game')
        this.onRender = () => {
            this.brush.square(0, 0, window.innerWidth, window.innerHeight, 'black')
        };
    }
}