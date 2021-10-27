import '../styles/Cart.css';
import { useCartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Cart = (id) => {

    const {cartList, clear, clearItem} = useCartContext();

    let cartMessage = true;
    if(cartList.length>0){
        cartMessage = false;
    }

    return(
        <section className="cart cartSlide"> 
             <div className="hero-container">
                 <h1>Prendas adquiridas</h1>
                 {
                cartMessage ?
                <div className="message">
                    <h2>No agregaste ningun producto al carrito</h2>
                    <Button variant="dark" className="button"><Link to={"/productos"} className='link'><span>Buscar productos</span></Link></Button>
                </div>
                :
                <div>
                    <ul className="productCart">
                        {cartList.map(item =>
                        <li  key={item.item.id}>
                        Prenda: {item.item.name} <br></br>
                        Cantidad: {item.cantidad} <br></br>
                        Precio: $ {item.item.price * item.cantidad} <br></br>
                        <Button variant="dark" className="button" onClick={()=>clearItem(id)}><span>Eliminar Item</span></Button>
                        </li>)}
                    </ul>
                    <Button variant="dark" className="button" onClick={()=>clear()}><span>Resetear Carrito</span></Button>
                </div>
                }
                
            </div>
        </section>
    )
}

export default Cart