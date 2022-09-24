let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-navigation__toggle');
let map = document.querySelector('.map');

navMain.classList.remove('main-navigation--nojs');
navMain.classList.remove('main-navigation--opened');
navMain.classList.add('main-navigation--closed');
map.classList.remove('map--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});
