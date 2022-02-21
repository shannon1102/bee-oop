export default abstract class Bee {
    id: number;
    hp: number;
    constructor(id: number,hp: number = 100) {
        this.id= id;
        this.hp = hp;
    }
    abstract attack(): void;
    protected reLife(): void {
        this.hp = 100;
    };
    protected checkStatus(): number {
        switch(this.hp) {
            case 1: 
        }
      if(this.hp > 70) return 1;
      return 1
    };
    
}
