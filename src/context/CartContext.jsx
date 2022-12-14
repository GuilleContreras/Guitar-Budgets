import React, { useState, useEffect } from 'react';
import { getFirestore, getDocs, collection } from 'firebase/firestore'
const CartContext = React.createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [id, setId] = useState();
    const [productsAdded, setProductsAdded] = useState(0);

    useEffect(() => {
        const db = getFirestore();
        const productsRef = collection(db, "products");
        getDocs(productsRef).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });

    }, []);

    useEffect(() => {
        const sumallPrices = cart.map(p => (p.item.price) * (p.quantity)).reduce((prev, curr) => prev + curr, 0);
        setTotal(sumallPrices);
        const sumallProducts = cart.map(p => p.quantity).reduce((prev, curr) => prev + curr, 0);
        setProductsAdded(sumallProducts);
    }, [cart])

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
        <CartContext.Provider value={{ addItem, removeItem, clear, cart, setCart, products, setTotal, total, id, setId, productsAdded }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }