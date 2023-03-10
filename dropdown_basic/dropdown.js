//Selecting Elements
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

//Setting states 
let isDropdownOpen = false;
let dropdownCount = 0;

//Loads dropdown position
window.addEventListener('load', () => {
    dropdownContent.style.marginTop = `-${dropdownContent.clientHeight}px`;
});

//Moves dropdown content based on state.
dropdownButton.addEventListener('click', () => {
    if (isDropdownOpen === false) {
        isDropdownOpen = true;
        if (dropdownCount === 0) {
            dropdownCount++;
            dropdownContent.style.transition = 'margin-top .5s';
        }
        dropdownContent.style.marginTop = `0px`
    } else {
        isDropdownOpen = false;
        dropdownContent.style.marginTop = `-${dropdownContent.clientHeight}px`;
    }
});