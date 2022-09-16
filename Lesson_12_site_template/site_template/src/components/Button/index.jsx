import React from 'react'
import s from './style.module.css'

export default function Button({children, type}) {
  return (
    <button className={[s.btn, s[type]].join(' ')}>
      {children}
    </button>
  )
}
