class TitleBounce extends Kiln.Entity {
    constructor(x,y) {
        super(x,y);
        this.xvel = 8;
        this.yvel = 8;
    }
    onRender = () => {
        let brush = new Kiln.Draw('game');
        brush.text('Ok, the boilerplate is here, lets do it', this.x, this.y);
    };
    onTick = (dt) => {
        this.x += (dt / this.xvel);
        this.y += (dt / this.yvel);
    };
}

class TitleScreen extends Kiln.Screen {
    constructor() {super()}
    onCreate() {this.add(new TitleBounce(1000, 500));}
}

window.onload =  () => Kiln.Game('game', document.getElementById('game'), new TitleScreen());

