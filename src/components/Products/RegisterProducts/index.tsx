import React from "react";

const ProductRegister: React.FC = () => {
  return( 
    <>
    <h1>Cadastro de Produto</h1>
    <form id="cadastro">
        <input type="text" placeholder="Nome do Produto" id="name" />
        <input type="text" placeholder="Preço" id="price" />
        <input type="text" placeholder="Link da Foto" id="photo" />
        <input type="text" placeholder="Descrição" id="description" />
        <input type="submit" placeholder="Cadastrar" />
    </form>
    <a href="/">Home Page</a>
    </>
    );
}

export default ProductRegister;
