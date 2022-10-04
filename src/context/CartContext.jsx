import React, { useState, useEffect } from 'react';
import { getFirestore, getDocs, collection, addDoc } from 'firebase/firestore'
const CartContext = React.createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [order, setOrderId] = useState([]);

    useEffect(() =>{
        const db = getFirestore();
        const productsRef = collection(db, "products");
        getDocs(productsRef).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });

    }, []);

const sendOrder = () =>{
    const order = {
        buyer: {name: "Daiana", phone: "2222", email: "a@caca.com"},
        items: [{name: "Bici", price: 100}],
        total: 100
    };

    const db= getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({id}) => setOrderId(id));
}


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
        <CartContext.Provider value={{ addItem, removeItem, clear, cart, setCart, products, sendOrder }}>
            {children}
        </CartContext.Provider>
    )

}

export { CartProvider, CartContext }