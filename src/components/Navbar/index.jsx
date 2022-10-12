import '../Navbar/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = ({idCategoria}) => {
    return (

        <Navbar bg="light" variant="light" className="navbar">
            <Container className="navBarContainer">
                <div className="navBarContent">
                    <Row>
                        <Col>
                            <Navbar.Brand as={Link} to="/" className='logoFont'>Guitar Budgets</Navbar.Brand>
                        </Col>
                        <Col>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/categoria/Accessories">Accesories</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/categoria/Pedalboard">PedalBoard</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/categoria/Stompbox">Stomp Box</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/categoria/Guitar Amps">Guitar Amps</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/categoria/Bass Amps">Bass Amps</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/productos">All Categories</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="justify-content-end">
                            <CartWidget as={Link} to="//cart" />
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