import Bee from '../database/bee.model';
import Queen from '../database/queen.model';
import Worker from '../database/worker.model';
import BeeStatus from './BeeStatus';
import { DroneUI, QueenUI, WorkerUI } from './BeeUI';
export function OneBee(prop: { bee: Bee }) {
    console.log('alooooo' + getType(prop.bee));
    return (
        <tr>
            <td>{prop.bee.id}</td>
            <td>{prop.bee.hp}</td>
            <td>{getType(prop.bee)}</td>
            <td><BeeStatus hp={prop.bee.hp} /></td>
            <td>
                {
                    (getType(prop.bee) == "Queen") ? <QueenUI bee={prop.bee} /> :  ((getType(prop.bee) == "Worker") ? <WorkerUI bee={prop.bee} /> : <DroneUI bee={prop.bee} />)
                }
            </td>
        </tr>
    );

}

export const getType = (bee: Bee) => {
    console.log(bee, bee instanceof Worker)
    if (bee instanceof Queen) {
        return "Queen";
    } else if (bee instanceof Worker) {
        return "Worker";
    } else {
        return "Drone";
    }

}
