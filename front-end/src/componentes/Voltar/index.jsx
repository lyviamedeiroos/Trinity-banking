import React from 'react';
import './style.css';
import Logo from '../../imagens/logo-2.png';
import {Link} from 'react-router-dom';
function Voltar(){
  return(
    <div className='cabecalho'>
      <img src={Logo} id='logo'/>
      <div className='voltar-inicio'>
          <Link to={'/'}>
        <p> Voltar para o início </p>
          </Link>
      </div>
    </div>
  );
}


export default Voltar;