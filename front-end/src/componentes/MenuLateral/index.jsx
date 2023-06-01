import React,{useState,useEffect} from 'react';
import './style.css';
import Logo from '../../imagens/logo-2.png';
import Pix from  '../../imagens/pix.png';
import Cartao from '../../imagens/cartao.png';
import Fatura from '../../imagens/fatura.png';
import Config from '../../imagens/config.png';
import Extrato from '../Extrato';
import {Link} from 'react-router-dom';
function MenuLateral(){
  const[fatura,setfatura]=useState(false);

  function expandir(){
     if(visivel){
       setVisivel(False);
     }
     else{
       setVisivel(True);
     }

    
   }
  
  return(
    <div className='menu-lateral'>
      <div className='sup'>
          <img id='logo' src={Logo}/>
        <button id='btPix'>
          <img id='pix' src={Pix}/>
        </button>
        <button id='btCartao'>
          <img id='cartao' src={Cartao}/>
        </button>
        <button id='btFatura'>
          <img id='fatura' src={Fatura} onClick={()=>setfatura(!fatura)}/>
        </button>
      </div>

      <div className='inf'>
        <Link to={'/configuraçao'}>
        <button id='btConfig'>
          <img id='config'src={Config}/>
        </button>
      </Link>
      </div>
            {fatura &&
        <Extrato/>
      }
    </div>
  );
}
export default MenuLateral;