import React, { useState } from 'react';

function LembreteEntrada() {
  const [novoLembrete, setNovoLembrete] = useState('');

  const handleInputChange = (event) => {
    setNovoLembrete(event.target.value);
  };

  const handleAdicionarLembrete = () => {
    // Aqui você implementará a lógica para adicionar o lembrete
    console.log('Novo lembrete:', novoLembrete);
    setNovoLembrete(''); // Limpa o campo após adicionar
  };

  return (
    <div className="container">
  <form>
    <div className="d-flex flex-column">
      <input className="form-control mb-2 mt-2 text-center"
             id="lembreteInput"
             type="text"
             placeholder="Digite seu novo lembrete"
             value={novoLembrete}
             onChange={handleInputChange}
       />
      <button className="btn btn-primary w-100">Ok</button>
    </div>
  </form>
</div>
  );
}

export default LembreteEntrada;