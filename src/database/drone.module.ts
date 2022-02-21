import Bee from "./bee.module";

export class Drone extends Bee {
    constructor(id: number, hp: number) { 
        super(id,hp);
    }

    attack(): void {
       this.hp = 0.8*this.hp;
    }
    do(): void {
        console.log("")
    }

}