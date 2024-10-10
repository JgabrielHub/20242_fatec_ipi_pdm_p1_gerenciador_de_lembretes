import React from 'react';

function LembreteLista() {
  const lembretes = [
    'Preparar aula de programação',
    'Fazer feira',
    'Preparar marmitas',
  ];

  return (
    <div className='card'>
        <div className='card-body'>

    <ul className='list-group'>
      {lembretes.map((lembrete, index) => (
          <li className='list-group-item' key={index}>{lembrete}</li>
        ))}
    </ul>
    </div>
    </div>
  );
}

export default LembreteLista;