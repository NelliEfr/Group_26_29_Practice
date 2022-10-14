import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'
import { addProduct } from '../../requests/product'

export default function AddProductForm() {

  const { createProduct } = useContext(Context);

  const submit = event => {
    event.preventDefault();
    const { title, description, price } = event.target;
    addProduct({
      id: Date.now(),
      title: title.value,
      description: description.value,
      price: price.value,
      images: ['https://reqres.in/img/faces/1-image.jpg']
    }, createProduct);
    title.value = '';
    description.value = '';
    price.value = '';
  }

  return (
    <form className={s.add_product_form} onSubmit={submit}>
      <input type='text' placeholder='Title' name='title' />
      <input type='text' placeholder='Description' name='description' />
      <input type='text' placeholder='Price' name='price' />
      <button>Add</button>
    </form>
  )
}
