import React from 'react'
import s from './style.module.css'

export default function AboutUsCard({value, title, link_title, link_url}) {
  return (
    <div className={s.card_item}>
      <p className={s.value}>{value}</p>
      <p className={s.title}>{title}</p>
      <a href={link_url}>{link_title}</a>
    </div>
  )
}
