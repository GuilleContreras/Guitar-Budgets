import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../ItemListContainer/itemdetail.css';
import Container from 'react-bootstrap/Container';

const articlesImg =require.context(`../assets/articles`, true)

const ItemDetail = ({newproducto}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (

    <div>
    {
        newproducto.map(producto => {
        return (
          <Container key={producto.id}>
        <Button variant="primary" onClick={handleShow}  className="m-5">
          Descripción - Button Modal
        </Button>
  
        <Modal show={show} onHide={handleClose} className="modalText">
          <Modal.Header closeButton>
            <Modal.Title>{producto.name}</Modal.Title>
          </Modal.Header>
          <Row>
            <Col>
              <Modal.Body>{producto.description} </Modal.Body>
              
            </Col>
            <Col>
              <Card.Img className="cardImg" variant="top" src={articlesImg(`./${producto.image}`)} />
              <Card.Text className="cardTxt">${producto.price}</Card.Text>
            </Col>
          </Row>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </Container>
      )
        })
    }
    </div>
    
  );
}

export default ItemDetail;