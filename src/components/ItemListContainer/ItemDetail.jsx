import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../ItemListContainer/itemdetail.css';
import Container from 'react-bootstrap/Container';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar';

const articlesImg = require.context(`../assets/articles`, true)


const ItemDetail = ({ newproducto }) => {

  const [cantidadCompra, setcantidadCompra] = useState(0);
  const quantityToAdd = cantidadCompra;

  const onAdd = (quantityToAdd) => {
    return ( 
    <Container>
      <h4>Agregaste ${quantityToAdd} elementos al carrito</h4>
      <Button variant="primary"><Link to={`/cart`}>Finalizar Compra</Link></Button>
    </Container>
    )
  };
  

  return (
    
    <div>
      <NavBar />
      <h1 className='detailTitle'>Product Detail</h1>
      {
        newproducto?.map(producto => {
          return (
            <Container key={producto.id} className="p-3">
              <Row md={12}>
                <Col>
                  <Card border="light">

                    <Card.Body className="modalText">
                      <Card.Header>{producto.name}</Card.Header>
                      <Row>
                        <Col>
                          <Card.Text className="m-3">
                            {producto.description}
                          </Card.Text>

                        </Col>
                        <Col>
                          <img className="img-fluid detailImg" alt="imgDetail" variant="top" src={articlesImg(`./${producto.image}`)} />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Card.Header className="m-3 cardTxt">Precio ${producto.price}</Card.Header>
                        </Col>
                      </Row>
                      <ItemCount stock={10} onAdd={onAdd} setcantidadCompra={setcantidadCompra} cantidadCompra={cantidadCompra} quantityToAdd={quantityToAdd}/>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>

          )
        })
      }
    </div>

  );
}

export default ItemDetail;