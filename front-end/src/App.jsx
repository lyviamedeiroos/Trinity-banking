import './App.css'
// import Cabecalho from './componentes/Cabecalho';
import Voltar from './componentes/Voltar';
import Extrato from './componentes/Extrato';
import Ocultar from './componentes/Ocultar';
import Login from './paginas/Login';
import MenuLateral from './componentes/MenuLateral';
import CadastroConta from './componentes/CadastroConta';
import CadastroConfig from './componentes/CadastroConfig';
import Configuracoes from './paginas/Configuracoes';
import Principal from './componentes/Principal';
import Conteudo from './componentes/Conteudo';
import Home from './paginas/Home';
import Usuario from './componentes/Usuario';
import Tarifa from './componentes/Tarifa';
import Divisao from './componentes/Divisao';
import Conta from './paginas/Conta';
import SobreNos from './paginas/SobreNos';
import Sobre from './componentes/Sobre';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route exact={true} path="/" element={<Home/>}/>
      <Route exact={true} path="/login" element={<Login/>}/>
      <Route exact={true} path="/cadastro" element={<CadastroConta/>}/>
      <Route exact={true} path="/conta" element={<Conta/>}/>
       <Route exact={true} path="/extrato" element={<Extrato/>}/>
      <Route exact={true} path="/configuraçao" element={<CadastroConfig/>}/>
      <Route exact={true} path="/sobrenos" element={<SobreNos/>}/>
    </Routes>
  
  </BrowserRouter>






    
  );
}
export default App;
