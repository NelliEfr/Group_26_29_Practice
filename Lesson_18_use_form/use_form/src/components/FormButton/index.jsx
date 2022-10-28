import React from 'react'
import s from './index.module.css'

export default function FormButton({ children, color }) {
  return (
    <button className={[s.form_btn, s[color]].join(' ')}>
      {children}
    </button>
  )
}
