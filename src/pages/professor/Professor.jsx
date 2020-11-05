import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Pagina from '../../components/Pagina';
import apiIbge from '../../services/Ibge';

export default() => {

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
    

    function enviarDados(){
        console.log(professor)
    }

    function alterarDados(event){

        const {name, value} = event.target

        setProfessor({ ...professor, [name]: value})
    }

    return(
        <Pagina titulo="Professor">
            <Form>
                <Form.Group as={Row} controlId="nome">
                    <Form.Label column smo={3} className="text-right">Nome:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="nome" onChange={alterarDados}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="cpf">
                    <Form.Label column smo={3} className="text-right">CPF:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="cpf" onChange={alterarDados} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="matricula">
                    <Form.Label column smo={3} className="text-right">Matricula:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="matricula" onChange={alterarDados} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="email">
                    <Form.Label column smo={3} className="text-right">Email:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="email" onChange={alterarDados} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="telefone">
                    <Form.Label column smo={3} className="text-right">Telefone:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="telefone" onChange={alterarDados} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="cep">
                    <Form.Label column smo={3} className="text-right">Cep:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="cep" onChange={alterarDados} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="uf">
                    <Form.Label column smo={3} className="text-right">Uf:</Form.Label>
                    <Col sm={9}>
                        <Form.Control as="select" name="uf" onChange={alterarDados}>
                            <option>Selecione</option>
                            {ufs.map(item=>(
                                <option key={item.id} value={item.sigla}>{item.sigla} - {item.nome}</option>
                            ))}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="municipio">
                    <Form.Label column smo={3} className="text-right">Municipio:</Form.Label>
                    <Col sm={9}>
                        <Form.Control as="select" name="municipio" onChange={alterarDados} >
                            <option>Selecione</option>
                            {municipios.map(item=>(
                                <option key={item.id} value={item.id}>{item.nome}</option>
                            ))}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="bairro">
                    <Form.Label column smo={3} className="text-right">Bairro:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="bairro" onChange={alterarDados} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="logradouro">
                    <Form.Label column smo={3} className="text-right">Logradouro:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="logradouro" onChange={alterarDados} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="complemento">
                    <Form.Label column smo={3} className="text-right">Complemento:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="complemento" onChange={alterarDados} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="numero">
                    <Form.Label column smo={3} className="text-right">Número:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="numero" onChange={alterarDados} />
                    </Col>
                </Form.Group>
                <div className="text-center">
                    <Button variant="success" onClick={enviarDados}>Salvar</Button>
                </div>
            </Form>
        </Pagina>
    )
}