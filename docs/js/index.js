const nav = document.querySelector('.navigation');
const menu = document.querySelector('.navigation__btn')
const arrow = document.querySelector('.icon');

const handleClick = () => {
  if ((arrow.getAttribute('name') === 'arrow-down-outline')) {
    arrow.setAttribute('name', 'arrow-up-outline');
  } else {
    arrow.setAttribute('name', 'arrow-down-outline')
  }

  nav.classList.toggle('navigation--active');

};

menu.addEventListener('click', handleClick)
