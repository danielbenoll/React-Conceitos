import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

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
            <Pagina titulo="Array">
                <ul>
                    {carros.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </Pagina>
        </>
    )
}