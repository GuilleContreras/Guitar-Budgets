import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemCount = ({ stock, setcantidadCompra, cantidadCompra, quantityToAdd }) => {

    const [btnPress, setbtnPress] = useState(false);

    const onAdd = () => {
        return (
            <Container>
                <p>Se agregarán {quantityToAdd} items al carrito</p>
                <Link to={`/cart`}><Button variant="primary" className="btnText">Finalizar Compra</Button></Link>
            </Container>
        )
    };

    const addNumber = () => {
        if (cantidadCompra < stock) {
            setcantidadCompra(cantidadCompra + 1);
        }
    }

    const restNumber = () => {
        if (cantidadCompra > 1) {
            setcantidadCompra(cantidadCompra - 1);
        }
    };

    if (btnPress === false) {
        return (

            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs lg="2"><Button variant="primary" className="p-1" onClick={restNumber}>-</Button>{' '}</Col>
                    <Col xs="2"><h3 className="p-3">{quantityToAdd}</h3></Col>
                    <Col xs lg="2"><Button variant="primary" className="p-1" onClick={addNumber}>+</Button>{' '}</Col>
                </Row>
                <Row className="p-1">
                    <Col>
                        <Button variant="primary" onClick={() => { setbtnPress(true) }}>Agregar al Carrito</Button>{' '}
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            onAdd()
        )
    }
};

export default ItemCount;