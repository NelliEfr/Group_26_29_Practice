import React from 'react'

export default function LanguageCard({ id, type, ru, en, change }) {
  return (
    <div onClick={() => change(id)}>
      {
        type === 'ru' ? ru : en
      }
    </div>
  )
}
