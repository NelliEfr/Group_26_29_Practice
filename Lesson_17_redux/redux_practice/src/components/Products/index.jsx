import React from 'react'
import { addProduct } from '../../store/reducer/productReducer';
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../ProductItem'

export default function Products() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.products);

  const submit = (event) => {
    event.preventDefault();
    const { title, price } = event.target;
    dispatch(addProduct({
      title: title.value,
      price: price.value
    }));
    title.value = '';
    price.value = '';
  }

  return (
    <div>

      <form onSubmit={submit}>
        <input type='text' name='title' placeholder='Title' />
        <input type='text' name='price' placeholder='Price' />
        <button>Add</button>
      </form>

      <div>
        {
          state.map(el => <ProductItem key={el.id} {...el} />)
        }
      </div>

    </div>
  )
}
