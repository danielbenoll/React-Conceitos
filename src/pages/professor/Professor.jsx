import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Pagina from '../../components/Pagina';
import apiIbge from '../../services/Ibge';
import professorValidator from '../../validator/professorValidator';

export default() => {

    const {register, handleSubmit, errors} = useForm()

    const [ufs, setUfs] = useState([])
    const [municipios, setMunicipios] = useState([])
    const [professor, setProfessor] = useState({})

    useEffect(()=>{
        apiIbge.get('estados?orderBy=nome').then(results => {
            setUfs(results.data)
        })
    }, [])

    useEffect(()=>{
        apiIbge.get(`estados/${professor.uf}/municipios?orderBy=nome`).then(results => {
            setMunicipios(results.data)
            console.log(results.data)
        })
    }, [professor.uf])
    

    function enviar(){
        console.log(professor)
    }

    function alterarDados(event){

        const {name, value} = event.target

        setProfessor({ ...professor, [name]: value})
    }

    return(
        <Pagina titulo="Professor">
            <Form onSubmit={handleSubmit(enviar)}>
                <Form.Group as={Row} controlId="nome">
                    <Form.Label column smo={3} className="text-right">Nome:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="nome" ref={register(professorValidator.nome)} isInvalid={errors.nome}/>
                <Form.Control.Feedback type='invalid'>{errors.nome?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="cpf">
                    <Form.Label column smo={3} className="text-right">CPF:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="cpf" ref={register(professorValidator.cpf)} isInvalid={errors.cpf} />
                <Form.Control.Feedback type='invalid'>{errors.cpf?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="matricula">
                    <Form.Label column smo={3} className="text-right">Matricula:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="matricula" ref={register(professorValidator.matricula)} isInvalid={errors.matricula} />
                <Form.Control.Feedback type='invalid'>{errors.matricula?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="email">
                    <Form.Label column smo={3} className="text-right">Email:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="email" ref={register(professorValidator.email)} isInvalid={errors.email} />
                <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="telefone">
                    <Form.Label column smo={3} className="text-right">Telefone:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="telefone" ref={register(professorValidator.telefone)} isInvalid={errors.telefone} />
                <Form.Control.Feedback type='invalid'>{errors.telefone?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="cep">
                    <Form.Label column smo={3} className="text-right">Cep:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="cep" ref={register(professorValidator.cep)} isInvalid={errors.cep} />
                <Form.Control.Feedback type='invalid'>{errors.cep?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="uf">
                    <Form.Label column smo={3} className="text-right">Uf:</Form.Label>
                    <Col sm={9}>
                        <Form.Control as="select" name="uf" ref={register(professorValidator.uf)} isInvalid={errors.uf}>
                            <option>Selecione</option>
                            {ufs.map(item=>(
                                <option key={item.id} value={item.sigla}>{item.sigla} - {item.nome}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>{errors.uf?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="municipio">
                    <Form.Label column smo={3} className="text-right">Municipio:</Form.Label>
                    <Col sm={9}>
                        <Form.Control as="select" name="municipio" ref={register(professorValidator.municipio)} isInvalid={errors.municipio} >
                            <option>Selecione</option>
                            {municipios.map(item=>(
                                <option key={item.id} value={item.id}>{item.nome}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>{errors.municipio?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="bairro">
                    <Form.Label column smo={3} className="text-right">Bairro:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="bairro" ref={register(professorValidator.bairro)} isInvalid={errors.bairro} />
                        <Form.Control.Feedback type='invalid'>{errors.bairro?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="logradouro">
                    <Form.Label column smo={3} className="text-right">Logradouro:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="logradouro" ref={register(professorValidator.logradouro)} isInvalid={errors.logradouro} />
                        <Form.Control.Feedback type='invalid'>{errors.logradouro?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="complemento">
                    <Form.Label column smo={3} className="text-right">Complemento:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="complemento" ref={register(professorValidator.complemento)} isInvalid={errors.complemento} />
                        <Form.Control.Feedback type='invalid'>{errors.complemento?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="numero">
                    <Form.Label column smo={3} className="text-right">Número:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="numero" ref={register(professorValidator.numero)} isInvalid={errors.numero} />
                        <Form.Control.Feedback type='invalid'>{errors.numero?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <div className="text-center">
                    <Button variant="success" type="submit">Salvar</Button>
                </div>
            </Form>
        </Pagina>
    )
}