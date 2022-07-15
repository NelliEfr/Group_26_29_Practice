// добавление и удаление класса .menu_active при нажатии на одну кнопку

let nav_menu_btn = document.querySelector('.nav_menu_btn');
let nav_menu = document.querySelector('.nav_menu');

nav_menu_btn.addEventListener('click', () => {
  nav_menu.classList.toggle('menu_active');
})

// добавление класса .popup_active при нажатии на Account и удаление класса при нажатии на Х

let popup = document.querySelector('.popup');
let account = document.querySelector('.account');
let cross_btn = document.querySelector('.cross_btn');

account.addEventListener('click', () => {
  popup.classList.add('popup_active');
});

cross_btn.addEventListener('click', () => {
  popup.classList.remove('popup_active');
});
