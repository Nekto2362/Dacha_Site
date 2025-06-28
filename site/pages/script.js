// Код для слайдера (который не работает на этой странице)
// Получаем элементы DOM для слайдера
const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Короче чекаем, что картинки существуют, прежде чем чо-то с ними делать
// Если картинки есть, то берём ширину первой картинки, иначе 0
let imageWidth = sliderImages ? document.querySelector('.slider-images img').offsetWidth : 0; 
let currentPosition = 0; // Текущая позиция слайдера


// Код для переключения контента по кнопкам
// Получаем все кнопки переключения контента и элементы контента
const buttons = document.querySelectorAll('.buttons button');
const contentItems = document.querySelectorAll('.content-item');

// Функция, которая прячет все херовины
function hideAllContent() {
  contentItems.forEach(item => {
    item.style.display = 'none'; // Скрываем элемент
    item.classList.remove('active'); // Удаляем класс active
  });
}

// Эта функтион показывает штуки в зависимости от того, куда ты жмав
function showContent(contentId) {
  hideAllContent(); // Прячем все компоненты
  const contentItem = document.getElementById(contentId);
  if (contentItem) {
    contentItem.style.display = 'block'; // Показываем выбранный элемент
    contentItem.classList.add('active'); // Добавляем класс active
  }
}

// Обработчик событий добавляем кнопкам
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const contentId = button.dataset.content; // Хватаем АйДишник из датасета
    showContent(contentId); // Показываем соответствующую херню
  });
});

// Показывает план дома по умолчанию при загрузке страницы
showContent('plan');


// Код для слайдера (который не работает на этой странице)
// Код для кнопки перелистывания вперёд
if (nextButton) {
  nextButton.addEventListener('click', () => {
      currentPosition -= imageWidth; // Уменьшаем текущую позицию на ширину изображения
      // Если достигли конца, возвращаемся в началку
      if (currentPosition < -imageWidth * (sliderImages.children.length - 1)) {
          currentPosition = 0;
      }
      // Применяем трансформацию для перемещения слайдера
      sliderImages.style.transform = `translateX(${currentPosition}px)`;
  });
}

// Код для кнопки перелистывания обратно
if (prevButton) {
  prevButton.addEventListener('click', () => {
      currentPosition += imageWidth; // Увеличиваем текущую позицию на ширину изображения
      // Если достигли начала, переходим к последнему изображению
      if (currentPosition > 0) {
          currentPosition = -imageWidth * (sliderImages.children.length - 1);
      }
      // Применяем трансформацию для перемещения слайдера
      sliderImages.style.transform = `translateX(${currentPosition}px)`;
  });
}


// Код для работы нескольких слайдеров на странице
document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelector('.slides'); // Контейнер слайдов
  const total = slider.querySelectorAll('.slide').length; // Общее количество слайдов
  let idx = 0; // Текущий индекс слайда
  
  // Обработчик для кнопки "вперед"
  slider.querySelector('.next').addEventListener('click', () => {
    idx = (idx + 1) % total; // Увеличиваем индекс с зацикливанием
    slides.style.transform = `translateX(-${idx * 100}%)`; // Сдвигаем слайды
  });
  
  // Обработчик для кнопки "назад"
  slider.querySelector('.prev').addEventListener('click', () => {
    idx = (idx - 1 + total) % total; // Уменьшаем индекс с зацикливанием
    slides.style.transform = `translateX(-${idx * 100}%)`; // Сдвигаем слайды
  });
});