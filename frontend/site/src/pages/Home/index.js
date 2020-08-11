import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';

function Home() {
  return (
    <div className="App-header">
    <div className="App">
    
     <h1><Link to="/consultar">Cadastrar</Link></h1> 
    <h1><Link to="/cadastrar">Cadastrar</Link></h1>
    </div>
    </div>
  );
}

export default Home;
