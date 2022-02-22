import Bee from "./bee.model";

export default class Queen extends Bee {
    attack(): void {
            this.hp = 0.7*this.hp;
        }
        do(): void {
            console.log("");
        }

}
