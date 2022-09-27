import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const CartWidget = () =>{
    const {cart} = useContext(CartContext)
    console.log(cart);

    const sumallProducts = cart.map(p => p.quantity).reduce((prev, curr) => prev + curr, 0);
    console.log(sumallProducts)

    if(cart.length !== 0){
        return ( 
            <Container>
            <Row>
                <Col>
                    <i className="ri-shopping-cart-line"><Badge bg="danger">{sumallProducts}</Badge></i>
                    
                </Col>
                <Col>
                
                </Col>
        </Row>
        </Container>
        
        )
    }
    
    
}

export default CartWidget;