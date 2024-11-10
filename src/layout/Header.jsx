import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand style={{
                        fontFamily: 'cursive',
                        color: 'deeppink',
                        fontWeight: 'bold',
                        fontSize: 26,
                    }}
                        as={Link} to="/">WeLcOmE Handling API</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{
                                fontFamily: 'cursive',
                                color: 'darkorange',
                                fontWeight: 'bold',
                                fontSize: 24
                            }}
                                as={Link} to="/">Home</Nav.Link>
                            <Nav.Link style={{
                                fontFamily: 'cursive',
                                color: 'darkorchid',
                                fontWeight: 'bold',
                                fontSize: 24
                            }}
                                as={Link} to="/about-page">About</Nav.Link>
                            <Nav.Link style={{
                                fontFamily: 'cursive',
                                color: 'darkorchid',
                                fontWeight: 'bold',
                                fontSize: 24
                            }}
                                as={Link} to="/users-page">Users</Nav.Link>
                            <Nav.Link style={{
                                fontFamily: 'cursive',
                                color: 'darkorchid',
                                fontWeight: 'bold',
                                fontSize: 24
                            }}
                                as={Link} to="/products-page">Products</Nav.Link>
                            <Nav.Link style={{
                                fontFamily: 'cursive',
                                color: 'darkorchid',
                                fontWeight: 'bold',
                                fontSize: 24
                            }}
                                as={Link} to="/items-page">Items</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
