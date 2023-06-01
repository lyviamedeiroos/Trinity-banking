import React from 'react';
import './style.css';
import MenuLateral from '../../componentes/MenuLateral';
import CadastroConfig from '../../componentes/CadastroConfig';

function Configuracoes(){
  return(
    <div className='configuracoes'>
      <MenuLateral/>
      <div className='ajuste-cadastro'>
        <CadastroConfig/>
      </div>
      
    </div>
  );
}

export default Configuracoes;