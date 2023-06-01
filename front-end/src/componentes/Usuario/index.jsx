import React from 'react';
import './style.css';
import Logo from '../../imagens/logo-2.png';
import {Link} from 'react-router-dom';
function Usuario({nome}){
  return(
    <div className="usuario">
        <img src={Logo} id='logo'/>
        <h1>Olá, {nome} </h1>
      
 <Link to={'/'}>
      <button id='btsair'>
           <p>Voltar para o início</p> 
      </button>
        </Link>
 
    </div>
  );
}
export default Usuario;