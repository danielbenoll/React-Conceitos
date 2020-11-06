import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Pagina from '../../components/Pagina';
import escolaValidator from '../../validator/escolaValidator';

export default() => {

    const {register, handleSubmit, errors} = useForm()

    function enviar(dados){
        console.log(dados)
    }

    return(
        <Pagina titulo="Escola">
            <Form onSubmit={handleSubmit(enviar)}>
                <Form.Group as={Row} controlId="nome">
                    <Form.Label column smo={3} className="text-right">Nome: <span className="text-danger">*</span></Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="nome" ref={register(escolaValidator.nome)} isInvalid={errors.nome} />
                        <Form.Control.Feedback type='invalid'>{errors.nome?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="cnpj">
                    <Form.Label column smo={3} className="text-right">Cnpj: <span className="text-danger">*</span></Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="cnpj" ref={register(escolaValidator.cnpj)} isInvalid={errors.cnpj}/>
                        <Form.Control.Feedback type='invalid'>{errors.cnpj?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="telefone">
                    <Form.Label column smo={3} className="text-right">Telefone: <span className="text-danger">*</span></Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="telefone"ref={register(escolaValidator.telefone)} isInvalid={errors.telefone}/>
                        <Form.Control.Feedback type='invalid'>{errors.telefone?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="endereco">
                    <Form.Label column smo={3} className="text-right">Endereço: <span className="text-danger">*</span></Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="endereco" ref={register(escolaValidator.endereco)} isInvalid={errors.endereco}/>
                        <Form.Control.Feedback type='invalid'>{errors.endereco?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <div className="text-center">
                    <Button type="submit" variant="success">Salvar</Button>
                </div>
            </Form>
        </Pagina>
    )
}