"use strict";

// show menu //
var navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'); // menu show //

if (navToggle) {
  navToggle.addEventListener('click', function () {
    navMenu.classList.add('show-menu');
  });
}

; // menu hidden //

if (navClose) {
  navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
  });
}

; // remove menu mobile //

var navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  var navMenu = document.getElementById('nav-menu'); // when we click on each nav__link, we remove the show-menu click

  navMenu.classList.remove('show-menu');
}

navLink.forEach(function (n) {
  return n;
}, addEventListener('click', linkAction));
/* scroll reveal animation */

var sr = ScrollReveal({
  distance: '90px',
  duration: 3000
});
sr.reveal('.home__data', {
  origin: 'top',
  delay: 400
});
sr.reveal('.home__img', {
  origin: 'bottom',
  delay: 600
});