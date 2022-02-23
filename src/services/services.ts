import Bee from "../database/bee.model";
import Queen from "../database/queen.model";
import Drone from '../database/drone.model';
import Worker from '../database/worker.model';
import { getType } from "../component/Bee";


export function initDb(len: number) {
    let initList: Bee[] = [];
    let bee: Bee;
    for (let i = 0; i < len; i++) {
        let random = Math.floor(Math.random() * 10);
        if (random % 3 === 0) {
            console.log("queen")
            bee = new Queen(i, 100);
            initList.push(bee);
        } else if (random % 3 === 1) {
            console.log("worker")
            bee = new Drone(i, 100);
            initList.push(bee);
        } else {
            console.log("drone")
            bee = new Worker(i, 100);
            initList.push(bee);
        }
    }
    return mySort(initList);
}

export function reLife(beeList: Bee[]) {
    for (let i = 0; i < beeList.length; i++) {
        beeList[i].hp = 100;
    }
    return beeList;
}
export function attack(beeList: Bee[]) {
    
    for (let i = 0; i < beeList.length; i++) {
        console.log(typeof beeList[i]);
        if (beeList[i] instanceof Drone) {
            beeList[i].hp = Math.round(beeList[i].hp * 0.8);
        } else if (beeList[i] instanceof Worker) {
            beeList[i].hp = Math.round(beeList[i].hp * 0.7);

        } else {
            beeList[i].hp = Math.round(beeList[i].hp * 0.9);
        }
        if (beeList[i].hp <= 7) {
            beeList[i].hp = 0;
        }
    }
    return mySort(beeList);
}
export function mySort(beeList: Bee[])  {
    let newBeeList :Bee[] =[];
    beeList.sort((a, b) => {
        if (a.hp < b.hp) return 1;
        else if (a.hp > b.hp) return -1;
        else {
            return (a.id > b.id) ? 1 : -1;
        }
    });
    
    for(let i = 0; i<beeList.length;i++) {
        if(getType(beeList[i])== "Queen") {
            newBeeList.push(beeList[i])
        }
    }
    for(let i = 0; i<beeList.length;i++) {
        if(getType(beeList[i])== "Drone") {
            newBeeList.push(beeList[i])
        }
    }
    for(let i = 0; i<beeList.length;i++) {
        if(getType(beeList[i])== "Worker") {
            newBeeList.push(beeList[i])
        }
    }
    return newBeeList;
}