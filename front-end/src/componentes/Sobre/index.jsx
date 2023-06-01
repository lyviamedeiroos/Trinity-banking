import React from 'react';
import './style.css';
import Imagem from '../../imagens/sobre-img.jpg';
import Listra from '../../imagens/listra.png';
function Sobre (){
  return(
    <div className='container'>
      <div className='sobre'>
       <h1>Sobre a Trinity</h1>
        <p>A Trinity nasceu em 2023 com a missão de lutar contra a complexidade para empoderar pessoas diariamente, reinventando os serviços financeiros.</p>
        <p>Somos uma das maiores plataformas de serviços financeiros digitais no mundo, servindo mais de 75 milhões de clientes no Brasil, México e Colômbia. Em nossa posição de liderança, usamos tecnologia Dock e práticas inovadoras para criar novas soluções e experiências financeiras. Tudo que entregamos é simples, intuitivo, conveniente, de baixo custo, empoderador e humano. Guiando-nos sempre por nossa missão, estamos contribuindo para aumentar o acesso financeiro na América Latina.</p>
      </div>
      <div className='imagem'>
        <img src={Imagem} id='imagem'/>
      </div>
      <div className='linha'>
       <h3>Nossos Pilares</h3>
        <img src={Listra} id='listra'/>
        <div className='cliente'>
          <h3>Experiência do Cliente</h3>
          <p>Nós tornamos a vida de clientes mais fácil com uma experiência humana e personalizada.</p>
        </div>
        <div className='ciencia'>
          <h3>Ciência de Dados</h3>
          <p>Testamos nossas ideias e aprendemos rápido, usando modelos e dados para basear nosso processo de tomada de decisão.</p>
        </div>
        <div className='tecnologia'>
          <h3>Tecnologia</h3>
          <p>Utilizamos da tecnologia Dock para sempre inovar, priorizando a segurança de nossos clientes.</p>
        </div>
        <div className='design'>
          <h3>Design</h3>
          <p>Desafiamos a complexidade nos serviços financeiros para sempre entregar uma experiência simples, transparente e humana.</p>
        </div>
      </div>
    </div>
  

    
  );
}

export default Sobre;