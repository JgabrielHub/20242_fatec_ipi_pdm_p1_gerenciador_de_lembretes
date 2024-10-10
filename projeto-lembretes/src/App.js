import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LembreteEntrada from './components/LembreteEntrada';
import LembreteLista from './components/LembreteLista';
import './components/estilo.css';
import React, { useState } from 'react';

function App() {
  const [lembretes, setLembretes] = useState([]);

  const adicionarLembrete = (novoLembrete) => {
    setLembretes([...lembretes, novoLembrete]);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className='display-1'>Lembretes</h1>
          <LembreteLista lembretes={lembretes}/>
          <LembreteEntrada adicionarLembrete={adicionarLembrete} />
        </div>
      </div>
    </div>
  );
}
export default App;