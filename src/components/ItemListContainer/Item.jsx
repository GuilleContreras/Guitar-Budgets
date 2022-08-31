import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({name, image, id, description}) => {

    return (
        <Card style={{ width: '18rem' }} key={id}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary">Agregar Producto</Button>
          </Card.Body>
        </Card>
      );

}


export default Item;