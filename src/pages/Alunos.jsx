import React from 'react';
import { Container, Jumbotron, Table } from 'react-bootstrap';
import Cartao from '../components/Cartao';
import Pagina from '../components/Pagina';

export default(props) => {
    const alunos = [
        {id: 1, nome: 'João da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 10},
        {id: 2, nome: 'Maria da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 7},
        {id: 3, nome: 'Antônio da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 4},
        {id: 4, nome: 'João das Couves', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 1},
        {id: 5, nome: 'Francisco da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 6.8},
        {id: 6, nome: 'Anna da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 7.2},
        {id: 7, nome: 'Aline da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 8.8},
        {id: 8, nome: 'Teresa da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 9},
        {id: 9, nome: 'Victor da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 9.5},
        {id: 10, nome: 'Thiago da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 7},
        {id: 11, nome: 'Gabriel da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 5},
        {id: 12, nome: 'João da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 2.3},
    ]
    return(
        <>
            <Pagina titulo='Alunos'>
                <Cartao titulo="Homem Aranha"  foto="https://s2.glbimg.com/UHcXfZv-SKMGJYm76SMBiPrxEXU=/342x0:1500x744/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/5/I/Cvvh11QmSYtK1ZynvVIw/homem-aranha-aranhaverso-1.jpg">
                    Filme top
                </Cartao>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th>Nota</th>
                    </tr>
                    </thead>
                    <tbody>
                    {alunos.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.telefone}</td>
                            <td>{item.endereco}</td>
                            <td>{item.nota}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Pagina>
        </>
    )
}