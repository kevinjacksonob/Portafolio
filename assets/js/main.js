 
 const container = document.querySelector('.nav')
const menu = document.getElementById('nav-menu')

container.addEventListener('click', function (e) {
  console.log(e.target);
  if(e.target.matches('.menu-open')) {
    menu.classList.add('show--menu')
  }

  if(e.target.matches('.menu-close')) {
    menu.classList.remove('show--menu')
  }

  if (e.target.matches('.nav__link')) {
    menu.classList.remove('show--menu')
  }
}) 


 