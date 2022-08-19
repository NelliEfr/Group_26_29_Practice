import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList({todos}) {
  return (
    <div>
      Tasks:
      {
        todos 
        ?
        todos.map(todo => <ToDoItem key={todo.id} {...todo}/>) 
        : 'No tasks'
      }
    </div>
  )
}
