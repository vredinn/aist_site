document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const headerBottom = document.querySelector('.header__bottom');

    const toggleHamburger = () =>{
        hamburger.classList.toggle("hamburger--active");
        headerBottom.classList.toggle("header__bottom--active");
    }

    hamburger.addEventListener('click', toggleHamburger);
})

  