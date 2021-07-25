import React from "react";

const ProductRegister: React.FC = () => {
  return( 
    <>
    <h1>Cadastro de Produto</h1>
    <form id="cadastro">
        <input type="text" placeholder="Produto" id="product" />
        <input type="text" placeholder="Descrição" id="description" />
        <input type="submit" placeholder="Cadastrar" />
    </form>
    <a href="/">Home Page</a>
    </>
    );
}

export default ProductRegister;
