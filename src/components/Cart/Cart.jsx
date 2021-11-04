import '../styles/Cart.css';
import { useCartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import firebase from 'firebase';
import { getFirestore } from '../../services/getFirebase';

const Cart = () => {

    const {cartList, clear, clearItem, totalPxQ} = useCartContext();
    //Variable para el mensaje condicional
    let cartMessage = true;
    if(cartList.length>0){
        cartMessage = false;
    }

    //Funciones para calcula totales de compra
    const pxq = (a,b) => {
        return a*b
      }

      const finishBuy = () => {
        let order = {};
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = {name: 'Stefania Velazquez', email:'velazquezstefania@gmail.com', phone: 1564202944, payment:'mercado pago'};
        order.total = totalPxQ();
        order.items = cartList.map(cartItem => {
          const id = cartItem.item.id;
          const item = cartItem.item.name;
          const price = pxq(cartItem.item.price, cartItem.cantidad);
          const quant = cartItem.cantidad;

          return {id, item, price, quant}
        })

        const dbOrder = getFirestore();

        const orderReady = dbOrder.collection('orders')
        orderReady.add(order)
        .then((IdDocumento)=>{
          setTimeout(alert(`Su número de orden es ${IdDocumento.id} y esta siendo procesada`), 3000)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(()=>{
          alert(`Su compra se ha realizado con éxito, en breve recibirá una confirmación y recibo por email.`)
        })


       clear();


        const updateItems = dbOrder.collection('Items').where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.item.id));

        const batch = dbOrder.batch();

    updateItems.get()
    .then(collection => {
      collection.docs.forEach(docSnapshot => {
        batch.update(docSnapshot.ref, {
          stock: docSnapshot.data().stock - cartList.find(it => it.item.id === docSnapshot.id).cantidad
        })
      })
      batch.commit().then(resp => {
        console.log('modificado');
      })
      .catch(er => {
        console.log(er);
      })
    })
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
                        Total: $  {pxq(item.cantidad,item.item.price)} <br></br> 
                        <Button variant="dark" className="button" onClick={()=>clearItem(item.item.id)}><span>Eliminar Item</span></Button>
                        </li>)}
                    </ul>
                    <h3>Total Carrito: $ {totalPxQ()} </h3>
                    <Button variant="dark" className="button" onClick={()=>clear()}><span>Resetear Carrito</span></Button>
                    <Button variant="dark" className="button"onClick={()=>finishBuy()}><span>Finalizar Compra</span></Button>
                </div>
                }
                
            </div>
        </section>
    )
}

export default Cart