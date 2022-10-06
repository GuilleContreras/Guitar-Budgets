import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import '../Cart/cartItem.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const articlesImg = require.context(`../assets/articles`, true)


const CartItem = () => {
    const {removeItem, cart} = useContext(CartContext);
    
    const removeItemButtonHandler = (item) =>{
      removeItem(item);
    }

    if(cart.length === 0){

        return (
            <>
            <h1 className='cartItemH1'>No hay poductos agregados al carrito</h1>
            <h2 className='cartItemH2'>Para agregar items vuelve a nuestra página de productos</h2>
            <Link to={`/productos`}><Button variant="primary" className="btnText m-2">Ir a Home</Button></Link>
            </>
        )
    }else{

        return (
            <div> 
            {cart.map(producto => {
                return (
                    <Container fluid className='p-2' key={producto.item.id}>
                <Card className='cartCard'>
                    <Row>
                        <Col >
                            <Card.Title>Producto</Card.Title>
                            <Card.Text className="text-center mt-4 mb-4">{producto.item.name}</Card.Text>
                        </Col>
                        <Col>
                            <Card.Title>Description</Card.Title>
                            <Card.Text className="text-center mt-4 mb-4">
                            {producto.item.description}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Title>Image</Card.Title>
                            <img className="img-fluid detailImgCart" alt="imgDetail" variant="top" src={articlesImg(`./${producto.item.image}`)} />
                        </Col>
                        <Col>
                            <Card.Title>Cantidad</Card.Title>
                            <Card.Text className="text-center mt-4 mb-4">
                            {producto.quantity}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Title>Precio Unitario</Card.Title>
                            <Card.Text className="text-center mt-4 mb-4">
                            ${producto.item.price}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Title>Erase item</Card.Title>
                            <Button variant="light" className="text-center mt-4 mb-4 eraseButton" onClick={() => removeItemButtonHandler(producto.item.id)}><img className='cartItemImg' src="boton-x.png" alt="" /></Button>
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

    }

  

export default CartItem;