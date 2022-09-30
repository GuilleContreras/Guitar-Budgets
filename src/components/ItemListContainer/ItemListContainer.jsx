import { useState, useEffect, useContext } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import NavBar from "../Navbar";
import CarouselHeader from "../Header/NavBarHeader";
import { CartContext } from '../../context/CartContext';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams();
    const {products} = useContext(CartContext);

    useEffect(() => {

        const getProducts =new Promise((res,rej) => {
            setTimeout(() => {
                res(products)
            }, 0);
        })

    if(idCategoria){
        getProducts
        .then((data) => {
        const productsFiltered = data.filter(p => p.category === idCategoria);
        setProductos(productsFiltered)
    })} else{
        getProducts
        .then((data) =>{
            setProductos(data);
        })
    }
    }, [idCategoria, products])

    return (
        <div>
            <NavBar />
            <CarouselHeader idCategoria={idCategoria}/>
            <ItemList productos={productos} />
        </div>
         )
    }



export default ItemListContainer;