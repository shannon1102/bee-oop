import Bee from "../database/bee.model";
export interface BeeProps {
    bee: Bee;
  };
export interface QueenProps extends BeeProps {
    queenItem: string;
  };
  export interface DroneProps extends BeeProps {
    droneItem: string;
  };
  export interface WorkerProps extends BeeProps {
    workerItem: string;
  };
  