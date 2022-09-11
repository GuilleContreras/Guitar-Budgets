
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemDetailContainer from './ItemDetailContainer';


const articlesImg =require.context(`../assets/articles`, true)

const Item = ({name, image, id, description}) => {

    return (
      <Col md={4}>
        <Card border="danger" style={{ width: '18rem' }} key={id} className="p-4 m-3">
          <Card.Img variant="top" src={articlesImg(`./${ image }`)} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
             {description}
            </Card.Text>
            <Button variant="primary" onClick={() => <ItemDetailContainer id={id}/>}>Ver Detalle</Button>
          </Card.Body>
        </Card>
      </Col>

      );

}


export default Item;