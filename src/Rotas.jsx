import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import Cabecalho from './components/Cabecalho';
import Array from './pages/Array';
import Carros from './pages/Carros';
import Dever4 from './pages/Dever4';
import Alunos from './pages/Alunos';

export default() => {
    return(
        <>
            <BrowserRouter>

                <Cabecalho texto="DANIEL MARAVILHOSO" titulo="Cabeçalho"/>
                
                <Route exact path="/" component={Pagina1}/>
                <Route exact path="/pagina-1" component={Pagina1}/>
                <Route exact path="/pagina-2" component={Pagina2}/>
                <Route exact path="/pagina-3" component={Pagina3}/>
                <Route exact path="/array" component={Array}/>
                <Route exact path="/carros" component={Carros}/>
                <Route exact path="/dever4" component={Dever4}/>
                <Route exact path="/alunos" component={Alunos}/>
            </BrowserRouter>
        </>
    )
}