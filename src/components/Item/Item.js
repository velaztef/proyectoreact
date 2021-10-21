import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button'
import {NavLink} from 'react-router-dom'
import '../styles/Item.css'

const Item = ({ name, thumbnail, price, id, stock }) => {
    const onAdd = (contador) => {
        alert(`Has agregado ${contador} prendas`);
      }

  return (
    <article className="product-card">
      <img className="product-card__image" src={thumbnail} alt="" />

      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">$ {price}</span>
      <Button variant='dark'><NavLink to={`/productos/${id}`} className='link'>Mas detalles</NavLink></Button>


    </article>
  );
};

export default Item;