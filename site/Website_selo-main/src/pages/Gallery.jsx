/**
 * Компонент страницы "Галерея".
 * Отображает набор миниатюр фотографий.
 * При клике на миниатюру открывает модальное окно с полноразмерным изображением.
 * Поддерживает навигацию по фотографиям вперед/назад.
 */

import {useState, useEffect, useContext} from 'react';
import {images, ThemeContext} from "../utils/themeContext.jsx";
import PageWrapper from "../shared/page-components/PageWrapper.jsx";

const Gallery = () => {
    const {theme} = useContext(ThemeContext);
    const photoList = Object.values(images.static.photos);

    // Состояние открытия модального окна и текущего индекса фото
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = index => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const showPrev = e => {
        e.stopPropagation();
        setCurrentIndex((currentIndex - 1 + photoList.length) % photoList.length);
    };

    const showNext = e => {
        e.stopPropagation();
        setCurrentIndex((currentIndex + 1) % photoList.length);
    };

    // Блокировка прокрутки фона при открытом модальном окне
    useEffect(() => {
        const {classList} = document.body;
        isOpen ? classList.add('modal__open') : classList.remove('modal__open');
        return () => classList.remove('modal__open');
    }, [isOpen]);

    return (
        <PageWrapper pageClass="gallery" title="Галерея">
            <div className="gallery__container">
                {photoList.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`фото ${index + 1}`}
                        className="gallery__thumb"
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    {/* Модальное окно с навигацией по фотографиям */}
                    <div className="modal__content" onClick={e => e.stopPropagation()}>
                        <img
                            src={photoList[currentIndex]}
                            alt={`Фото ${currentIndex + 1}`}
                            className="modal__img"
                        />
                        <img className="modal__nav modal__prev"
                             src={images[theme].arrow_down}
                             onClick={showPrev}/>
                        <img className="modal__nav modal__next"
                             src={images[theme].arrow_down}
                             onClick={showNext}/>
                    </div>

                </div>
            )}
        </PageWrapper>
    );
};

export default Gallery;