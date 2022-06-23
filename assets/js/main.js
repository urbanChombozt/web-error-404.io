// show menu //
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// menu show //
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
};

// menu hidden //
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
};

// remove menu mobile //
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu click
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n, addEventListener('click', linkAction))

/* scroll reveal animation */
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})

sr.reveal('.home__data', { origin: 'top', delay: 400 })
sr.reveal('.home__img', { origin: 'bottom', delay: 600 })