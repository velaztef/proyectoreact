import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/ItemDetail.css';
import { useCartContext } from '../../Context/cartContext';


const ItemDetail = ({ item }) => {

  const {cartList, addItem} = useCartContext();
  console.log(cartList);

  const [show, setShow] = useState (false);

  const [hide, setHide] = useState (true);

  const onAdd = (contador) => {
    addItem({item:item, cantidad: contador});
    alert(`Has agregado ${contador} prendas`);
    setShow(true);
    setHide(false);
  }

  return (
    <article className="product-detail">
      <img src={item.thumbnail} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Price: $ {item.price}</li>
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
          show? <Button variant='dark' className="button"><Link to={'/productos'} className='link'>Seguir Comprando</Link></Button>:null
        }
      </div>
    </article>
  );
};

export default ItemDetail;