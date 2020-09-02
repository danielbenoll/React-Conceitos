import React from 'react';
import "./Cabecalho.css"

export default(props) => {

    console.log(props)

    return(
        <>
            <header>
                <h1>{props.titulo}</h1>
                <p>{props.texto}</p>
            </header>
        </>
    )           
}

