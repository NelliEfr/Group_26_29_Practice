import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './index.module.css'
import { useForm } from 'react-hook-form'

export default function FormItem({ title, button, infoText, formType, infoTextAdditional }) {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const submit = (data) => {
    console.log(data)
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const emailRegister = register('email', {
    required: 'Requered field',
    pattern: {
      value: emailRegex,
      message: "Not valid email format"
    }
  });

  const passwordRegister = register('password', {
    required: 'Requered field',
    pattern: {
      value: passwordRegex,
      message: "Your password should contain minimum eight characters, at least one letter, one number and one special character"
    }
  });

  return (
    <form className={s.form_item} onSubmit={handleSubmit(submit)}>
      <p className={s.form_title}>{ title }</p>

      <p className={s.info_text}>{ infoTextAdditional }</p>
      
      <FormInput
        {...emailRegister}
        id='email'
        name='email'
        type='email'
        placeholder='Email' 
      />

      <div>
        { errors?.email && <p>{ errors?.email?.message }</p> }
      </div>

      {
        ['registration', 'login'].includes(formType)
        ? <FormInput
            {...passwordRegister}
            name='password'
            type='password'
            placeholder='Password' 
          />
        : ''
      }

      <div>
        { errors?.password && <p>{ errors?.password?.message }</p> }
      </div>

      <p className={s.info_text}>{ infoText }</p>

      <FormButton color='yellow'>{ button.submit }</FormButton>

      {
        ['registration', 'login'].includes(formType)
        ?  <FormButton color='white'>{ button.redirect }</FormButton>
        : ''
      }
     
    </form>
  )
}
