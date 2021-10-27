import React from 'react'
import { IoCartSharp } from 'react-icons/io5';
import { useCartContext } from '../../Context/cartContext';


const CartWidget = () => {
    
    const {cartList} = useCartContext();
    var totalItems = (cartList.length);

    return (
            <div>
                <IoCartSharp/>
                <div className="qty-display">{totalItems}</div>
            </div>
    )
}

export default CartWidget

