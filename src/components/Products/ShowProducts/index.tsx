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
        <>
        <div className="main-products">
            { data.map( prod => (
              <div className="single-product" key={ prod.id }>
                <img src={ prod.photo }/>
                <h1>{ prod.name }</h1>
                <p>{ prod.description }</p>
                <p>{ prod.price }</p>
              </div>
            ))}
          </div>
        </>
    </Container>
  );
}

export default ShowProducts;
