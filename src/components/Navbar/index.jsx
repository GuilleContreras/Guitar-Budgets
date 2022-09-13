import '../Navbar/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (

        <Navbar bg="light" variant="light" className="navbar">
            <Container className="navBarContainer">
                <div className="navBarContent">
                    <Row>
                        <Col>
                        <Link to={`/`}>
                            <Navbar.Brand href="#home" className='logoFont'>Guitar Budgets</Navbar.Brand>
                        </Link>
                        </Col>
                        <Col>
                        <Nav className="me-auto">
                            
                                <Nav.Link><Link to={`/`}>Home</Link></Nav.Link>
                            
                            <Nav.Link>About</Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                
                                <NavDropdown.Item><Link to={`/categoria/:idCategoria`}>Accesories</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={`/categoria/:idCategoria`}>PedalBoard</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={`/categoria/:idCategoria`}>Stomp Box</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={`/categoria/:idCategoria`}>Guitar Amps</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={`/categoria/:idCategoria`}>Bass Amps</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to={`/productos`}>All Categories</Link></NavDropdown.Item>
                            </NavDropdown>
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