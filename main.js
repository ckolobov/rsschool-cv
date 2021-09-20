const navigationBurger = document.querySelector('.js-navigation-burger');
const navigationBlock = document.querySelector('.js-navigation-block');

navigationBurger.addEventListener('click', () => {
  navigationBlock.classList.toggle('active');
})