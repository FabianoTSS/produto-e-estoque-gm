import React from 'react';
import { Container } from './style';
import Navbar from '../../components/Navbar'
import ShowProducts from '../../components/Products/ShowProducts';



const Home: React.FC = () => {

  return (
    <Container>
      <Navbar />
      <ShowProducts />
    </Container>
  );
}

export default Home;
