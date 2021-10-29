import '../styles/Cart.css';
import { useCartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Cart = () => {

    const {cartList, clear, clearItem} = useCartContext();
    //Variable para el mensaje condicional
    let cartMessage = true;
    if(cartList.length>0){
        cartMessage = false;
    }

    //Funciones para calcula totales de compra
    const pxq = (a,b) => {
        return a*b
      }
      let total = 0;
    
      const totalPxQ = (a, b) => {
        let sum = a*b;
        total = total + sum;
        return total
      }
      
      total = cartList.map((item=> (totalPxQ(item.cantidad,item.item.price))))

      //Mensaje de confirmacion de compra
    const finishBuy = () => {
        alert(`Gracias por comprar en Nova, en breve recibirás un email con el comprobante`);
    }

    return(
        <section className="cart cartSlide"> 
             <div className="hero-container">
                 <h1 className="title_text">Prendas adquiridas</h1>
                 {
                cartMessage ?
                <div className="message">
                    <h2>No agregaste ningun producto al carrito</h2>
                    <Button variant="dark" className="button"><Link to={"/productos"} className='link'><span>Buscar productos</span></Link></Button>
                </div>
                :
                <div className="cartContiner">
                    <ul>
                        {cartList.map(item =>
                        <li  key={item.item.id} className="productCart">
                        Prenda: {item.item.name} <br></br>
                        Cantidad: {item.cantidad} <br></br>
                        Precio: $ {item.item.price}  <br></br> 
                        Total: $ {pxq(item.cantidad,item.item.price)} <br></br> 
                        <Button variant="dark" className="button" onClick={()=>clearItem(item.item.id)}><span>Eliminar Item</span></Button>
                        </li>)}
                    </ul>
                    <h3>Total Carrito: $ {total[total.length-1]} </h3>
                    <Button variant="dark" className="button" onClick={()=>clear()}><span>Resetear Carrito</span></Button>
                    <Button variant="dark" className="button"onClick={()=>finishBuy()}><span>Finalizar Compra</span></Button>
                </div>
                }
                
            </div>
        </section>
    )
}

export default Cart