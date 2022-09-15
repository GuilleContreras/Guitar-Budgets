import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemCount = ({ stock, onAdd, setcantidadCompra, cantidadCompra, quantityToAdd }) => {

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


    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs lg="2"><Button variant="primary" className="p-1" onClick={restNumber}>-</Button>{' '}</Col>
                <Col xs="2"><h3 className="p-3">{quantityToAdd}</h3></Col>
                <Col xs lg="2"><Button variant="primary" className="p-1" onClick={addNumber}>+</Button>{' '}</Col>
            </Row>
            <Row className="p-1">
                <Col>
                    <Button variant="primary" onClick={() => {onAdd()}}>Agregar al Carrito</Button>{' '}
                </Col>
            </Row>  
        </Container>  
    )
};

export default ItemCount;