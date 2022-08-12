function User({id, firstname, lastname, avatar}) {
  return (
    <div>
      <p>ID: {id}</p>
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
      <img src={avatar} alt='alt'></img>
    </div>
  )
}

export default User; // экспортируем компонент => получаем возможность пользоваться компонентов в других файлах проекта
