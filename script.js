const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const shadowDiv = document.querySelector('.shadow');

const burgerIcon = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon');

const toggleMenu = () => {
    mobileMenu.classList.toggle('active');
    shadowDiv.classList.toggle('active');

    burgerIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
}

burgerBtn.addEventListener('click', toggleMenu);
shadowDiv.addEventListener('click', toggleMenu);