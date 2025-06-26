const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageWidth = document.querySelector('.slider-images img').offsetWidth;
let currentPosition = 0;

nextButton.addEventListener('click', () => {
    currentPosition -= imageWidth;
    if (currentPosition < -imageWidth * (sliderImages.children.length - 1)) {
        currentPosition = 0;
    }
    sliderImages.style.transform = `translateX(${currentPosition}px)`;
});

prevButton.addEventListener('click', () => {
    currentPosition += imageWidth;
    if (currentPosition > 0) {
        currentPosition = -imageWidth * (sliderImages.children.length - 1);
    }
    sliderImages.style.transform = `translateX(${currentPosition}px)`;
});