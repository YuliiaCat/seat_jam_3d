const btn = document.querySelector('.header-burger');
const menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('open');
});