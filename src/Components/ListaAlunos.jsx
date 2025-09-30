import React from 'react';

function ListaAlunos() {
  const alunos = [
    'Lucas Ribeiro',
    'Carlos Eduardo',
    'Fernanda Lima',
    'João Pedro',
    'Mariana Silva'
  ];

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>{aluno}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaAlunos;