import React, { useState } from 'react';
import './App.css';
import Bee from './database/bee.model';
import BeeList from './component/BeeList';
import { attack, initDb, reLife } from './services/services';

let initList: Bee[] = initDb(10);
function App() {
  const [beeList, setBeeList] = useState(initList);
  return (
    <div>
      <div className="app">
        <header className="header">
          <BeeList list={beeList} />
        </header>
        <div className="bottom">
        <div className='btn'>
          <button className='btn__action' onClick={() => {
            console.log(beeList)
            let list = attack(beeList);
            setBeeList([...list])
          }}>Attack </button>
        
        </div>
        <div className='btn'>
          <button className='btn__action' onClick={() => {
            console.log(beeList)
            let list = reLife(beeList);
            setBeeList([...list])
          }}>Relife</button>
        </div>
      </div>
      </div>

    </div>

  );
}

export default App;
