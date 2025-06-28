// Код для слайдера (который не работает на этой странице)
const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
// Проверяем, что sliderImages существует, прежде чем пытаться получить offsetWidth
let imageWidth = sliderImages ? document.querySelector('.slider-images img').offsetWidth : 0; 
let currentPosition = 0;


// Код для переключения контента по кнопкам
const buttons = document.querySelectorAll('.buttons button');
const contentItems = document.querySelectorAll('.content-item');

// Function to hide all content items
function hideAllContent() {
  contentItems.forEach(item => {
    item.style.display = 'none';
    item.classList.remove('active'); // Удаляем класс active
  });
}

// Function to show the selected content item
function showContent(contentId) {
  hideAllContent(); // Hide all content items first
  const contentItem = document.getElementById(contentId);
  if (contentItem) {
    contentItem.style.display = 'block';
    contentItem.classList.add('active'); // Добавляем класс active
  }
}

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const contentId = button.dataset.content;
    showContent(contentId);
  });
});

// Show "plan" content by default
showContent('plan');

// Код для слайдера (который не работает на этой странице)
if (nextButton) {
  nextButton.addEventListener('click', () => {
      currentPosition -= imageWidth;
      if (currentPosition < -imageWidth * (sliderImages.children.length - 1)) {
          currentPosition = 0;
      }
      sliderImages.style.transform = `translateX(${currentPosition}px)`;
  });
}

if (prevButton) {
  prevButton.addEventListener('click', () => {
      currentPosition += imageWidth;
      if (currentPosition > 0) {
          currentPosition = -imageWidth * (sliderImages.children.length - 1);
      }
      sliderImages.style.transform = `translateX(${currentPosition}px)`;
  });
}


document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelector('.slides');
  const total = slider.querySelectorAll('.slide').length;
  let idx = 0;
  slider.querySelector('.next').addEventListener('click', () => {
    idx = (idx + 1) % total;
    slides.style.transform = `translateX(-${idx * 100}%)`;
  });
  slider.querySelector('.prev').addEventListener('click', () => {
    idx = (idx - 1 + total) % total;
    slides.style.transform = `translateX(-${idx * 100}%)`;
  });
});