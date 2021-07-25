import React from 'react';
//import Home from './pages/Home';
import { Container }  from './style';
import Logotipo from '../../imagens/logotipo.png';

const Navbar: React.FC = () => {
  return(
    <Container>
      <header>
        <img src={Logotipo} alt="FABIANUS LOGOTIPO"/>
        <nav>
            <a href="/">Homepage</a>
            <a href="ProductRegister">Produtos</a>
            <a href="RegisterUser">Cadastre-se</a>
        </nav>
      </header>
    </Container>
  );
}

export default Navbar;
