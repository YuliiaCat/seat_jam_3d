document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.header-burger');
  const menu = document.querySelector('.menu');

  const toggleMenu = () => {
    menu.classList.toggle('open');
  };

  if (btn && menu) {
    btn.addEventListener('click', toggleMenu);
  } else {
    console.error('Button or menu not found');
  }

  document.addEventListener('click', (event) => {
    if (menu.classList.contains('open') && !menu.contains(event.target) && !btn.contains(event.target)) {
      menu.classList.remove('open');
    }
  });
});
