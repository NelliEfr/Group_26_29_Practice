import React from 'react'
import Button from '../Button'
import logo from './media/buh_one_logo.png'
import s from './style.module.css'

export default function Navbar() {
  return (
    <nav>
      <div className={['wrapper', s.wrapper].join(' ')}>
        <a href='#'>
          <img src={logo} alt='logo' />
        </a>
        <ul className={s.menu}>
          <li>Главная</li>
          <li>Услуги</li>
          <li>Кейсы</li>
          <li>О компании</li>
          <li>Контакты</li>
        </ul>
        <Button type='light_mode'>Связаться</Button>
      </div>
    </nav>
  )
}
