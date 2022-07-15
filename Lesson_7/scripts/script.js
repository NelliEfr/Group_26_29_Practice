// const promise = new Promise((resolve, reject) => {
//   if(Math.random() > 0.5) {
//     resolve()
//   } else {
//     reject()
//   }
// })

// promise.then(
//   () => console.log('успех'), 
//   () => console.log('провал')
// );

// let a = 10;

// setTimeout(() => {
//   a = 12
//   console.log(a)
// }, 3000);

// let b = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(a = 12);
//   }, 3000)
// })

// b.then(() => console.log(a));

// console.log(a);

fetch('https://jsonplaceholder.typicode.com/users/1') // отправляем запрос
  .then(resp => resp.json()) // получили данные
  .then(json => console.log(json)) // что-то сделали с полученными данными

  const render = () => {}
