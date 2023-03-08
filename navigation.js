//Selecting Elements
const menuCollapser = document.querySelector('.menu-collapser');
const navigationMenuCollapse = document.querySelector('.navigation-menu-collapse');
const pagesMenuButton = document.querySelector('.pages-menu-button');
const pagesMenuButtonCollapse = document.querySelector('.pages-menu-button-collapse');
const pagesMenu = document.querySelector('.pages-menu');

//Menu states
let isMenuOpen = false;
let isPagesMenuOpen = false;
let isPagesMenuCollapseOpen = false;

//Moves menu for navigation on small screen.
menuCollapser.addEventListener('click', () => {
    if (isMenuOpen === false) {
        navigationMenuCollapse.style.transform = 'translateY(0%)';
        navigationMenuCollapse.style.marginTop = '0px';
        isMenuOpen = true;
    } else {
        navigationMenuCollapse.style.marginTop = `-${navigationMenuCollapse.clientHeight}px`;
        isMenuOpen = false;
        if (isPagesMenuCollapseOpen === true) {
            pagesMenuCollapsed.style.marginTop = `-${pagesMenuButtonCollapse.clientHeight}px`;
            isPagesMenuCollapseOpen = false;
        }
    }
});

//Moves menu for pages tab.
pagesMenuButton.addEventListener('click', () => {
    if (isPagesMenuOpen === false) {
        pagesMenu.style.transform = 'translateY(0%)';
        pagesMenu.style.marginTop = '0px';
        isPagesMenuOpen = true;
    } else {
        pagesMenu.style.marginTop = `-${pagesMenu.clientHeight}px`;
        isPagesMenuOpen = false;

    }
});

//Moves menu for pages tab on small screen.
pagesMenuButtonCollapse.addEventListener('click', () => {
    if (isPagesMenuCollapseOpen === false) {
        pagesMenu.style.transform = 'translateY(0%)';
        pagesMenu.style.marginTop = '0px';
        isPagesMenuCollapseOpen = true;
    } else {
        pagesMenu.style.marginTop = `-${pagesMenu.clientHeight}px`;
        isPagesMenuCollapseOpen = false;
    }
});