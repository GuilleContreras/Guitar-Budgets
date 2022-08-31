import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headerImg from '../assets/Images/header-img.jpg';

const Header = () => {
    return (
        <Container fluid>
            <Row>
                <img src={headerImg} alt="" />
            </Row>
        </Container>
    )
}

export default Header;