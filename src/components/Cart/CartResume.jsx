import { CartContext } from '../../context/CartContext';
import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container } from 'react-bootstrap';

const CartResume = () =>{
    const { cart, total, setTotal, clear } = useContext(CartContext)

    const sumallPrices = cart.map(p => (p.item.price)*(p.quantity)).reduce((prev, curr) => prev + curr, 0);
    setTotal(sumallPrices);
    const sumallProducts = cart.map(p => p.quantity).reduce((prev, curr) => prev + curr, 0);

    
    return (
        <Container fluid className='p-2'>
                <Card className='cartCard'>
                    <Row>
                        <Col >
                            <Card.Title>Cantidad de Productos</Card.Title>
                            <Card.Title className="text-center mt-5 mb-4">{sumallProducts}</Card.Title>
                        </Col>
                        <Col>
                            <Card.Title>Total de la Compra</Card.Title>
                            <Card.Title className="text-center mt-5 mb-4">${total}</Card.Title>
                            <Button onClick={() => clear()}>Vaciar Carrito</Button> 
                        </Col>
                    </Row>   
                </Card>
        </Container>
    )
}

export default CartResume;