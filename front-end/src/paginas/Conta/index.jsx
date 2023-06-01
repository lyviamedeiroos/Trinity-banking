import React, { useEffect, useState } from 'react';
import './style.css';
import Voltar from '../../componentes/Voltar';
import Usuario from  '../../componentes/Usuario';
import MenuLateral from '../../componentes/MenuLateral';
import Ocultar from '../../componentes/Ocultar';
import Tarifa from '../../componentes/Tarifa';
import Divisao from '../../componentes/Divisao';

function Conta (){
  const [usuario, setUsuario]=useState("");
  useEffect(()=>{
    setUsuario(window.localStorage.getItem('usuario'))
  })
  return(
    <div className='pag-conta'>
        <MenuLateral/>
      <div className='corpo-pag-conta'> 
         <div className='cabecalho-pagina-principal'>
          <div id='usuario'>
        <Usuario nome={'Andreza'}/>
          
        <Divisao/>
            <Ocultar/>
            <Tarifa/>
     
         </div>

           
     
    
     
      
    </div>
    </div>
    </div>
  );
}

export default Conta;