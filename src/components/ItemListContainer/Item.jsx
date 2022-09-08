import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';



const articlesImg =require.context(`../assets/articles`, true)

const Item = ({name, image, id, description}) => {

    return (
      
        <Card style={{ width: '18rem' }} key={id} className="p-4 m-3">
          <Card.Img variant="top" src={articlesImg(`./${ image }`)} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
             {description}
            </Card.Text>
            <ItemCount />
            <Button variant="primary">Agregar Producto</Button>
          </Card.Body>
        </Card>

      );

}


export default Item;