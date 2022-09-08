import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const addNumber = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const restNumber = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs lg="2"><Button variant="primary" className="p-1" onClick={restNumber}>-</Button>{' '}</Col>
                <Col md="auto"><h3 className="p-3">{count}</h3></Col>
                <Col xs lg="2"><Button variant="primary" className="p-1" onClick={addNumber}>+</Button>{' '}</Col>
            </Row>
            <Row className="p-1">
                <Col><Button variant="primary" onClick={() => onAdd(count)}>Agregar al Carrito</Button>{' '}</Col>
            </Row>  
        </Container>  

        
    )
};

export default ItemCount;