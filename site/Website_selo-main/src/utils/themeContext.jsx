import {createContext, useState, useEffect} from 'react';

// -------------------------
// Иконки, зависящие от темы
// -------------------------
import sun from '../assets/icons-theme-dependent/sun.png';
import moon from '../assets/icons-theme-dependent/moon.png'
import menu_b from '../assets/icons-theme-dependent/menu-black.png';
import menu_w from '../assets/icons-theme-dependent/menu-white.png';
import arrow_down_w from '../assets/icons-theme-dependent/arrow-white.png';
import arrow_down_b from '../assets/icons-theme-dependent/arrow-black.png';
import download_w from '../assets/icons-theme-dependent/download-white.png';
import download_b from '../assets/icons-theme-dependent/download-black.png';
import phone_w from '../assets/icons-theme-dependent/phone-white.png';
import phone_b from '../assets/icons-theme-dependent/phone-black.png';
import email_w from '../assets/icons-theme-dependent/email-white.png';
import email_b from '../assets/icons-theme-dependent/email-black.png';
import delivery_w from '../assets/icons-theme-dependent/delivery-white.png';
import delivery_b from '../assets/icons-theme-dependent/delivery-black.png';
import unload_w from '../assets/icons-theme-dependent/unload-white.png';
import unload_b from '../assets/icons-theme-dependent/unload-black.png';
import assemble_w from '../assets/icons-theme-dependent/assemble-white.png';
import assemble_b from '../assets/icons-theme-dependent/assemble-black.png';
import moscow_w from '../assets/icons-theme-dependent/moscow-white.png';
import moscow_b from '../assets/icons-theme-dependent/moscow-black.png';

// ------------------
// Иконки, не зависящие от темы
// ------------------
import logo from '../assets/icons-static/logo.png';
import plant from '../assets/about/plant.png';
import check from '../assets/icons-static/check.png';
import car from '../assets/about/car.png';
import train from '../assets/about/train.png';
import file from '../assets/icons-static/file.png';
import more from '../assets/icons-static/more.png';

// --------------------
// Изображения страницы «О нас»
// --------------------
import bg_home from '../assets/about/bg-home.png';
import house_field from '../assets/about/house-field.png';
import forest from '../assets/about/forest.png';
import house2 from '../assets/about/house.jpg';
import timber1 from '../assets/about/timber1.png';
import timber2 from '../assets/about/timber2.png';
import log1 from '../assets/about/log1.jpg';
import log2 from '../assets/about/log2.jpg';
import log3 from '../assets/about/log3.jpg';
import finish1 from '../assets/about/finish1.jpg';
import finish2 from '../assets/about/finish2.jpg';

// --------------------
// Изображения проектов домов
// и соответствующих поэтажных планов
// --------------------
import galich76 from '../assets/house-plans/galich76.jpg';
import galich76_plan1 from '../assets/house-plans/galich76-plan1.jpg';
import galich76_plan2 from '../assets/house-plans/galich76-plan2.jpg';
import kd001 from '../assets/house-plans/kd001.jpg';
import kd001_plan1 from '../assets/house-plans/kd001-plan1.jpg';
import kd001_plan2 from '../assets/house-plans/kd001-plan2.jpg';
import kd003 from '../assets/house-plans/kd003.jpg';
import kd003_plan1 from '../assets/house-plans/kd003-plan1.jpg';
import kd003_plan2 from '../assets/house-plans/kd003-plan2.jpg';
import kostroma53 from '../assets/house-plans/kostroma53.jpg';
import kostroma53_plan1 from '../assets/house-plans/kostroma53-plan1.jpg';
import kostroma53_plan2 from '../assets/house-plans/kostroma53-plan2.jpg';
import moskva51 from '../assets/house-plans/moskva51.jpg';
import moskva51_plan1 from '../assets/house-plans/moskva51-plan1.jpg';
import moskva51_plan2 from '../assets/house-plans/moskva51-plan2.jpg';
import noginsk57 from '../assets/house-plans/noginsk57.jpg';
import noginsk57_plan1 from '../assets/house-plans/noginsk57-plan1.jpg';
import noginsk57_plan2 from '../assets/house-plans/noginsk57-plan2.jpg';
import rublevka59 from '../assets/house-plans/rublevka59.jpg';
import rublevka59_plan1 from '../assets/house-plans/rublevka59-plan1.jpg';
import rublevka59_plan2 from '../assets/house-plans/rublevka59-plan2.jpg';
import zodchiy61 from '../assets/house-plans/zodchiy61.jpg';
import zodchiy61_plan1 from '../assets/house-plans/zodchiy61-plan1.jpg';
import zodchiy61_plan2 from '../assets/house-plans/zodchiy61-plan2.jpg';
import master_plan from '../assets/master-plan/master-plan.jpg'

