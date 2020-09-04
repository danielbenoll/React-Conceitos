import React from 'react';
import "./Cabecalho.css"
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';

export default (props) => {

    console.log(props)

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Jumbotron>
                <h1>{props.titulo}</h1>
                <p>{props.texto}</p>
                <Button variant="primary">Saiba Mais</Button>
            </Jumbotron>
        </>
    )
}

