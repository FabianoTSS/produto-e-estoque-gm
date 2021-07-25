import React from "react";
/*
*/

const UserRegister: React.FC = () => {
  return( 
      <>
    <h1>Venha conhecer nossos produtos.</h1>
    <h2>Cadastre e mantenha-se atualizado.</h2>
    <form id="cadastro">
        <input type="text" placeholder="NOME" id="nome" />
        <input type="text" placeholder="E-MAIL" id="email" />
        <input type="submit" placeholder="CADASTRAR" />
    </form>
    </>
    );
}

export default UserRegister;
