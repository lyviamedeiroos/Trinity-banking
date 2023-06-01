import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function Extrato(){
  return(
    <div className='extrato'>
      <div className='money'>
        <p> - 100,00 </p>
        <p> + 500,00 </p>
        <p> - 200,00 </p>
        <p> + 300,00</p>
      </div>
    </div> 
        
  );
}

export default Extrato;