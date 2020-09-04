import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';

export default() => {
    return(
        <>
            <BrowserRouter>
                <Route exact path="/" component={Pagina1}/>
                <Route exact path="/pagina-1" component={Pagina1}/>
                <Route exact path="/pagina-2" component={Pagina2}/>
                <Route exact path="/pagina-3" component={Pagina3}/>
            </BrowserRouter>
        </>
    )
}