import React from 'react'
import ProductSlider from '../ProductSlider';
import s from './index.module.css'

export default function Product({ title, description, price, images }) {

  return (
    <div className={s.product_card}>
      <img src={images[0]} alt='product_photo' />
      {/* <ProductSlider /> */}
      <p>Title: { title }</p>
      <p>Description: { description }</p>
      <p>Price: { price }$</p>
    </div>
  )
}
