import {KDraw, KEntity} from "game-kiln";

export default class Castle extends KEntity {

    constructor() {
        super(0, 0, 0, 0);
        this.brush = new KDraw('game');
        // this.height = (this.brush.ctx.canvas.height);
        // this.width = (this.brush.ctx.canvas.width * 0.25);
        // this.x = (this.brush.ctx.canvas.width + this.width);

        this.onRender = () => {
            this.width = 200;
            this.height = (this.brush.ctx.canvas.height * 0.75);
            this.x = (this.brush.ctx.canvas.width - this.width);
            this.brush.square(this.x, this.y, this.width, this.height, '#2F343F');
            // Maybe make this an image? It doesn't look like a door at all...
            this.brush.square(this.x + (this.width / 2.5), (this.brush.ctx.canvas.height * 0.50), this.width, (this.height / 3), '#CA6610');
        }
    }
}