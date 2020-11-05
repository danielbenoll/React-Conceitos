import React from 'react';
import { useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import Pagina from '../components/Pagina';

export default() => {

    const [numero, setNumero] = useState(0);
    const [intervalo, setIntervalo] = useState(1);
    const [nome, setNome] = useState('Daniel');

    function adicionar(event){

        // console.log(event.type)

        setNumero(numero + intervalo)
    }
    function subtrair(){
        setNumero(numero - intervalo)
    }
    function alterarIntervalo(event){
        setIntervalo(+event.target.value)
    }
    function alterarNome(event){
        setNome(event.target.value)
    }

    return(
        <Pagina titulo="Contador">
            <Button variant="primary" className="mr-2" onClick={subtrair}>-</Button>
                <Badge variant="danger" style={{padding: '13px 15px'}}>{numero}</Badge>        
            <Button variant="primary" className="ml-2" onClick={adicionar}>+</Button>
            
            <span className="ml-5">
                Intervalo: <input type="number" name="intervalo" id="intervalo" onChange={alterarIntervalo}/>
            </span>

            <div className="mt-3">
                Nome: <input type="text" value={nome} onChange={alterarNome}/>
            </div>
        </Pagina>
    )
}