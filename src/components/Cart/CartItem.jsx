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
    const {removeItem} = useContext(CartContext);

    const removeItemButtonHandler = () =>{
      removeItem();
    }
  

  return ( 
    <Container fluid className='p-2'>
        <Card className='cartCard'>
            <Row>
                <Col >
                    <Card.Title>Product Name</Card.Title>
                    <Card.Title className="text-center mt-5 mb-4">Card Title</Card.Title>
                </Col>
                <Col>
                    <Card.Title>Description</Card.Title>
                    <Card.Text className="text-center mt-4 mb-4">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Title>Image</Card.Title>
                    <img className="cartItemImg" variant="top" src={articlesImg(`./bigmuff.png`)}></img>
                </Col>
                <Col>
                    <Card.Title>Quantity</Card.Title>
                    
                </Col>
                <Col>
                    <Card.Title>Erase item</Card.Title>
                    <Button variant="light" className="text-center mt-4 mb-4" onClick={removeItemButtonHandler}><img src="boton-x.png" alt="" /></Button>
                </Col>
            </Row>
            
        </Card>
    </Container>
  )    

}

export default CartItem;