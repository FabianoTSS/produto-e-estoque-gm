import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../../services/api';

interface IProduct{
  id: number;
  name: string;
  photo: string;
  description: string;
  price: number;
}

const ShowProducts: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]> ([]);
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
          { data.map( prod => (
            <div key={ prod.id }>
              { prod.name }
            </div>
          ))}
        </section>
    </Container>
  );
}

export default ShowProducts;
