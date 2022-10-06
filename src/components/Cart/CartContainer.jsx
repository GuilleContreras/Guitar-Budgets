import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../Navbar";
import CartItem from "./CartItem";
import ContactOrderForm from "./CartOrderForm";
import CartResume from "./CartResume";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartContainer = () => {

    const { id } = useContext(CartContext);

    return (
        <>
            <NavBar />
            <div>
                {id === undefined ? (
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
                        <h2>Tu id de compra es {id}</h2>
                    </Container>)}
            </div>

        </>
    )
}

export default CartContainer;