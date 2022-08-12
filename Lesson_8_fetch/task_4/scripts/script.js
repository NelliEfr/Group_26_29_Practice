// ЗАДАЧА 2
// Сформировать fetch-запрос, использовать адреса https://reqres.in/api/users?page=1 и https://reqres.in/api/users?page=2
// Из полученных данный отрисовать интерфейс как на приложенной картинке.
// Кнопки внизу осуществляют переключение между страницами 1 и 2

const root_elem = document.querySelector('#root');

const render = (data) => {
  root_elem.innerText = '';
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

const request = (id) => {
  fetch(`https://reqres.in/api/users?page=${id}`)
    .then(resp => resp.json())
    .then(json => render(json.data))
}

request();

const triggers = document.querySelectorAll('.triggers button')

const [first_button, second_button] = triggers;

first_button.addEventListener('click', () => {
  request(1)
});

second_button.addEventListener('click', () => {
  request(2)
});
