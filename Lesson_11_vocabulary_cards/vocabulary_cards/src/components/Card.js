import React from 'react'

export default function Card({id, eng, rus, lang}) {
  const text = (lang === 'rus') ? rus : eng;

  const cardStyle = {
    backgroundColor: lang === 'rus' ? 'white' : '#2980b9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    borderRadius: '10px',
    color: lang === 'rus' ? '#2980b9' : 'white',
    border: lang === 'rus' ? '3px solid #2980b9' : 'none'
  }

  return (
    <div style={cardStyle}>
      {text}
    </div>
  )
}
