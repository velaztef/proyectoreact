import React, { useEffect, useState } from 'react';
import { getProductById } from '../../Helpers/GetData';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../styles/ItemDetailContainer.css';

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id, setProduct);
    console.log(product);
  }, []);

  return (
    <section>
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;