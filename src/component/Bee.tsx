import React, { useState } from 'react'
import Bee from '../database/bee.model';
import Queen from '../database/queen.model';
import BeeStatus from './BeeStatus';
import BeeUI from './BeeUI';
// import Bee from '../database/bee.model';
// import Queen from '../database/queen.model';
// import BeeStatus from './BeeStatus';
// import BeeUI from './BeeUI';

// function OneBee(prop: { bee: Bee }) {
   
//     const [beeStatus,setBeeStatus] = useState("Queen");
    
//     return (
//         <tr>
//             <td>{prop.bee.id}</td>
//             <td>{prop.bee.hp}</td>
//             <td>{getType(prop.bee)}</td>
//             <td><BeeStatus hp={prop.bee.hp}/></td>
//             <td><BeeUI bee={prop.bee}/></td>
//         </tr>
//     )
// }
// const getType=(bee: Bee) => {
//     if(bee instanceof Queen) {
//         return "Queen";
//     }else if(bee instanceof Worker) {
//         return "Worker";
//     }else {
//         return "Drone"
//     }

// }

// export default OneBee;

export interface BeeProps {
    bee: Bee;
  };

export class OneBee extends React.Component<BeeProps> {
    // state: MyState = {
    //   // optional second annotation for better type inference
    //   count: 0,
    // };
    render() {
      return (
        <tr>
                   <td>{this.props.bee.id}</td>
                   <td>{this.props.bee.hp}</td>
                   <td>{getType(this.props.bee)}</td>
                   <td><BeeStatus hp={this.props.bee.hp}/></td>
                   <td><BeeUI bee={this.props.bee}/></td>
               </tr>
      );
    }
  }

const getType=(bee: Bee) => {
    if(bee instanceof Queen) {
        return "Queen";
    }else if(bee instanceof Worker) {
        return "Worker";
    }else {
        return "Drone"
    }

}
