import React from 'react';

function LembreteLista({ lembretes }) {
  if (lembretes.length === 0) {
    return <p className="text-muted">Nenhum lembrete adicionado ainda.</p>;
  }

  return (
    <div className='card'>
    <ul className='list-group list-group-flush'>
      {lembretes.map((lembrete, index) => (
          <li className='list-group-item ' key={index}>{lembrete}</li>
        ))}
    </ul>
    </div>
  );
}

export default LembreteLista;