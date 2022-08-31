// import ItemCount from "../ItemCount/ItemCount";
// import { useState, useEffect } from "react"
// import ItemList from "./ItemList";

// const onAdd = (quantity) =>{
//     (console.log(`Compro: ${quantity} Items`))
// };

// const buscarProductos = async () => {
//     const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ferrari");
//     const data = await response.json();
//     setProductos(data.results);
//     console.log(productos);

// }

// const ItemListContainer = ({greeting, color}) => {

//     const [productos, setProductos] = useState([])

//     useEffect(() => {
//       buscarProductos();
//     }, [])
//     return (<>
//         <div>
//             <p style={{color:color}}>
//                 {greeting}
//             </p>
//             <ItemCount stock={10} initial={1} onAdd={onAdd}/>
//         </div>
        
//         <ItemList productos={productos}/>
//         </>
//         )
//     }



// export default ItemListContainer;