import React from 'react';
import './style.css';
import Conteudo from '../../componentes/Conteudo';
import Principal from '../../componentes/Principal';

function Home() {
  return (
    <div className='pagina-principal'>
      <div className=''>
        <Principal />
        <Conteudo />
      </div>
    </div>
  );

}

export default Home;