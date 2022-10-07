import React from 'react'
import { useContext } from 'react'
import Select from 'react-select'
import { Context } from '../../context'
import s from './index.module.css'

export default function AddUserForm() {

  const { teams } = useContext(Context);

  const submit = event => {
    event.preventDefault();
  }

  return (
    <div className={s.user_form_container}>
      <p>Add user</p>
      <form className={s.user_form} onSubmit={submit}>
        <input type='text' placeholder='Name' name='name' />
        <Select options={teams} />
        <button>Add</button>
      </form>
    </div>
  )
}
