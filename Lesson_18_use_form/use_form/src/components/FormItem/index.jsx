import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './index.module.css'

export default function FormItem() {
  return (
    <form className={s.form_item}>
      <p className={s.form_title}>Registration</p>
      <FormInput
        name='email'
        type='email'
        placeholder='Email' 
      />

      <FormInput
        name='password'
        type='password'
        placeholder='Password' 
      />

      <p className={s.info_text}>By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.</p>

      <FormButton color='yellow'>Registration</FormButton>
      <FormButton color='white'>Login</FormButton>
    </form>
  )
}
