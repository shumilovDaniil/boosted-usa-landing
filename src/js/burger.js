const btn = document.querySelector('.user__burger');
const nav = document.querySelector('.header__nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
})