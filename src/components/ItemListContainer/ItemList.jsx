import React from "react"
import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <div>
            {
                productos.map(producto => {
                return <Item name={producto.name} image={producto.image} id={producto.id} description={productos.description} />
                })
            }
        </div>
    )
}

export default ItemList;