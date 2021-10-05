import React from 'react'
import ItemCount from '../ItemCount/ItemCount'




const ItemListContainer = () =>{

  const onAdd = (contador) => {
    alert(`Has agregado ${contador} prendas`);
  }
    return (
      <div className='container p-3'>
      
          <ItemCount stock={5} onAdd={onAdd}/>
          
      </div>


        
    )
}

export default ItemListContainer 

//Botón del carrito

