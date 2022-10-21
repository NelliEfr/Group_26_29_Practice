import React from 'react'

export default function LanguageCard({ id, type, ru, en }) {
  return (
    <div>
      {
        type === 'ru' ? ru : en
      }
    </div>
  )
}
