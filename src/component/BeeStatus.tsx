function BeeStatus(prop: { hp: number }) {
    if(prop.hp >=70) {
        return <div className='bee-status bee-status--strong'></div>
    }else if(prop.hp<70 && prop.hp >=40){
        return <div className='bee-status bee-status--mid'></div>
    }else if(prop.hp<40 && prop.hp >=5 ){
        return <div className='bee-status bee-status--weak'></div>
    } else {
        return <div className='bee-status bee-status--die'></div>
    }   
}
export default BeeStatus;


