import React from 'react';
import "./Cabecalho.css"
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {

    console.log(props)

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Sistema Acadêmico</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/pagina-1">Página 1</Link>
                        <Link to="/pagina-2">Página 2</Link>
                        <Link to="/pagina-3">Página 3</Link>
                        <Link to="/array">Array</Link>
                        <Link to="/carros">Carro</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

