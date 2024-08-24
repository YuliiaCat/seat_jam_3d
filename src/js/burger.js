document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.header-burger');
  const menu = document.querySelector('.menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  } else {
    console.error('Button or menu not found');
  }
});
