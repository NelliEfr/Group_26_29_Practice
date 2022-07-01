//Вывести в консоль текст из инпута
const console_btn = document.querySelector('#console_btn');
const console_input = document.querySelector('#console_input');
console_btn.addEventListener('click', () => console.log(console_input.value));


//При нажатии на кнопку поменять цвет фона на черный
const change_black_btn = document.querySelector('.change_black_btn');
change_black_btn.addEventListener('click', () => document.body.style.backgroundColor = 'black');


//При нажатии на кнопку поменять цвет на значение из массива

const change_color_btn = document.querySelector('.change_color_btn');
const colors = ['pink', 'blue', 'green', 'yellow'];
let color_index = 0;

change_color_btn.addEventListener('click', () => document.body.style.backgroundColor = colors[color_index++ % colors.length]);

// color_index++ % colors.length
// 0 % 3 = 0
// 1 % 3 = 1
// 2 % 3 = 2
// 3 % 3 = 0
// 4 % 3 = 1
// 5 % 3 = 2
// 6 % 3 = 0


//Поменять содержимое инпута на !!!
const change_input_btn = document.querySelector('.change_input_btn');
const change_input = document.querySelector('.change_input');
change_input_btn.addEventListener('click', () => change_input.value = '!!!');


//Поменять содержимое инпута на значение из массива
let symbols = ['...', '!!!', ',,,', '%%%', 'hello']
let symbols_index = 0;
const change_input_btn2 = document.querySelector('.change_input_btn2');
const change_input2 = document.querySelector('.change_input2');
change_input_btn2.addEventListener('click', () => change_input2.value = symbols[symbols_index++ % symbols.length]);



//Создать описанный в форме элемент (тип элемента, содержимое элемента, цвет элемента)

const add_form  = document.querySelector('.add_form');
const add_form_result  = document.querySelector('.add_form_result');

add_form.addEventListener('submit', (event) => {
  event.preventDefault();
  const {type, content, color} = event.target;
  const element = document.createElement(type.value);
  element.style.color = color.value;
  element.innerText = content.value;
  add_form_result.append(element);
});
