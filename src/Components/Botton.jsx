import React, { useState } from 'react';

function BotaoClique() {
  const [mensagem, setMensagem] = useState('');

  const handleClick = () => {
    setMensagem('Você clicou no botão!');
  };

  return (
    <div>
      <button className='botao-clique' onClick={handleClick}>Você clicou</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default BotaoClique