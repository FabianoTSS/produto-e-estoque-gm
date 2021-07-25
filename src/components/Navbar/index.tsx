import React from 'react';
//import Home from './pages/Home';

import Logotipo from '../../imagens/logotipo.png';

const Navbar: React.FC = () => {
  return(
      <header>
        <img src={Logotipo} alt="FABIANUS LOGOTIPO"/>
        <nav>
            <a>Homepage</a>
            <a>Produtos</a>
            <a>Cadastre-se</a>
        </nav>
      </header>
  );
}

export default Navbar;
