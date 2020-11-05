import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Pagina from '../components/Pagina';
import apiCep from '../services/Cep';

export default() => {

    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [uf, setUf] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [numero, setNumero] = useState('')

    useEffect(()=>{
        const pessoa = {nome: 'Daniel', telefone: '123', endereco:'ceilondres'}

        const {nome, telefone, idade} = pessoa

        // const nome = pessoa.nome
    }, [])
    

    function alterarCep(event){

        const value = event.target.value

        setCep(value)

        if(event.target.value.length == 8){
            apiCep.get(value+'/json').then(results=>{
                console.log(results.data);
                setLogradouro(results.data.logradouro)
                setBairro(results.data.bairro)
                setUf(results.data.uf)
                setLocalidade(results.data.localidade)
                setComplemento(results.data.complemento)
            })
        }
    }
    function alterarNumero(event){

        const value = event.target.value

        setNumero(value)

    }

    return(
        <Pagina titulo="Cep">
            <Form>
                <Form.Group controlId="cep">
                    <Form.Label>CEP:</Form.Label>
                    <Form.Control type="text" value={cep} onChange={alterarCep} maxLength={8}/>
                </Form.Group>
                <Form.Group controlId="uf">
                    <Form.Label>Uf:</Form.Label>
                    <Form.Control type="text" value={uf} readOnly/>
                </Form.Group>
                <Form.Group controlId="cidade">
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Control type="text" value={localidade} readOnly/>
                </Form.Group>
                <Form.Group controlId="bairro">
                    <Form.Label>Bairro:</Form.Label>
                    <Form.Control type="text" value={bairro} readOnly/>
                </Form.Group>
                <Form.Group controlId="logradouro">
                    <Form.Label>Logradouro:</Form.Label>
                    <Form.Control type="text" value={logradouro} readOnly/>
                </Form.Group>
                <Form.Group controlId="numero">
                    <Form.Label>Numero:</Form.Label>
                    <Form.Control type="text" value={numero} onChange={alterarNumero}/>
                </Form.Group>
                <Form.Group controlId="complemento">
                    <Form.Label>Complemento:</Form.Label>
                    <Form.Control type="text" value={complemento}/>
                </Form.Group>
                <div>
                    <Button variant="success" >Salvar</Button>
                </div>
            </Form>
        </Pagina>
    )
}