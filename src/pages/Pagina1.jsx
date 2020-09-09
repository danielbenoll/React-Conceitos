import React from 'react';
import { Alert, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default() => {
    return(
        <>
          <Jumbotron>
                <h1>Página 1</h1>
          </Jumbotron>

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

        </>
    )
}