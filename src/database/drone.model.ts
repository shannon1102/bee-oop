import Bee from "./bee.model";

export default class Drone extends Bee {
    attack(): void {
       this.hp = 0.8*this.hp;
    }
    do(): void {
        console.log("")
    }

}