import React from 'react';

function Cards() {
  const dados = [
    { id: 1, titulo: 'Aluno 1', descricao: 'Curso: Sistemas de Informação' },
    { id: 2, titulo: 'Aluno 2', descricao: 'Curso: Engenharia da Computação' },
    { id: 3, titulo: 'Aluno 3', descricao: 'Curso: Ciência da Computação' }
  ];

  const estiloCard = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '2px 2px 6px rgba(0,0,0,0.1)'
  };

  return (
    <div>
      <h2>Cards de Alunos</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {dados.map((item) => (
          <div key={item.id} style={estiloCard}>
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;