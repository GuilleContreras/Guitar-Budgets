import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (

        <Navbar bg="bg-transparent" variant="light">
            <Container>
                <Navbar.Brand href="#home">Guitar Budgets</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About Us</Nav.Link>
                    <Nav.Link href="#pricing">Shop</Nav.Link>
                    <Nav.Link href="#cart" className="justify-content-end">
                        <CartWidget />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavBar;