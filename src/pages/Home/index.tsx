import React from 'react';
import { Container } from './style';
import Navbar from '../../components/Navbar'
import ShowProducts from '../../components/Products/ShowProducts';
import Footer from '../../components/Footer';


const Home: React.FC = () => {

  return (
    <Container>
      <Navbar />
      <ShowProducts />
      <Footer />
    </Container>
  );
}

export default Home;
