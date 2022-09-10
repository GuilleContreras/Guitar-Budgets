import React from "react"
import { Container, Row } from "react-bootstrap"
import Item from "./Item"


const ItemList = ({productos}) => {
    return (
        <Container>
            <Row>
            {
                productos.map(producto => {
                return (
                <Item key={producto.id} name={producto.name} image={producto.image} id={producto.id} description={producto.description}/>
                )
            })
            }
            </Row>
        </Container>
    )
}

export default ItemList;