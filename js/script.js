//Swiper main
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    effect: 'fade',
    initialSlide: 2,
    centeredSlides: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Autoplay
    autoplay: {
        delay: 2500,
    }
  
  });

//Header Nav Scroll
const header = document.querySelector('.header')
window.addEventListener('scroll', fixHeader)

function fixHeader() {
  if (window.scrollY > header.offsetHeight +50) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

//Cursor Round effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
})

//Hamburger menu
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.mob-menu'),
  menuItem = document.querySelectorAll('.mob-menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('mob-menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('mob-menu_active');
      })
  })
})