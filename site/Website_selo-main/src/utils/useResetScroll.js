/**
 * Кастомный React-хук useResetScroll
 *
 * Сбрасывает прокрутку страницы в начало при изменении маршрута.
 * Использует хук useLocation из react-router-dom для отслеживания изменения пути.
 *
 * Порядок работы:
 * 1. Получает текущий путь (pathname) через useLocation().
 * 2. При изменении pathname вызывает window.scrollTo, сбрасывая прокрутку наверх.
 */
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function useResetScroll() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "instant"}); // или "smooth", если хочешь анимацию
    }, [pathname]);

    return null;
}