// --------------------
// Галерея
// --------------------
import photo1 from '../assets/gallery/1.jpg';
import photo2 from '../assets/gallery/2.jpg';
import photo3 from '../assets/gallery/3.jpg';
import photo4 from '../assets/gallery/4.jpg';
import photo5 from '../assets/gallery/5.jpg';
import photo6 from '../assets/gallery/6.jpg';
import photo7 from '../assets/gallery/7.jpg';
import photo8 from '../assets/gallery/8.jpg';
import photo9 from '../assets/gallery/9.jpg';
import photo10 from '../assets/gallery/10.jpg';
import photo11 from '../assets/gallery/11.jpg';
import photo12 from '../assets/gallery/12.jpg';
import photo13 from '../assets/gallery/13.jpg';
import photo14 from '../assets/gallery/14.jpg';
import photo15 from '../assets/gallery/15.jpg';

export const images = {
    static: {
        // логотип и иконки
        logo: logo,
        plant: plant,
        check: check,
        car: car, train: train,
        file: file,
        more: more,

        // изображения страницы «О нас»
        bg_home: bg_home,
        house_field: house_field, forest: forest, house2: house2,
        timber1: timber1, timber2: timber2,
        log1: log1, log2: log2, log3: log3,
        finish1: finish1, finish2: finish2,

        // изображения проектов домов и планов
        galich76: galich76, galich76_plan1: galich76_plan1, galich76_plan2: galich76_plan2,
        kd001: kd001, kd001_plan1: kd001_plan1, kd001_plan2: kd001_plan2,
        kd003: kd003, kd003_plan1: kd003_plan1, kd003_plan2: kd003_plan2,
        kostroma53: kostroma53, kostroma53_plan1: kostroma53_plan1, kostroma53_plan2: kostroma53_plan2,
        moskva51: moskva51, moskva51_plan1: moskva51_plan1, moskva51_plan2: moskva51_plan2,
        noginsk57: noginsk57, noginsk57_plan1: noginsk57_plan1, noginsk57_plan2: noginsk57_plan2,
        rublevka59: rublevka59, rublevka59_plan1: rublevka59_plan1, rublevka59_plan2: rublevka59_plan2,
        zodchiy61: zodchiy61, zodchiy61_plan1: zodchiy61_plan1, zodchiy61_plan2: zodchiy61_plan2,
        master_plan: master_plan,

        // изображения галереи
        photos: {
            photo1: photo1, photo2: photo2, photo3: photo3, photo4: photo4, photo5: photo5,
            photo6: photo6, photo7: photo7, photo8: photo8, photo9: photo9, photo10: photo10,
            photo11: photo11, photo12: photo12, photo13: photo13, photo14: photo14, photo15: photo15,
        }
    },

    light: {
        theme: moon, menu: menu_b,
        arrow_down: arrow_down_b,
        download: download_b,
        phone: phone_b, email: email_b,
        delivery: delivery_b, unload: unload_b, assemble: assemble_b, moscow: moscow_b,
    },

    dark: {
        theme: sun, menu: menu_w,
        arrow_down: arrow_down_w,
        download: download_w,
        phone: phone_w, email: email_w,
        delivery: delivery_w, unload: unload_w, assemble: assemble_w, moscow: moscow_w,
    },
}

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const getTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? "dark" : "light";
    };

    const [theme, setTheme] = useState(getTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);


    const handleThemeChange = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        console.log(newTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext};
