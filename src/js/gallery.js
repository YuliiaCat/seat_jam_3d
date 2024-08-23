import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/scss';

const section = document.querySelector('.gallery-section');
const prevButton = document.querySelector('.gallery-button-prev')
const nextButton = document.querySelector('.gallery-button-next')

const gallerySwiper = new Swiper(section.querySelector('.gallery-swiper'), {
  modules: [Navigation, Autoplay],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 24,
      loop: true,
    },
  },

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  //   pauseOnMouseEnter: true,
  // },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    gallerySwiper.slideNext();
  } else if (e.key === 'ArrowLeft') {
    gallerySwiper.slidePrev();
   } else if (e.key === 'Tab') {
    const focusedElement = document.activeElement;
    if (focusedElement === prevButton) {
      e.preventDefault();
      nextButton.focus();
    } else if (focusedElement === nextButton) {
      e.preventDefault();
      prevButton.focus();
    }
  }
});
