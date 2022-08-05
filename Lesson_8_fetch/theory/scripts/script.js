// let a = 15;

// setTimeout(() => {
//   a = 25;
//   console.log(a)
// }, 2000);

// console.log(a);


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(a = 25)
//   }, 2000)
// });

// promise.then(() => console.log(a)); // 25

// console.log(a); // 15


let f1 = (value) => console.log(`${value}: ok`);
let f2 = () => console.log('не ок');

const random = new Promise((resolve, reject) => {
  let r = Math.random()
  if(r > 0.5){
    resolve(r)
  } else {
    reject()
  }
});

random.then(f1, f2); // (resolve(), reject())

// random.then(
//   (value) => console.log(`${value}: ok`), // resolve()
//   () => console.log('не ок') // reject()
// );


// fetch('https://jsonplaceholder.typicode.com/users') // направляем запрос
//   .then(resp => resp.json()) // получаем ответ (response), преобразовываем response в json
//   .then(json => console.log(json)) // получаем json, выводим json в консоль
