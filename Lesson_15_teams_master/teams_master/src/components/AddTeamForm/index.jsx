import React, { useContext } from 'react'
import { Context } from '../../context'
import s from './index.module.css'


export default function AddTeamForm({ add_team }) {

  const { addTeam } = useContext(Context);

  const submit = event => {
    event.preventDefault();
    const { title } = event.target;
    addTeam(title.value);
    console.log(title.value)
    title.value = '';
  }

  return (
    <div className={s.team_form_container}>
      <p>Add team</p>
      <form className={s.team_form} onSubmit={submit}>
        <input type='text' placeholder="Team's name" name='title' />
        <button>Add</button>
      </form>
    </div>
  )
}
