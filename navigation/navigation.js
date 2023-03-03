//Navigation
const navigationButton = document.querySelector('.menu-collapser');
const collapsedNavigationMenu = document.querySelector('.navigation-menu-collapse');

let isMenuOpen = false;

navigationButton.addEventListener('click', () => {
    if (isMenuOpen === false) {
        collapsedNavigationMenu.style.marginTop = '0px';
        isMenuOpen = true;
    } else {
        collapsedNavigationMenu.style.marginTop = '-150px';
        isMenuOpen = false;
    }
});