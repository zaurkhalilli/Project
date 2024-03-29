
var swiper = new Swiper(".mySwiper-", {
  slidesPerView: 4,
  spaceBetween: 30,
      breakpoints: {
      240: {
        slidesPerView: 1,
        spaceBetween: 30
       },
    
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      940: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    640: {
      
    },
    prevEl: ".swiper-button-prev",
  },
});



var swiper = new Swiper(".mySwiperr", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".myswiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});



const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', function() {
  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});


const dropdown = document.querySelector('.dropdown-hover');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('mouseover', () => {
  dropdownContent.style.display = 'block';
});

dropdown.addEventListener('mouseout', () => {
  dropdownContent.style.display = 'none';
});



function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show-menu');
}

function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}