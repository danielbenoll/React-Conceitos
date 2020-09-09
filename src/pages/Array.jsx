import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';

export default() => {

    const carros = [
        'Opala', 
        'Monza', 
        'Gol', 
        'Supra', 
        'Tesla', 
        'Marea'
    ]

    return(
        <>
            <Jumbotron>
                <Container>
                    <h1>Array</h1>
                </Container>
            </Jumbotron>
            <Container>
                <ul>
                    {carros.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </Container>
        </>
    )
}