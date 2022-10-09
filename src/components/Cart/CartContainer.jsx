import { Button, Col, Container, Row } from "react-bootstrap";
import NavBar from "../Navbar";
import CartItem from "./CartItem";
import ContactOrderForm from "./CartOrderForm";
import CartResume from "./CartResume";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../Cart/cartContainer.css';
import { Link } from 'react-router-dom';

const CartContainer = () => {

    const { id, clear, setId } = useContext(CartContext);

    let tempId = id;

    const idUndefined = () =>{
        tempId = undefined;
    }

    const cleaning = () => {
        clear();
        idUndefined();
        setId(undefined);
    }

    return (
        <>
            <NavBar />
            <div>
                {tempId === undefined ? (
                    <Container>
                        <Row>
                            <Col xs={9}>
                                <CartItem />
                                <CartResume />
                            </Col>
                            <Col>
                                <ContactOrderForm />
                            </Col>
                        </Row>
                    </Container>) :
                    (<Container>
                        <h2 className="cartContainerText">Tu id de compra es {tempId}</h2>
                        <Link to={`/productos`}><Button className="m-3" onClick={() => cleaning()} >Finalizar Compra</Button></Link>
                    </Container>)}
            </div>
        </>
    )
    
}


export default CartContainer;