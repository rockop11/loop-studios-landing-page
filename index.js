window.onload = function () {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navbar = document.querySelector('.navbar');
    const navLogo = document.querySelector('.nav-logo');
    const body = document.querySelector('body');

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.add('active'); 
        menuIcon.classList.add('hidden'); 
        closeIcon.classList.add('visible');
        navbar.classList.add('visible');
        navLogo.classList.add('visible');
        body.classList.add('no-scroll');
    });

    closeIcon.addEventListener('click', () => {
        mobileMenu.classList.add('close'); 
        
        setTimeout(() => {
            mobileMenu.classList.remove('active');
            mobileMenu.classList.remove('close'); 
            navLogo.classList.remove('visible');
            menuIcon.classList.remove('hidden'); 
        }, 400);

        menuIcon.classList.remove('hidden'); 
        closeIcon.classList.remove('visible');
        navbar.classList.remove('visible');
        body.classList.remove('no-scroll');
    });
};
