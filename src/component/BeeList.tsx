import React from 'react'
import Bee from '../database/bee.model';
import OneBee from './Bee';
function BeeList(prop: { list: Bee[] }) {
  return (
    <div>
      <table className='styled-table'>
        <thead>
        <tr>
            <th>Id</th>
            <th>HP</th>
            <th>Type</th>
            <th>Status</th>
            <th>UI</th>
          </tr>
        </thead>
        <tbody>
         {
           prop.list.map(e=> <OneBee key={e.id} bee={e}/>)
         }
        </tbody>
      </table>

    </div>

  )
}
export default BeeList;