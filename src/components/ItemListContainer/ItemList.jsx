import React from "react"
import { Container, Row } from "react-bootstrap"
import Item from "./Item"
import '../ItemListContainer/itemlist.css';

const ItemList = ({ productos }) => {
    return (
        <Container>
            <Row>
                <h1 className='itemTitle'>Our Products</h1>
                <hr className="hrColor"></hr>
            </Row>
            <Row>
                {
                    productos.map(producto => {
                        return (
                            <Item key={producto.id} name={producto.name} image={producto.image} id={producto.id} description={producto.description} />
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default ItemList;