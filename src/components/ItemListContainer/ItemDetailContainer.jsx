import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from '../../context/CartContext';


const ItemDetailContainer = ({ id }) => {

    const [newproducto, setnewProducto] = useState([])
    const { idProducto } = useParams();
    const { products} = useContext(CartContext);


    useEffect(() => {
        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(products)
            }, 0);
        })

        getProducts
            .then((data) => {
                const product = data.find(p => p.id === Number(idProducto));
                setnewProducto([product]);
            })
    }, [idProducto, products])

    return (
        <div>
            <ItemDetail newproducto={newproducto} />
        </div>
    )
}

export default ItemDetailContainer;