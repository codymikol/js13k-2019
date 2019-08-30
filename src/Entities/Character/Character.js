import {KEntity} from "game-kiln";

export default class Character extends KEntity {
    constructor() {
        super(50, 50);
        this.name = 'Test Human'
    }
}