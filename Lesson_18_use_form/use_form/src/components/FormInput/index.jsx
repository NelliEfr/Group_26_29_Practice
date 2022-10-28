import React, { forwardRef } from 'react'
import s from './index.module.css'

const FormInput = forwardRef((props, ref) => {
  return (
    <input ref={ref} {...props} className={s.form_input} />
  )
});

export default FormInput
