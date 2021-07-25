import React from 'react';
import { Container } from './style';
import ShowProducts from '../../components/Products/ShowProducts';
import Navbar from '../../components/Navbar'


const Home: React.FC = () => {

  return (
    <Container>
      <Navbar />
      <ShowProducts />
    </Container>
  );
}

export default Home;
