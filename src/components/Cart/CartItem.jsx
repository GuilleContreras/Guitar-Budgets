import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../ItemListContainer/itemdetail.css';
import Container from 'react-bootstrap/Container';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import NavBar from '../Navbar';
import { Button } from 'react-bootstrap';
import '../Cart/cartItem.css';
import { CartContext } from '../../context/CartContext';

const articlesImg = require.context(`../assets/articles`, true)


const CartItem = () => {
    const {removeItem, cart} = useContext(CartContext);
    console.log(cart);
    const removeItemButtonHandler = () =>{
      removeItem();
    }
  

  return (
    <div> 
    {cart.map(producto => {
        return (
            <Container fluid className='p-2' key={producto.item.id}>
        <Card className='cartCard'>
            <Row>
                <Col >
                    <Card.Title>Producto</Card.Title>
                    <Card.Title className="text-center mt-5 mb-4">{producto.item.name}</Card.Title>
                </Col>
                <Col>
                    <Card.Title>Description</Card.Title>
                    <Card.Text className="text-center mt-4 mb-4">
                    {producto.item.description}
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Title>Image</Card.Title>
                    <img className="img-fluid detailImg" alt="imgDetail" variant="top" src={articlesImg(`./${producto.item.image}`)} />
                </Col>
                <Col>
                    <Card.Title>Cantidad</Card.Title>
                    <Card.Text className="text-center mt-4 mb-4">
                    {producto.quantity}
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Title>Erase item</Card.Title>
                    <Button variant="light" className="text-center mt-4 mb-4" onClick={removeItemButtonHandler}><img src="boton-x.png" alt="" /></Button>
                </Col>
            </Row>
            
        </Card>
    </Container>
        )
    })
    }
    </div>
  );    
}

export default CartItem;