/**
 * Шапка сайта.
 * Содержит:
 *  - Логотип и название проекта с ссылкой на главную страницу.
 *  - Ссылки на основные разделы сайта.
 *  - Кнопку переключения темы (светлая/тёмная).
 *  - Адаптивное меню (иконка и выпадающий список) для мобильных устройств.
 *  - Отображение контактов.
 */

import {useContext, useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {images, ThemeContext} from '../utils/themeContext.jsx'
import {links} from '../dataLists.js'

export default function Header() {
    const {theme, handleThemeChange} = useContext(ThemeContext);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Отслежижвает прокрутку страницы и изменяет внешний вид шапки
        const onScroll = () => {
            setScrolled(window.scrollY > 300);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        // Закрытие выпадающего меню при клике вне его области
        function onClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenMenu(false);
            }
        }

        document.addEventListener('mousedown', onClickOutside);
        return () => document.removeEventListener('mousedown', onClickOutside);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "navbar_small" : ""}`}>
            <Link to="/" className='navbar__logo'>
                <img src={images.static.logo} alt="logo"/>
                <div>
                    <h2>Заповедное</h2>
                    <p>дачный посёлок</p>
                </div>
            </Link>

            <div className="navbar__items">
                {
                    links.map(({title, path}, index) => (
                        <Link className="navbar__item" key={index} to={path}>
                            {title}
                        </Link>
                    ))
                }
            </div>

            <img className="navbar__theme"
                 onClick={handleThemeChange}
                 src={images[theme].theme} alt="сменить тему"/>

            <div className="navbar__menu" ref={menuRef}>
                <img className="bullet-point"
                     src={images[theme].menu}
                     onClick={() => setOpenMenu(open => !open)}
                     alt="меню"/>
                {openMenu && (
                    <div className="navbar__dropdown">
                        {links.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="navbar__dropdown-link"
                                onClick={() => setOpenMenu(false)} // закрыть при выборе
                            >
                                {link.title}
                            </Link>
                        ))}
                        <div className="navbar__dropdown-contacts">
                            <p>+7 495 724 28 98</p>
                            <p>zapovednoe07@mail.ru</p>
                        </div>
                    </div>
                )}

            </div>

            <div className='navbar__contacts d-column'>
                <p>+7 495 724 28 98</p>
                <p>zapovednoe07@mail.ru</p>
            </div>
        </header>
    );
}