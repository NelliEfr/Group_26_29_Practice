import React from 'react'

export default function Triggers({change_to_eng, change_to_rus}) {
  const btnStyle = {
    cursor: 'pointer',
    padding: '10px',
    margin: '5px',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '7px',
    border: '1px solid green',
    width: '70px'
  }

  return (
    <div>
      <button style={btnStyle} onClick={change_to_eng}>Eng</button>
      <button style={btnStyle} onClick={change_to_rus}>Rus</button>
    </div>
  )
}
