import React from 'react';
import { Container } from './style';
import ShowProducts from '../../components/Products/ShowProducts';


const Home: React.FC = () => {

  return (
    <Container>
        <section>
          <ShowProducts />
        </section>
    </Container>
  );
}

export default Home;
