import React, { useState, useEffect } from 'react';

const cartMock = [
    { "id": 1, "name": "Earnie Ball Polish", "price": 2272, "description": "Guitar Polish", "category": "Accessories", "stock": 10, "image": "earnieball-polish.png" },
    { "id": 2, "name": "D`addario Guitar Strings", "price": 3281, "description": "D`addario XL", "category": "Accessories", "stock": 10, "image": "daddario-gtrstrings.png" },
    { "id": 3, "name": "Earnie Ball Bass Strings", "price": 18759, "description": "Slinky Flatwound", "category": "Accessories", "stock": 10, "image": "earnieball-bassstrings.png" },
    { "id": 4, "name": "D`addario Guitar Strings ", "price": 5046, "description": "D`addario XYXL", "category": "Accessories", "stock": 10, "image": "daddario-gtrstrings2.png" },
    { "id": 5, "name": "Tijuana Strap", "price": 1191, "description": "Silver Strap", "category": "Accessories", "stock": 10, "image": "strap1.png" },
    { "id": 6, "name": "Tijuana Strap", "price": 3445, "description": "Brown Bass Strap", "category": "Accessories", "stock": 10, "image": "strap2.png" },
    { "id": 7, "name": "Bamboo Strap", "price": 805, "description": "Bamboo Pink", "category": "Accessories", "stock": 10, "image": "strap3.png" },
    { "id": 8, "name": "Bamboo Strap", "price": 805, "description": "Bamboo Green", "category": "Accessories", "stock": 10, "image": "strap4.png" },
    { "id": 9, "name": "Stagg Cable Plug-Plug", "price": 545000, "description": "Standard Cable 6mm 6mts", "category": "Accessories", "stock": 10, "image": "stagg-cable.png" },
    { "id": 10, "name": "Earnie Ball Cable Plug-Plug", "price": 9866, "description": "Standard Cable 6mts", "category": "Accessories", "stock": 10, "image": "earnieball-cable.png" },
    { "id": 11, "name": "Pod Go", "price": 201029, "description": "Pod Go Pedalboard", "category": "Pedalboard", "stock": 10, "image": "podgo.png" },
    { "id": 12, "name": "Nux MG-30", "price": 138000, "description": "Nux Pedalboard", "category": "Pedalboard", "stock": 10, "image": "nux-mg30.png" },
    { "id": 13, "name": "Line6 Helix", "price": 441919, "description": "Line6 Helix Floor", "category": "Pedalboard", "stock": 10, "image": "helix-pedalboard.png" },
    { "id": 14, "name": "Line6 M13 Pedalboard", "price": 123722, "description": "Line6 M13 Stompbox", "category": "Pedalboard", "stock": 10, "image": "line6-m13.png" },
    { "id": 15, "name": "Zoom Pedalboard", "price": 133167, "description": "Zoom G5N", "category": "Pedalboard", "stock": 10, "image": "zoom-pedalboard.png" },
    { "id": 16, "name": "Vox Wah Pedal", "price": 22516, "description": "Vox Wah V-847", "category": "Stompbox", "stock": 10, "image": "vox-wah.png" },
    { "id": 17, "name": "Electroharmonix BigMuff", "price": 44011, "description": "Big Muff Germanium", "category": "Stompbox", "stock": 10, "image": "bigmuff.png" },
    { "id": 18, "name": "Marshall Reflector", "price": 48331, "description": "Marshall Rf-1 Reverb", "category": "Stompbox", "stock": 10, "image": "marshall-reflector.png" },
    { "id": 19, "name": "Nux Loop Core", "price": 38578, "description": "Nux Loop Core Pedal", "category": "Stompbox", "stock": 10, "image": "nux-loopcore.png" },
    { "id": 20, "name": "Vox Ac15vr", "price": 227054, "description": "Vox Ac15vr amp", "category": "Guitar Amps", "stock": 10, "image": "vox-amp.png" },
    { "id": 21, "name": "Orange Tiny Terror", "price": 222301, "description": "Orange Tiny Terror Amp", "category": "Guitar Amps", "stock": 10, "image": "orange-amp.png" },
    { "id": 22, "name": "Blackstar HTV-112", "price": 112488, "description": "Blackstar HTV-112 Amp", "category": "Guitar Amps", "stock": 10, "image": "blackstar-amp.png" },
    { "id": 23, "name": "Ashdown Five-15 Amp", "price": 169050, "description": "Ashdown Five-15 Mini Rig", "category": "Bass Amps", "stock": 10, "image": "ashdown-amp.png" },
    { "id": 24, "name": "Marshall Mb15 Amp", "price": 88194, "description": "Marshall Mb15 Combo", "category": "Bass Amps", "stock": 10, "image": "marshall-mb15.png" },
    { "id": 25, "name": "Hartke HD50", "price": 119504, "description": "Hartke HD50 Combo", "category": "Bass Amps", "stock": 10, "image": "hartke-amp.png" }
];


const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
        res(cartMock)
    }, 1);
})

const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [allProducts, setallProducts] = useState([])
    
    useEffect(() => {
        getProducts
            .then((data) => {
                setallProducts(data);
            })
    }, [])


    const [cart, setCart] = useState([]);
    const [item, setItem] = useState({});
    const [quantityAdded, setQuantityAdded]= useState(0);
    const [itemId, setItemId] = useState(0);


    const addItem = (item, quantityAdded) =>{
        setCart(item);
        setQuantityAdded(quantityAdded);
    }

    const removeItem = (itemId) =>{
        const product = allProducts.findIndex(p => p.id === 1)
        console.log(product);
        

    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        // const product = data.find(p => p.id === id);

    }

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider, CartContext}