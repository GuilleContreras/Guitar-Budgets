import '../Navbar/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = () => {
    return (

        <Navbar bg="bg-transparent" variant="light" className="navbar">
            <Container className="navBarContainer">
                <div className="navBarContent">
                    <Row>
                        <Col>
                        <Navbar.Brand href="#home">Guitar Budgets</Navbar.Brand>
                        </Col>
                        <Col>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Shop</Nav.Link>
                            <Nav.Link href="#cart" className="justify-content-end">
                                <CartWidget />
                            </Nav.Link>
                        </Nav>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Navbar>

    )
}

export default NavBar;