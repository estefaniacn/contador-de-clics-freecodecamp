import React from 'react';
import '../hojas-de-estilo/Contador.css';

function Contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  );   
}

export default Contador;
