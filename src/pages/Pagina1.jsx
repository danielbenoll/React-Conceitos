import React from 'react';

import { Alert, Container, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../components/Pagina';

export default() => {
    return(
        <>
          <Pagina titulo="Página 1">
            <Alert variant="danger">
              <strong>Atenção!</strong> Isto é um alerta do React - Boostrap
            </Alert>
            <Alert variant="primary">
              <strong>Atenção!</strong> Isto é um alerta do React - Boostrap
            </Alert>
            <Alert variant="success">
              <strong>Atenção!</strong> Isto é um alerta do React - Boostrap
            </Alert>
            <Alert variant="warning">
              <strong>Atenção!</strong> Isto é um alerta do React - Boostrap
            </Alert>
            <Alert variant="info">
              <strong>Atenção!</strong> Isto é um alerta do React - Boostrap
            </Alert>
            <Alert variant="dark">
              <strong>Atenção!</strong> Isto é um alerta do React - Boostrap
            </Alert>
          </Pagina>

        </>
    )
}