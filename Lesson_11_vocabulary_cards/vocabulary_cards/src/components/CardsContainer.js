import React from 'react'
import Card from './Card'

export default function CardsContainer({cards}) {
  const cardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: '300px',
    gap: '10px',
    margin: '50px 0'
  }

  return (
    <div style={cardsContainerStyle}>
      {
        cards.map(card => <Card key={card.id} {...card}/>)
      }
    </div>
  )
}
