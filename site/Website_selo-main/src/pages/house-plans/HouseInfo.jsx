/**
 * Детльная страница проекта дома.
 *
 * Отображает информацию о выбранном доме на основе параметра URL:
 *  - основная информация (название, площадь, цена)
 *  - фотография
 *  - навигационные вкладки:
 *      • контент из модуля content.BasicSet
 *      • список работ (Works.jsx)
 *      • поэтажный план (FloorPlan.jsx)
 *  - блок контактов для связи
 *
 * Использует useParams для получения houseId и ищет данные в массиве houses.
 */
import {useContext, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {images, ThemeContext} from "../../utils/themeContext.jsx";
import {houses} from "../../dataLists.js";
import FloorPlan from "./houses/FloorPlan.jsx";
import Works from "./houses/Works.jsx";

const HouseInfo = () => {
    const {theme} = useContext(ThemeContext);
    const {houseId} = useParams();
    const house = houses.find(h => h.slug === houseId);

    const {
        slug, title, imageKeys, price, area, content, floorPlan
    } = house;

    const [activeTab, setActiveTab] = useState("set");
    const SetComponent = content;
    const FloorPlanComponent = floorPlan;

    if (!house) {
        return <p>План дома с идентификатором «{houseId}» не найден.</p>
    }

    return (
        <div className="house house__text">
            {/* Заголовок и основная информация */}
            <div className="house__header">
                <Link to="/house-plans" className="house__link-back">←</Link>
                <h1 className="house__text_title">
                    Проект дома<br/>
                    <span className="house__text_bold">{title}</span>
                </h1>

                <div className="house__pricing">
                    <p className="house__text_bold">
                        <span className="house__text_caption">Площадь: </span>
                        {area.total} м², {area.acres} сот.
                    </p>
                    <p className="house__text_bold">
                        <span className="house__text_caption">Цена: </span>
                        {price} руб.
                    </p>
                </div>
            </div>
            {/* Галерея (можно вставить картинки) */}
            <div className="house__gallery">
                <div className="shadowed"></div>
                <img className="house__image" src={images.static[imageKeys.photoKey]}/>
                <div className="shadowed"></div>
            </div>

            {/* Вкладки навигации */}
            <nav className="house__tabs house__text_bold">
                <p
                    className={`house__tab  ${activeTab === "set" ? "house__tab_active" : ""}`}
                    onClick={() => {
                        setActiveTab("set")
                        console.log(activeTab)
                    }
                    }
                >
                    Базовый комплект
                </p>
                <p
                    className={`house__tab ${activeTab === "works" ? "house__tab_active" : ""}`}
                    onClick={() => {
                        setActiveTab("works")
                        console.log(activeTab)
                    }
                    }
                >
                    Работы
                </p>
                <p
                    className={`house__tab ${activeTab === "plan" ? "house__tab_active" : ""}`}
                    onClick={() => {
                        setActiveTab("plan")
                    }
                    }
                >
                    Поэтажный план
                </p>
            </nav>

            {/* Контакты для связи */}
            <div className="house__contacts">
                <p className="ta-center">Свяжитесь с нами!</p>
                {[
                    {content: "+7 495 724 28 98", imageKey: "phone"},
                    {content: "zapovednoe07@mail.ru", imageKey: "email"}
                ].map(({content, imageKey}) => (
                    <li key={imageKey}>
                        <img className="bullet-point mb-1"
                             src={images[theme][imageKey]}
                             style={{width: '3rem', height: 'auto'}}
                        />
                        {content}
                    </li>
                ))}
            </div>

            {/* Содержимое вкладок */}
            <div className="tab__content" style={{display: activeTab === "set" ? "block" : "none"}}>
                <SetComponent/>
            </div>

            <div className="tab__content" style={{display: activeTab === "works" ? "block" : "none"}}>
                <Works/>
            </div>

            <div style={{display: activeTab === "plan" ? "block" : "none"}}>
                <FloorPlan plan1Key={imageKeys.plan1Key} plan2Key={imageKeys.plan2Key} content={FloorPlanComponent}>
                    {FloorPlanComponent && <FloorPlanComponent/>}
                </FloorPlan>
            </div>
        </div>
    )
}

export default HouseInfo;