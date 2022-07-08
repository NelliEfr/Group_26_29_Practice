let nav_menu_btn = document.querySelector('.nav_menu_btn');
let nav_menu = document.querySelector('.nav_menu');

// .menu_active

nav_menu_btn.addEventListener('click', () => {
  nav_menu.classList.toggle('menu_active');
})
