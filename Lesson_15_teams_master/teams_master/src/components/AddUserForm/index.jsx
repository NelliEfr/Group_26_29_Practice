import React from 'react'
import Select from 'react-select'
import s from './index.module.css'

export default function AddUserForm() {
  return (
    <div className={s.user_form_container}>
      <p>Add user</p>
      <form className={s.user_form}>
        <input type='text' placeholder='Name' name='name' />
        <Select />
        <button>Add</button>
      </form>
    </div>
  )
}
