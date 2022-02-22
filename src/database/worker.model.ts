import Bee from "./bee.model";

export default class Worker extends Bee {
    attack(): void {
            this.hp = 0.7*this.hp;
        }
        do(): void {
            console.log("");
        }

}
