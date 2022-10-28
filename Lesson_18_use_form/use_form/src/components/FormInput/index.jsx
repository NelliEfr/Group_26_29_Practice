import React from 'react'
import s from './index.module.css'

const FormInput = (props) => {
  return (
    <input  {...props} className={s.form_input} />
  )
}

export default FormInput
