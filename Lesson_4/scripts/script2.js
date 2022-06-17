// 1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль

const users = [
  {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500
  },

  {
    first_name: 'Olga',
    last_name: 'Petrova',
    age: 12,
    salary: 250
  },

  {
    first_name: 'Irina',
    last_name: 'Alexandrova',
    age: 46,
    salary: 1500
  },

  {
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 30,
    salary: 760
  }
]

// users.forEach(function(elem){
//   // console.log(elem.first_name);
//   console.log(`Имя пользователя: ${elem.first_name} ${elem.last_name}. Возраст пользователя: ${elem.age}. Зарплата: ${elem.salary}`);
// });


// 2. Сформируйте массив, состоящий только из имен и фамилий пользователей. Выведите результат в консоль.

// ['Ivan Ivanov', 'Olga Petrova', 'Irina Alexandrova', 'Denis Sokolov']

// const people = users.map(function(elem){
//   return `${elem.first_name} ${elem.last_name}`
// })

// console.log(people);


//3. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.

// ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']

// const people = users.filter(function(elem){
//   return elem.age >= 18;
// })


const people_adults = users.filter(function({age}){
    return age >= 18
  }).map(function({first_name, last_name, age, salary}){
    return `${first_name} ${last_name} (${age}): ${salary}`
  })

console.log(people_adults);






