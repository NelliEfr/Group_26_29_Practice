import React, { useContext } from 'react'
import { Context } from '../../context'
import Product from '../Product';
import s from './index.module.css'

export default function ProductsContainer() {

  const { products } = useContext(Context);

  return (
    <div className={s.products_container}>
      {
        products.map(el => <Product key={el.id} {...el} />)
      }
    </div>
  )
}
