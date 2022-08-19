import ToDoList from "./ToDoList"

function Worker({id, firstname, lastname, position, avatar, tasks}) {

  const cards_style = {
    width: '200px',
    border: '1px solid black',
    padding: '10px',
    margin: '10px',
    backgroundColor: 'lightpink'
  }

  const avatar_style = {
    width: '200px',
    height: '200px',
    objectFit: 'cover'
  }

  const avatar_url = avatar ?? '../../media/no_face.png'

  return (
    <div style={cards_style}>
      <img src={avatar_url} alt='avatar' style={avatar_style} />
      <p>ID: {id}</p>
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
      <p>Position: {position}</p>
      <ToDoList todos={tasks} />
    </div>
  )
}

export default Worker;
