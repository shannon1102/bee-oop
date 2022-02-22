import Bee from "../database/bee.model";
import Queen from "../database/queen.model";
import Worker from "../database/worker.model";
export default function BeeUI(prop: {
  bee: Bee
}) {
  let src = '';
  if (prop.bee instanceof Queen) {
    src = process.env.PUBLIC_URL + '/crown.png';
  } else if (prop.bee instanceof Worker) {
    src = process.env.PUBLIC_URL + '/bucket.png';
  } else {
    src = process.env.PUBLIC_URL + '/sword.png';
  }
  return (


    <div className='bee-ui'>
      <img className='bee-img' src={process.env.PUBLIC_URL + '/bee.png'} alt="Bee Image"></img>
      <img className='bee-item-img' src={src} alt="Bee Image"></img>
    </div>
  )
}
