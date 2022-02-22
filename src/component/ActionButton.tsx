

export default  function ActionButton(prop: { name: string,path: string}) {

        return (
            <button className="image-btn">
                 {prop.name}
                <img className="image-btn image" src={prop.path} alt="action mage"></img>
                {prop.name}
            </button>
        )
    
}

function handleClick() {
    console.log('The link was clicked.');
   
  }