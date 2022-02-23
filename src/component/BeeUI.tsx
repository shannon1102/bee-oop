import React from "react";
import { SuperProperty } from "typescript";
import Bee from "../database/bee.model";
import Queen from "../database/queen.model";
import Worker from "../database/worker.model";
import { BeeProps } from "./Bee";
// export default function BeeUI(prop: {
//   bee: Bee
// }) {
//   let src = '';
//   if (prop.bee instanceof Queen) {
//     src = process.env.PUBLIC_URL + '/crown.png';
//   } else if (prop.bee instanceof Worker) {
//     src = process.env.PUBLIC_URL + '/bucket.png';
//   } else {
//     src = process.env.PUBLIC_URL + '/sword.png';
//   }
//   return (


//     <div className='bee-ui'>
//       <img className='bee-img' src={process.env.PUBLIC_URL + '/bee.png'} alt="Bee Image"></img>
//       <img className='bee-item-img' src={src} alt="Bee Image"></img>
//     </div>
//   )
// }


interface QueenProps extends BeeProps {
  queenItem: string;
};
interface DroneProps extends BeeProps {
  droneItem: string;
};
interface WorkerProps extends BeeProps {
  workerItem: string;
};
export class DroneUI extends React.Component<DroneProps> {
  render() {
   
      return (
        <div className='bee-ui'>
          <img className='bee-img' src={process.env.PUBLIC_URL + '/bee.png'} alt="Bee Image"></img>
          <img className='bee-item-img' src={this.props.droneItem} alt="Bee Image"></img>
        </div>
      
    );
  }
}
export class WorkerUI extends React.Component<WorkerProps> {
  render() {
   
      return (
        <div className='bee-ui'>
          <img className='bee-img' src={process.env.PUBLIC_URL + '/bee.png'} alt="Bee Image"></img>
          <img className='bee-item-img' src={this.props.workerItem} alt="Bee Image"></img>
        </div>
      
    );
  }
}

export class QueenUI extends React.Component<QueenProps> {
  render() {
   
      return (
        <div className='bee-ui'>
          <img className='bee-img' src={process.env.PUBLIC_URL + '/bee.png'} alt="Bee Image"></img>
          <img className='bee-item-img' src={this.props.queenItem} alt="Bee Image"></img>
        </div>
      
    );
  }
}



export default function BeeUI(prop: {
  bee: Bee
}) {


  // return (


  //   <div className='bee-ui'>
  //     <img className='bee-img' src={process.env.PUBLIC_URL + '/bee.png'} alt="Bee Image"></img>
  //     <img className='bee-item-img' src={""} alt="Bee Image"></img>
  //   </div>
  // )

  // let src = '';
  if (prop.bee instanceof Queen) {
    return <QueenUI queenItem= {"process.env.PUBLIC_URL + '/crown.png"}/>;
  } else if (prop.bee instanceof Worker) {
    return WorkerUI;
  } else {
    return DroneUI;
    // src = process.env.PUBLIC_URL + '/sword.png';
  }

    
}

