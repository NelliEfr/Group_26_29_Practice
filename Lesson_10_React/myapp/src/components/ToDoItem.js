import React from 'react'

export default function ToDoItem({title, done}) {

  const done_tasks = {
    color: 'green',
    textDecoration: 'line-through'
  }

  return (
    <div style={done ? done_tasks: {}}>
      <p>- {title}</p>
    </div>
  )
}
