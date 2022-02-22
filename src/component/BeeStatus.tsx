import React, { useState } from 'react'

function BeeStatus(prop: { hp: number }) {
   
    // const [beeStatus,setBeeStatus] = useState("Queen");
    if(prop.hp >=70) {
        return <div className='bee-strong-status'></div>

    }else if(prop.hp<70 && prop.hp >=40){
        return <div className='bee-mid-status'></div>
    }else if(prop.hp<40 && prop.hp >=5 ){
        return <div className='bee-weak-status'></div>
    } else {
   
        return <div className='bee-die-status'></div>
    }   
    
}

export default BeeStatus;


