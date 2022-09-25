import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';

const ItemCount = ({ stock, producto }) => {

    const [btnPress, setbtnPress] = useState(false);
    const [cantidadCompra, setcantidadCompra] = useState(0);
    const quantity = cantidadCompra;
  
    const {addItem, cart, clear, removeItem } = useContext(CartContext);

    const onAddButtonHandler = () => {
      addItem(producto, quantity)
      setbtnPress(true)

    }
    const onClear = () => {
        clear()

    }
    const removeItemHandler = () => {
        removeItem(...cart.id)
    }
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
                    <Col xs="2"><h3 className="p-3">{quantity}</h3></Col>
                    <Col xs lg="2"><Button variant="primary" className="p-1" onClick={addNumber}>+</Button>{' '}</Col>
                </Row>
                <Row className="p-1">
                    <Col>
                        <Button variant="primary" onClick={()=> onAddButtonHandler(producto,quantity)} >Agregar al Carrito</Button>{' '}
                        <Button variant="primary" onClick={()=> onClear()} >Vaciar Carrito</Button>{' '}
                        <Button variant="primary" onClick={()=> onClear()} >Remover Item</Button>{' '}
                    </Col>
                </Row>
                
            </Container>
        )
    } else {
        return (
            (
                <Container>
                    <p>Se agregarán {quantity} items al carrito</p>
                    <Link to={`/cart`}><Button variant="primary" className="btnText" onClick={()=> console.log(cart)}>Finalizar Compra</Button></Link>
                </Container>
            )
        )
    }
};

export default ItemCount;