import { KEntity, KDraw, KGame, KScreen } from "../node_modules/game-kiln/dist/Kiln.bundle.js";

class TitleBounce extends KEntity {
    constructor(x,y) {
        super(x,y);
        this.xvel = 8;
        this.yvel = 8;
    }
    onRender = () => {
        let brush = new KDraw('game');
        brush.text('Ok, the boilerplate is here, lets do it', this.x, this.y);
    };
    onTick = (dt) => {

        this.x += (dt / this.xvel);
        this.y += (dt / this.yvel);

        if(this.x > 300 || this.x < 50) {
            this.xvel *= -1;
        }

        if(this.y > 300 || this.y < 50) {
            this.yvel *= -1;
        }

    };
}

class TitleScreen extends KScreen {
    constructor() {super()}
    onCreate() {this.add(new TitleBounce(100, 100));}
}

window.onload =  () => KGame('game', document.getElementById('game'), new TitleScreen());

