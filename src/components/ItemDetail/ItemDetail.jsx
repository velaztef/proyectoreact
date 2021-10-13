import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

import '../styles/ItemDetail.css';

const ItemDetail = ({ item }) => {

  const onAdd = (contador) => {
    alert(`Has agregado ${contador} prendas`);
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
        <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
      </div>
    </article>
  );
};

export default ItemDetail;