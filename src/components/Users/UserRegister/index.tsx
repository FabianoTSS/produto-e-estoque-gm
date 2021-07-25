import React from "react";
/*
*/

const UserRegister: React.FC = () => {
  return( 
    <>
    <h1>Cadastro</h1>
    <form id="cadastro">
        <input type="text" placeholder="Nome" id="nome" />
        <input type="text" placeholder="E-Mail" id="email" />
        <input type="password" placeholder="Minha Senha" id="password" />
        <input type="text" placeholder="E-Mail" id="email" />
        <input type="submit" placeholder="Cadastrar" />
    </form>
    <a href="/">Home Page</a>
    </>
    );
}

export default UserRegister;
