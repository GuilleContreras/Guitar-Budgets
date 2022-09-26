import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const { total, setTotal } = useState(0);

    let cartProductAux = [];
    const addItem = (item, quantity) => {

        let cartProduct = { item, quantity };

        if (isInCart(item)) {
            cartProduct = cart.find(p => p.item.id === item.id)
            cartProduct.quantity = cartProduct.quantity + quantity;
            cartProductAux = [...cart];
        } else {
            cartProductAux = [...cart, cartProduct];
        }
        setCart(cartProductAux);
    }

    const removeItem = (id) => {
        cartProductAux = cart.filter(p => p.item.id !== id);
        console.log(cartProductAux)
        setCart(cartProductAux)
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (item) => {
        const result = cart.some(p => p.item.id === item.id);
        return result;

    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, cart, setCart }}>
            {children}
        </CartContext.Provider>
    )

}

export { CartProvider, CartContext }