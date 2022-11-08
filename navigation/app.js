//The code for the original dropdown menu can be found here: https://codepen.io/narlocka/pen/oNqrdZR
//This is JS for the dropdown menu when the screen shrinks.

//Assign elements to be used.
const dropdown = document.querySelector('.links-small-screen');
const navButton = document.querySelector('.mobile-nav-button');


//Set closed/open attribute on load.
window.addEventListener('load', () => {

    //Sets attribute so we can see if the menu is open or not.
    dropdown.setAttribute('menu-closed', 'true');
})


//Function for closing the menu
const closeMenu = (el) => {

    //Sets the elements height to 0 and sets the attribute to closed.
    el.style.height = 0 + 'px';
    el.setAttribute('menu-closed', 'true');
};


//Function for openening the menu
const openMenu = (el) => {

    //Grabs height of the selected elements content and sets element to that height.
    const itemContainerheight = el.scrollHeight;
    el.style.height = itemContainerheight + 'px';
    el.setAttribute('menu-closed', 'false');
};


//Adds click functions onto the menu title element.
navButton.addEventListener('click', () => {
    const isClosed = dropdown.getAttribute('menu-closed');

    if (isClosed === 'true') {
        openMenu(dropdown);
    } else {
        closeMenu(dropdown);
    }
});
