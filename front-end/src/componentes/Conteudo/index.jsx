import React from 'react';
import './style.css';
import Nos from '../../imagens/nos.png';
import {Link} from 'react-router-dom';
function Conteudo() {
  return (
    <div className='mark'>
      <div className='conteudo'>

        <div className='terceira-coluna'>
          <div className='roda-sub'>
            <h3>Ter uma conta no Trinity Bank não custa nada. A conta é digital e sem tarifa de manutenção</h3>
          </div>

        </div>

        <div className='primeira-coluna'>
          <h2>Para os que acreditam no impossível, nós somos a Trinity Bank
            </h2>
          <p>Somos especialistas no que fazemos.</p>
          <p>Auxiliamos a melhor tomada de decisões. </p>
        </div>




        <div className='segunda-coluna'>
          <img src={Nos} id='muie' />
        </div>



      </div>
    </div>


  );

}

export default Conteudo;