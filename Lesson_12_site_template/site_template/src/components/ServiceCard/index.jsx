import React from 'react'
import Button from '../Button'
import s from './style.module.css'

export default function ServiceCard({title, img}) {
  const cardStyle = {
    backgroundImage: `url(${img})`
  }

  return (
    <div className={s.card_item} style={cardStyle}>
      {title}
      <Button type='dark_mode'>Подробнее</Button>
    </div>
  )
}
