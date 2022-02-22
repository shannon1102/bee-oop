import React, { useState } from 'react';
import './App.css';
import Bee from './database/bee.model';
import BeeList from './component/BeeList';
import { attack, initDb, reLife } from './services/services';
import ActionButton from './component/ActionButton';

let initList: Bee[] = initDb(10);
function App() {
  const [beeList, setBeeList] = useState(initList);
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <BeeList list={beeList} />
        </header>
      </div>
      <div className="bottom">
        <div className='action-btn'>
          <button className='btn' onClick={() => {
            console.log(beeList)
            let list = attack(beeList);
            setBeeList([...list])
          }}>Attack </button>
          {/* <img src={process.env.PUBLIC_URL + '/restore.png'}></img> */}
        </div>
        <div className='action-btn'>
          {/* <ActionButton name={'Restore'} path={process.env.PUBLIC_URL + '/restore.png'}/> */}
          <button className='btn' onClick={() => {
            console.log(beeList)
            let list = reLife(beeList);
            setBeeList([...list])
          }}>Relife</button>
        </div>

      </div>

    </div>

  );
}

export default App;
