import { useState } from "react"
import '../styles/ItemCounts.css'

export default function Contador ({stock, onAdd}) {
    const [contador, setContador] = useState(0)

    const sumar = () => { 
        if(contador < stock)
        setContador(contador +1);
        
    }
    const restar = () => {
        if (contador > 0){
            setContador (contador -1)
        }
       
    }
    return(
        <div>
            <div className="container">
                <div className="contador_container">
               
              <button
               className="contador_container_boton"
               onClick ={sumar}>
               Sumar 
              </button>
              <span className="count-container__qty">{contador}</span>
              <button 
              className="contador_container_boton"
              onClick = {restar}> 
              Restar 
              </button>
              </div>
         
             </div>

             <div className="boton_cart">
             <button 
             onClick ={() => onAdd (contador) }
             disabled={stock === 0 ? true : null}
              > 
             Agregar al carrito
             </button>
             </div>
             
        </div>

        
    )
}


