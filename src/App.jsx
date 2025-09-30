import React from 'react';
import Acoes from './Components/Ação';
import Alerta from './Components/Alerta';
import BotaoClique from './Components/Botton';
import Cards from './Components/cards';
import Footer from './Components/footer';
import Header from './Components/header';
import ListaAlunos from './Components/ListaAlunos';
import './App.css';



function App() {
  const primeiroNome = 'Lucas Ribeiro';

   return (
    <>
      <h1>Bem-vindo, {primeiroNome}!</h1>

      <Header />
      <Footer />
      <ListaAlunos />
      <BotaoClique />
      <Alerta tipo="sucesso" mensagem="Operação realizada com sucesso!" />
      <Alerta tipo="erro" mensagem="Ocorreu um erro ao processar!" />
      <Acoes />
      <Cards />
    </>
  );
}

export default App;