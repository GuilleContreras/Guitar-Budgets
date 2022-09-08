import '../Navbar/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (

        <Navbar bg="bg-transparent" variant="light" className="navbar">
            <Container className="navBarContainer">
                <div className="navBarContent">
                    <Row>
                        <Col>
                        <Navbar.Brand href="#home" className='logoFont'>Guitar Budgets</Navbar.Brand>
                        </Col>
                        <Col>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Accesories</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">PedalBoard</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Stomp Box</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Guitar Amps</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Bass Amps</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    All Categories
                                </NavDropdown.Item>
                            </NavDropdown>
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