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
                <div className="sp-img">
                  <img src={ prod.photo }/>
                </div>
                <div>
                  <h1>{ prod.name }</h1>
                </div>
                <div>
                  <p>{ prod.description }</p>
                </div>
                <div>
                  <p>{ prod.price }</p>
                </div>
              </div>
            ))}
          </div>
        </>
    </Container>
  );
}

export default ShowProducts;
