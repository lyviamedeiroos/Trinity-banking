import React,{useState,useEffect} from 'react';
import './style.css';
import Olho from '../../imagens/olho.png';

function Ocultar(){
     const[visivel, setVisivel]=useState(false);
  const[textoExtensao, setTextoExtensao]=useState('R$ 100,00');
  
 function expandir(){
     if(visivel){
       setVisivel(false);
       setTextoExtensao('R$ 500,00'); 
     }
     else{
       setVisivel(true);
       setTextoExtensao('*****');    
     }
   }

  return(
    <div className='ocultacao'>
      <img src={Olho} id='olho'onClick={()=>expandir()}/>
    
     <p>Saldo</p>
     
      <div className='ocultar'>
          <h1>{visivel && <span> R$</span>}
          <span id='texto-expandir' onClick={()=>expandir()}> {textoExtensao} </span>   
            </h1>
      </div>
        </div>
      
   
      
  );
}

export default Ocultar;