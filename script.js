// const scroll = new LocomotiveScroll({
    // el: document.querySelector('.section_main,.second,.about,.subscribe'),
    // smooth: true
// });
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar-mobile');
  
    menuBtn.addEventListener('click', function() {
      navbar.classList.toggle('is-visible');
    });
  });
  
