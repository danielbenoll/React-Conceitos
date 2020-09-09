import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Card, Row, Col, Button } from 'react-bootstrap';

export default() => {

    const carros = [
        {id: 1, marca: "GM", modelo: "Opala", ano: 1982, foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Chevrolet_Opala_SS_19744.jpg/1200px-Chevrolet_Opala_SS_19744.jpg"},
        {id: 1, marca: "GM", modelo: "Monza", ano: 1985, foto: "https://img.olx.com.br/images/43/434008411797075.jpg"},
        {id: 1, marca: "VW", modelo: "Gol", ano: 2020, foto: "https://conteudo.imguol.com.br/c/entretenimento/1f/2019/04/08/volkswagen-gol-2020-1554739538314_v2_1920x1080.jpg"},
        {id: 1, marca: "Toyota", modelo: "Supra", ano: 2016, foto: "https://s2.glbimg.com/tZxk9DRB5VqSRhp4lQJynlg__2M=/620x413/e.glbimg.com/og/ed/f/original/2019/01/18/suprafrente.jpg"},
        {id: 1, marca: "Tesla", modelo: "Model S", ano: 2018, foto: "https://www.automundo.pt/wp-content/uploads/2019/07/tesla_models1561972515.png"},
        {id: 1, marca: "Fiat", modelo: "Marea", ano: 1995, foto: "https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/5723fab70e21634575011f03qr-635-gb-01-eps.jpeg?quality=70&strip=info&w=1024"},
    ]

    return(
        <>
            <Jumbotron>
                <Container>
                    <h1>Carros</h1>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    {carros.map(item => (
                        <Col xs={3} className="mb-3">
                            <Card>
                                <Card.Img variant="top" src={item.foto} />
                                <Card.Body>
                                    <Card.Title>{item.marca} - {item.modelo}</Card.Title>
                                    <Card.Text>
                                        <Row>
                                            <Col>
                                                Ano: <strong>{item.ano}</strong></Col>
                                            <Col>
                                                <Button variant="primary">Detalhes</Button>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}