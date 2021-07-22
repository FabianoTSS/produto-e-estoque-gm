import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../services/api';

const Home: React.FC = () => {
  const [ data, setData ] = useState ([]);
  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])
  return (
    <Container>
        <section>
          <div>
            
          </div>
        </section>
    </Container>
  );
}

export default Home;
