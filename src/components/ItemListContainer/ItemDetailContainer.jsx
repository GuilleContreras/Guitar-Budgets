import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";

const newMock = [
    {"id":1, "name":"Guitarra Eléctrica Fender ´50s Telecaster", "price":507558, "description": "Cuenta con dos pastillas que tienen un diseño casi microfónico y le permiten captar con riqueza todos los matices y armónicos. Es un instrumento de gran carácter, efectivo y eficaz. Sin dudas, su mayor referente es Keith Richards, de los Rolling Stones, por lo que muchos la asocian al estilo Stone.Material versátil. Su madera de fresno es el clásico de todos los tiempos y ofrece un sonido imponente de rápida respuesta", "category": "Accessories", "stock": 10, "image":"fendergtr1.png", "image2":"fendergtr2.png", "image3":"fendergtr3.png"}
];

const getProducts =new Promise((res,rej) => {
    setTimeout(() => {
        res(newMock)
    }, 2000);
})

const ItemDetailContainer = () => {

    const [newproducto, setnewProducto] = useState([])

    useEffect(() => {
      getProducts
      .then((data) => {
        setnewProducto(data)
      })
    }, [])

    return (
        <div>
            <ItemDetail key={newproducto.id} newproducto={newproducto} name={newproducto.name} image={newproducto.image} price={newproducto.price} image2={newproducto.image2} image3={newproducto.image3}/>
        </div>
         )
    }

export default ItemDetailContainer;