const form = document.querySelector('.form');
const root_elem = document.querySelector('#root');

let getUser = (id, callback) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(json => callback(json))
}

let render = (json) => {
  root_elem.innerText = '';
  
  const card = document.createElement('div');
  const name = document.createElement('p');
  const email = document.createElement('a');

  name.innerText = json.name;
  email.innerText = json.email;

  email.setAttribute('href', `mailto:${json.email}`);

  card.append(name, email);
  root_elem.append(card);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const id = event.target.id.value;
  getUser(id, render);
});


// let f1 = () => {
//   return 2 ** 2
// }

// let f2 = () => {
//   return 3 ** 2
// }

// let f4 = () => {
//   return 4 ** 2
// }

// let f5 = (num) => {
//   return num ** 2
// }

// console.log(f5(9));

