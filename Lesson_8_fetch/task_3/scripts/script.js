// ЗАДАЧА 1
// Сформировать fetch-запрос, использовать адрес https://reqres.in/api/users
// Из полученных данный отрисовать интерфейс как на приложенной картинке


const root_elem = document.querySelector('#root');

const render = (data) => {
  const cards = data.map(({first_name, avatar}) => {
    const elem = document.createElement('div');
    const name = document.createElement('p');
    const image = document.createElement('img');

    name.innerText = first_name;
    image.setAttribute('src', avatar);
    image.setAttribute('alt', 'photo');

    elem.append(image, name);
    return elem
  })

  root_elem.append(...cards);
}

fetch('https://reqres.in/api/users')
  .then(resp => resp.json())
  .then(json => render(json.data));
