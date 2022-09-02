import React from 'react'
import s from './style.module.css'

export default function ServiceCard({title, img}) {
  const cardStyle = {
    backgroundImage: `url(${img})`
  }

  return (
    <div className={s.card_item} style={cardStyle}>
      {title}
    </div>
  )
}
