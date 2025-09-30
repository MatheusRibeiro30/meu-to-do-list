import React from 'react';

function Acoes() {
  const mostrarMensagem = () => {
    alert('Você clicou em Mostrar Mensagem!');
  };

  const limparTela = () => {
    alert('A tela foi limpa (simulação).');
  };

  const atualizarDados = () => {
    alert('Dados atualizados com sucesso!');
  };

  return (
    <div>
      <h2>Ações</h2>
      <button className='acoes-button' onClick={mostrarMensagem}>Mostrar Mensagem</button>
      <button className='acoes-button' onClick={limparTela}>Limpar Tela</button>
      <button className='acoes-button' onClick={atualizarDados}>Atualizar Dados</button>
    </div>
  );
}

export default Acoes;