import React, { useState } from 'react';

function LembreteEntrada({ adicionarLembrete }) {
  const [novoLembrete, setNovoLembrete] = useState('');

  const handleInputChange = (event) => {
    setNovoLembrete(event.target.value);
  };

  const handleAdicionarLembrete = (event) => {
    event.preventDefault(); 
    if (novoLembrete.trim()) { 
      adicionarLembrete(novoLembrete); 
      setNovoLembrete('');
    }
  };

  return (
    <div className="container">
  <form onSubmit={handleAdicionarLembrete}>
    <div className="d-flex flex-column">
      <input className="form-control mb-2 mt-2 text-center"
             id="lembreteInput"
             type="text"
             placeholder="Digite seu novo lembrete"
             value={novoLembrete}
             onChange={handleInputChange}
       />
      <button className="btn btn-purpura w-100" type="submit">Ok</button>
    </div>
  </form>
</div>
  );
}

export default LembreteEntrada;