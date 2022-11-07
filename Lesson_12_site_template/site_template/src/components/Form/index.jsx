import React from 'react'
import s from './index.module.css'
import { useForm } from 'react-hook-form'

export default function Form() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const submit = (data) => console.log(data);

  const firstnameRegister = register('firstname', {
    required: '* Введите имя'
  });

  const lastnameRegister = register('lastname', {
    required: '* Введите фамилию'
  });

  const textMessageRegister = register('text_message', {
    required: '* Введите сообщение'
  });

  return (
    <form className={s.contacts_form} onSubmit={handleSubmit(submit)}>
      <div className={s.contacts_names}>
        <label>
          <p>Имя</p>
          <input 
            type='text' 
            name='firstname' 
            placeholder='Имя' 
            {...firstnameRegister}
          />
        </label>

        <label>
          <p>Фамилия</p>
          <input 
            type='text' 
            name='lastname' 
            placeholder='Фамилия' 
            {...lastnameRegister}
          />
        </label>
      </div>

      <label>
        <p>Сообщение</p>
        <textarea 
          type='text' 
          name='text_message' 
          placeholder='Ваше сообщение' 
          {...textMessageRegister}
        />
      </label>

      <button>Отправить сообщение</button>

      <div>
        { errors?.firstname && <p>{errors?.firstname.message}</p> }
      </div>

      <div>
        { errors?.lastname && <p>{errors?.lastname.message}</p> }
      </div>

      <div>
        { errors?.text_message && <p>{errors?.text_message.message}</p> }
      </div>

    </form>
  )
}
