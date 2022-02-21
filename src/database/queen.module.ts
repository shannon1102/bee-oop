import Bee from "./bee.module";

export default class Worker extends Bee {
    constructor(id: number, hp: number) { 
        super(id,hp)
    }
        
    attack(): void {
            this.hp = 0.7*this.hp;
        }
        do(): void {
            console.log("");
        }

}
