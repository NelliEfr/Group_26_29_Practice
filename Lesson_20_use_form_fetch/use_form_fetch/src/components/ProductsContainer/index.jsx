import React, { useContext } from 'react'
import { Context } from '../../context'
import Product from '../Product';

export default function ProductsContainer() {

  const { products } = useContext(Context);

  return (
    <div>
      {
        products.map(el => <Product key={el.id} {...el} />)
      }
    </div>
  )
}
