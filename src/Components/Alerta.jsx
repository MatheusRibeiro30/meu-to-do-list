import React from 'react';

function Alerta({ tipo, mensagem }) {
  const estilo = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: tipo === 'sucesso' ? 'green' : 'red'
  };

  return <div style={estilo}>{mensagem}</div>;
}

export default Alerta;