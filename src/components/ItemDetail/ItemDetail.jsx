import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/ItemDetail.css';
import { useCartContext } from '../../Context/cartContext';


const ItemDetail = ({ item }) => {

  const {cartList, addItem, addCart} = useCartContext();

  const [show, setShow] = useState (false);

  const [hide, setHide] = useState (true);


  const onAdd = (contador) => {
    if (cartList.length === 0) {
    addItem({item: item, cantidad: contador});
    addCart(contador);
    alert(`Has agregado al carrito ${contador} ${item.name}`);
    setShow(true);
    setHide(false);
    } else  {
      let idDouble = cartList.find(item => item.item.id === item.id)
      if (idDouble) {
        alert (`Ud agrego ${contador} unidades al carrito`);
        addCart(contador);
        idDouble.cantidad = idDouble.cantidad+contador;
        setShow(true);
        setHide(false);
      } else {
        alert (`Ud agrego ${contador} unidades al carrito`);
        addCart(contador);
        setShow(true);
        setHide(false);
        addItem({item: item, cantidad: contador})
      }
    }
  };

  return (
    <article className="product-detail">
      <img src={item.thumbnail} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{item.name}</h2>
        <p className="description">categoría: {item.category}</p>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Precio: $ {item.price}</li>
          <li>Size:{item.size}</li>
          <li>Type:{item.type}</li>
        </ul>
        {
          hide? <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />:null
        }

        {
          show? <Button variant='dark' className="button"><Link to={'/cart'} className='link'>Finalizar compra</Link></Button>:null
        }
        {
          show? <Button variant='dark' className="button"><Link to={'/'} className='link'>Seguir Comprando</Link></Button>:null
        }
      </div>
    </article>
  );
};

export default ItemDetail;