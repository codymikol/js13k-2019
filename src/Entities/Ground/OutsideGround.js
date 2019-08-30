import {KDraw, KEntity} from "game-kiln";

export default class OutsideGround extends KEntity {
    constructor() {
        super(0, 0, 0, 0)
        this.brush = new KDraw('game')
        this.height = (this.brush.ctx.canvas.height * 0.25);
        this.width = (this.brush.ctx.canvas.width);
        this.y = (this.brush.ctx.canvas.height - this.height);
        this.onRender = () => {
            this.brush.square(this.x, this.y, this.width, this.height, 'brown')
        }
    }
}