import React from 'react';
import Cabecalho from './components/Cabecalho'

import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina1 from './pages/Pagina1'
import Pagina2 from './pages/Pagina2';
import Rotas from './Rotas';

function App() {
  return (
    <div>
        
        <main>
          <Rotas/>
        </main>
    </div>
  );
}

export default App;
