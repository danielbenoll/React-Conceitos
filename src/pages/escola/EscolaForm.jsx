import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Pagina from '../../components/Pagina';

export default() => {

    const {register, handleSubmit} = useForm()

    function enviar(dados){
        console.log(dados)
    }

    return(
        <Pagina titulo="Escola">
            <Form onSubmit={handleSubmit(enviar)}>
                <Form.Group as={Row} controlId="nome">
                    <Form.Label column smo={3} className="text-right">Nome:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="nome" ref={register}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="cnpj">
                    <Form.Label column smo={3} className="text-right">Cnpj:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="cnpj"ref={register}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="telefone">
                    <Form.Label column smo={3} className="text-right">Telefone:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="telefone"ref={register}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="endereco">
                    <Form.Label column smo={3} className="text-right">Endereço:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="endereco"ref={register}/>
                    </Col>
                </Form.Group>
                <div className="text-center">
                    <Button type="submit" variant="success">Salvar</Button>
                </div>
            </Form>
        </Pagina>
    )
}