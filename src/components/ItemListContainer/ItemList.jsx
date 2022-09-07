import React from "react"
import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <div>
            {
                productos.map(producto => {
                return <Item key={producto.id} name={producto.name} image={producto.image} id={producto.id} description={producto.description}/>
                })
            }
        </div>
    )
}

export default ItemList;