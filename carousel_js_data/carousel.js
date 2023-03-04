//Carousel
const imageContainer = document.querySelector('.image-container');
const leftButton = document.querySelector('.carousel-left');
const rightButton = document.querySelector('.carousel-right');
const leftButtonSmall = document.querySelector('.carousel-left-small');
const rightButtonSmall = document.querySelector('.carousel-right-small');

//Tracks margin.
let track = 0;

//Tracks image position.
let counter = 1;

//Loads images into carousel.
window.addEventListener('load', () => {
    for (let i = 0; i < carouselImages.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('image-wrapper');
        newDiv.classList.add(`wrapper-${i + 1}`);
        let newImg = document.createElement('img');
        newImg.classList.add('carousel-image');
        newImg.src = carouselImages[i].imagePath;
        newDiv.appendChild(newImg);
        imageContainer.appendChild(newDiv);
    }
    return wrapperOne = document.querySelector('.wrapper-1');
});

//Moves images left.
const moveImagesLeft = function () {
    if (counter < carouselImages.length) {
        counter++;
        track = track - 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}

//Moves images right.
const moveImagesRight = function () {
    if (counter > 1) {
        counter--;
        track = track + 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}

//Moves images left.
rightButton.addEventListener('click', () => {
    moveImagesLeft();
});

rightButtonSmall.addEventListener('click', () => {
    moveImagesLeft();
});

//Moves images right.
leftButton.addEventListener('click', () => {
    moveImagesRight();
});

leftButtonSmall.addEventListener('click', () => {
    moveImagesRight();
});

//Carousel Data. Plug in path to desired images.
//Image paths here
let carouselImages = [
    {
        imagePath: 'https://images.unsplash.com/photo-1677247191557-4abd28b7c387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
    },
    {
        imagePath: 'https://images.unsplash.com/photo-1672243775941-10d763d9adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        imagePath: 'https://images.unsplash.com/photo-1677247191292-4e1791c4ebef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
    },
    {
        imagePath: 'https://images.unsplash.com/photo-1677241817906-a84211b4f627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    },
    {
        imagePath: 'https://images.unsplash.com/photo-1677247191557-4abd28b7c387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
    },
    {
        imagePath: 'https://images.unsplash.com/photo-1672243775941-10d763d9adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        imagePath: 'https://images.unsplash.com/photo-1677247191292-4e1791c4ebef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
    },
    {
        imagePath: 'https://images.unsplash.com/photo-1677241817906-a84211b4f627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    }
];