const workers = [
  {
    id: 1,
    first_name: "Olga",
    last_name: "Petrova",
    age: 18,
    rate: 100,
    days: 15,
    photo: "https://reqres.in/img/faces/12-image.jpg",
    progress: 50
  },

  {
    id: 2,
    first_name: "Petr",
    last_name: "Ivanov",
    age: 46,
    rate: 70,
    days: 22,
    photo: "https://reqres.in/img/faces/4-image.jpg",
    progress: 10
  },

  {
    id: 3,
    first_name: "Oleg",
    last_name: "Orlov",
    age: 32,
    rate: 34,
    days: 10,
    photo: "https://reqres.in/img/faces/10-image.jpg",
    progress: 75
  },

  {
    id: 4,
    first_name: "Irina",
    last_name: "Medvedeva",
    age: 22,
    rate: 85,
    days: 17,
    photo: "https://reqres.in/img/faces/2-image.jpg",
    progress: 30
  },
];

//Задан массив объектов workers. Выведите на экран карточки со следующей информацией по всем работникам: ID, Имя, Фамилия, Возраст, Зарплата, фото. Зарплата рассчитывается через умножение ставки на количество дней. 
//Карточки должны включать отображение фотографии. 
//Примените стили к карточкам: width, padding, border, background-color.
//Создайте элемент, который будет отображать уровень прогресса в зависимости от значения, указанного в progress

//1. Создать элемент salaryElem
//2. Добавить элемент в карточку
//3. Передать в фукнцию rate и days
//4. Наполнить элемент содержанием (производим умножение)

const rootElem = document.querySelector('#root');

workers.forEach(function({id, first_name, last_name, age, rate, days, photo, progress}){
  const container = document.createElement('div');
  const idElem = document.createElement('p');
  const firstNameElem = document.createElement('p');
  const lastNameElem = document.createElement('p');
  const ageElem = document.createElement('p');
  const salaryElem = document.createElement('p');
  const photoElem = document.createElement('img');
  const progressContainer = document.createElement('div');
  const progressLine = document.createElement('div');
  const progressValue = document.createElement('p');

  idElem.innerText = `ID: ${id}`;
  firstNameElem.innerText = `First name: ${first_name}`;
  lastNameElem.innerText = `Last name: ${last_name}`;
  ageElem.innerText = `Age: ${age}`;
  salaryElem.innerText = `Salary: ${rate * days}`;
  progressValue.innerText = progress + '%';

  photoElem.setAttribute('src', photo);
  photoElem.setAttribute('alt', "photo of worker");

  container.classList.add('container');
  progressContainer.classList.add('progress-container');
  progressLine.classList.add('progress-line');
  progressLine.style.width = progress + '%';
  progressValue.classList.add('progress-value');

  progressContainer.append(progressLine, progressValue);
  container.append(idElem, firstNameElem, lastNameElem, ageElem, salaryElem, photoElem, progressContainer);
  rootElem.append(container);
})

// const emailElem = document.createElement('a');
// emailElem.href = emailElem.innerText;      
// emailElem.innerText = email;                 
// container.append(idElem, emailElem)
