import React from "react";

import { BeeProps, DroneProps, QueenProps, WorkerProps } from "../interface/interface";
export abstract class BeeUI extends React.Component<BeeProps> {
  constructor(props: BeeProps | Readonly<BeeProps>) {
    super(props);
  }
  mainBeeRender = () => {
    return (<img className='bee-ui bee-ui__bee-img' src={process.env.PUBLIC_URL + '/bee.png'} alt="Bee Image"></img>)
  }
  abstract itemsRender(): void;
  render() {
    return <div>Bee UI</div>
  }
}
export class DroneUI extends BeeUI {
  itemsRender(): void {
    this.render();
  }
  constructor(props: DroneProps | Readonly<DroneProps>) {
    super(props);
  }
  render() {
    return (
      <div className='bee-ui'>
        {this.mainBeeRender()}
        <img className='bee-ui bee-ui__bee-item-img' src={process.env.PUBLIC_URL + '/sword.png'} alt="Bee Image"></img>
      </div>
    );
  }
}

export class WorkerUI extends BeeUI {
  itemsRender(): void {
    this.render()
  }
  constructor(props: WorkerProps | Readonly<WorkerProps>) {
    super(props);
  }
  render() {
    return (
      <div className='bee-ui'>
        {this.mainBeeRender()}
        <img className='bee-ui bee-ui__bee-item-img' src={process.env.PUBLIC_URL + '/bucket.png'} alt="Bee Image"></img>
      </div>
    );
  }
}
export class QueenUI extends BeeUI {
  itemsRender(): void {
    this.render()
  }
  constructor(props: QueenProps | Readonly<QueenProps>) {
    super(props);
  }
  render() {
    return (
      <div className='bee-ui'>
        {this.mainBeeRender()}
        <img className='bee-ui bee-ui__bee-item-img' src={process.env.PUBLIC_URL + '/crown.png'} alt="Bee Image"></img>
      </div>

    );
  }
}