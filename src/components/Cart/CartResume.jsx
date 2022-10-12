import { CartContext } from '../../context/CartContext';
import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container } from 'react-bootstrap';

const CartResume = () => {
    const { cart, total, clear, productsAdded } = useContext(CartContext)


    if (cart.length !== 0) {
        return (
            <Container fluid className='p-2'>
                <Card className='cartCard'>
                    <Row>
                        <Col >
                            <Card.Title>Cantidad de Productos</Card.Title>
                            <Card.Title className="text-center mt-5 mb-4">{productsAdded}</Card.Title>
                        </Col>
                        <Col>
                            <Card.Title>Total de la Compra</Card.Title>
                            <Card.Title className="text-center mt-5 mb-4">${total}</Card.Title>
                        </Col>
                        <Col><Button className='btn btn-danger' onClick={() => clear()}>Vaciar Carrito</Button></Col>
                    </Row>
                </Card>
            </Container>
        )
    }
}

export default CartResume;