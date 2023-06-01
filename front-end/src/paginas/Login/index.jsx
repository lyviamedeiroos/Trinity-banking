import React, { useEffect, useState } from 'react';
import './style.css';
import Voltar from '../../componentes/Voltar';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../servicos/api';
function Login() {
  const baseUrl = api.baseUrl;
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");
  const [tokenAcesso, setTokenAcesso] = useState("");
  const [tipoToken, setTipoToken] = useState("");
  const [usuarioId, setUsuarioId] = useState("");
  const navegue = useNavigate();
  function envia(){
    let corpo = new FormData();
    corpo.append('username', email);
    corpo.append('password', senha);

    const requisicao ={
      method: 'POST',
      body:corpo
    }
    fetch(baseUrl + 'login', requisicao)
    .then((resposta)=>{
      if(resposta.ok){
        return resposta.json()
      }
      throw resposta
    }).then((dados)=>{
        setUsuario(dados.nome)
        window.localStorage.setItem('usuario', dados.nome)
        setTokenAcesso(dados.access_token)
        setTipoToken(dados.token_type)
        setUsuarioId(dados.usuario_id)
        navegue('/conta',{'tokenAcesso': dados.acess_token,'tipoToken':dados.token_type})
    })
    .catch(erro=>{
      console.error(erro);
      alert(erro);
    })
    console.log(usuario)
  }
  useEffect(()=>{
    tokenAcesso ? window.localStorage.setItem('tokenAcesso', tokenAcesso)
      :window.localStorage.removeItem('tokenAcesso');

    tipoToken ? window.localStorage.setItem('tipoToken', tipoToken)
      :window.localStorage.removeItem('tipoToken');

    usuarioId ? window.localStorage.setItem('usuarioId', usuarioId)
      :window.localStorage.removeItem('usuarioId');    

    usuario ? window.localStorage.setItem('usuario', usuario)
      :window.localStorage.removeItem('usuario');  
  },[tokenAcesso, tipoToken, usuarioId])
  
  return (
    <div className='tudo'>
      <div className='tela-login'>
        <Voltar />
        <div className='caixa-login'>
          <h2>Acesse sua conta</h2>
          <div className='inserir'>
            <div className='campo-texto'>
              <label for='email'>email</label>
              <input type='email' name='Email' placeholder='Informe seu email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='campo-texto'>
              <label for='senha'>Senha</label>
              <input type='password' name='senha' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
            </div>
            <p>Esqueceu a senha?</p>
            <Link to={'/conta'}>
              <button className='login' onClick={()=>envia()}>Entrar</button>
            </Link>
            <h4>
              Não tem acesso? <span id='cadastro'>Crie uma conta</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;