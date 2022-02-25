import React from 'react';
import Cadastro from './Form';

const CriarContato =() => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        height: '100vh',
        margin: '10px'
      }}
    >
      <Cadastro/>
    </div>
    
  );
};
  
export default CriarContato;