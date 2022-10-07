import React from 'react'
import s from './index.module.css'

export default function AddTeamForm() {
  return (
    <div className={s.team_form_container}>
      <p>Add team</p>
      <form className={s.team_form}>
        <input type='text' placeholder="Team's name" name='title' />
        <button>Add</button>
      </form>
    </div>
  )
}
