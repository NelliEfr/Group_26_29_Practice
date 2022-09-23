import React from 'react'
import s from './style.module.css'

export default function Footer() {
  return (
    <footer className={['wrapper', s.footer].join(' ')}>
      <p>2019 (с) Все права защищены. БухОне.ру</p>
      <p>Разработано: BuhOne</p>
    </footer>
  )
}
