import React from 'react';
import './style.css';
import Logo from '../../imagens/logo-2.png';
import {Link} from 'react-router-dom';
function Principal() {
  return (
    <div className='principal-componente'>
      <img src={Logo} id='logo' />

      <div className='botoes'>
        <Link to={'/sobrenos'}>
        <button id='btsomos'>
          Sobre nós
        </button>
        </Link>
      
        <Link to={'/login'}>
        <button id='btacessar'>
          Acessar
        </button>
        </Link>
        <Link to={'/cadastro'}>
        <button id='btabrirconta'>
          Abrir conta
        </button>
        </Link>
      </div>

    </div>

  );
}


export default Principal;