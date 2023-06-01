import React from 'react';
import './style.css';
import Voltar from '../../componentes/Voltar';
import {Link} from 'react-router-dom';
function CadastroConfig(){
  return(
    <div className='tudo-config'>
    <Voltar/>
    <div className='caixa-cadastro'>
      <h2>Configurações</h2>
      <div className='inserir'>
        <h3>Atualize seus dados pessoais</h3>
        <div className='campo-texto'>
          <label>Nome</label>
          <input type='text' name='nome' placeholder='Nome'/>
         </div>
        <div className='campo-texto'>
          <label>E-mail</label>
          <input type='email' name='email' placeholder='E-mail'/>
         </div>
        <div className='campo-texto'>
          <label>CPF</label>
          <input type='number' name='cpf' placeholder='Informe seu CPF'/>
         </div>
         <div className='campo-texto'>
         <label> Data de Nascimento </label>
         <input type='date' nome='RG' placeholder = 'Data de Nascimento'/>
           </div>
        <div className='lado-a-lado'>
          <div className='campo-texto-menor'>
              <label>Cidade</label>
              <input type='text' name='cidade' placeholder='Cidade'/>
          </div>
           <div className='campo-texto-menor'>
              <label>Estado</label>
              <input type='text' name='estado' placeholder='Estado'/>
          </div>
        </div>
        <div className='lado-a-lado'>
          <div className='campo-texto-menor'>
              <label>Senha</label>
              <input type='password' name='senha' placeholder='Senha'/>
          </div>
           <div className='campo-texto-menor'>
              <label>Repetir Senha</label>
              <input type='password' name='rSenha' placeholder='Confirme a senha'/>
          </div>
          </div>
      </div>
       <Link to={'/conta'} >
      <button id='btFnCadastro'>
        Atualizar 
      </button>
       </Link>  
    </div>
      </div>
  );
}

export default CadastroConfig;