'use strict';

{
  const open = document.querySelector('.menu-trigger');
  const overlay = document.querySelector('.overlay');
  const links = document.querySelectorAll('.overlay a');
  const back = document.getElementById('back');

  open.addEventListener('click', () => {
    overlay.classList.toggle('show');
    open.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('active');
    })
  });

  function scroll() {
    window.scroll({top: 0, behavior: 'smooth'});
  };

  back.addEventListener('click', () => {
    scroll();
  });

  window.addEventListener('scroll', () => {
    scrollEvent();
  });

  function scrollEvent() {
    if(window.pageYOffset > 400){
      back.style.opacity = '1';
    }else if(window.pageYOffset < 400){
      back.style.opacity = '0';
    }
  };
}