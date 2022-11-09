import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { addProduct } from '../../requests/products_req'
import { Context } from '../../context'

export default function AddProductForm() {

  const { createNewProduct } = useContext(Context);

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  })

  const submit = data => {
    addProduct(data, createNewProduct)
  }

  const titleRegister = register('title', { required: '* Required field (title)' });
  const descrRegister = register('description', { required: '* Required field (description)' });
  const priceRegister = register('price', { required: '* Required field (price)' });

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type='text' name='title' placeholder='Title' {...titleRegister} />
      <input type='text' name='description' placeholder='Description' {...descrRegister} />
      <input type='text' name='price' placeholder='Price' {...priceRegister} />
      <button>Add product</button>
      
      <div>
        { errors?.title && <p>{ errors?.title?.message }</p> }
      </div>

      <div>
        { errors?.description && <p>{ errors?.description?.message }</p> }
      </div>

      <div>
        { errors?.price && <p>{ errors?.price?.message }</p> }
      </div>

    </form>
  )
}
