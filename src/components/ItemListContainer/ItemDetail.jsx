import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../ItemListContainer/itemdetail.css';
import Container from 'react-bootstrap/Container';
import ItemCount from '../ItemCount/ItemCount';

const articlesImg = require.context(`../assets/articles`, true)

const onAdd = (quantity) =>{
  (console.log(`Compro: ${quantity} Items`))
};

const ItemDetail = ({ newproducto, id }) => {
  return (

    <div>
      {
        newproducto.map(producto => {
          return (
            <Container key={producto.id}>

              <Card style={{ width: '40rem' }}>

                <Card.Body className="modalText">
                <Card.Header>{producto.name}</Card.Header>
                  <Row>
                    <Col>
                      <Card.Text className="m-3">
                        {producto.description}
                      </Card.Text>

                    </Col>
                    <Col>
                      <Card.Img variant="top" src={articlesImg(`./${producto.image}`)} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button variant="primary">Agregar Al Carrito</Button>
                    </Col>
                    <Col>
                      <Card.Text className="m-3 cardTxt">
                        Precio ${producto.price}
                      </Card.Text>
                    </Col>
                  </Row>
                  <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                </Card.Body>
              </Card>
            </Container>
          )
        })
      }
    </div>

  );
}

export default ItemDetail;