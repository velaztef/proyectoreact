import {useState, createContext, useContext } from "react";

 const CartContext = createContext ([]);

 export const useCartContext = () => useContext (CartContext);

function CartContextProvider ({children}){

    const [cartList, setCartList ] = useState ([]);

    const addItem = (item) =>{
        setCartList([...cartList, item]);
    }

    function clear() {
        setCartList([])
    }

    const clearItem = (id) => {
        let index = cartList.findIndex ((item) => item.item.id === id);
        cartList.splice(index, 1)
        setCartList([...cartList])
    }

    console.log(cartList);

    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            clear, 
            clearItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider