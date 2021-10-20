import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/ItemDetail.css';

const ItemDetail = ({ item }) => {

  const [show, setShow] = useState (false);

  const [hide, setHide] = useState (true);

  const onAdd = (contador) => {
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
          show? <Button variant='dark'><Link to={'/cart'} className='link'>Finalizar compra</Link></Button>:null
        }
        
      </div>
    </article>
  );
};

export default ItemDetail;