import React from 'react';
import { Navbar, Nav, Container,FormControl,Button,Form } from 'react-bootstrap';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand  as={Link} to="/">SUPER MART</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to ="/order">Order</Nav.Link> 
                        <Nav.Link as={Link} to="/addEvents">Admin</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Deals</Nav.Link>
                        <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                    </Nav>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;  