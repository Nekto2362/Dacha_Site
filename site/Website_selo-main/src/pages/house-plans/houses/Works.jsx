/**
 * Отображает список выполняемых работ по проекту дома.
 */

import {useContext} from "react";
import {images, ThemeContext} from "../../../utils/themeContext.jsx";

export default function Works() {
    const {theme} = useContext(ThemeContext);

    return (
        <ul className="shadowed">
            {[
                {title: "Доставка пиломатериалов", imageKey: "delivery"},
                {title: "Разгрузка", imageKey: "unload"},
                {title: "Сборка на участке заказчика", imageKey: "assemble"},
                {title: "Доставка по Московской области", imageKey: "moscow"},
            ].map(({title, imageKey}) => (
                <li className="d-flex ai-center" key={imageKey}>
                    <img className="bullet-point mb-1"
                         src={images[theme][imageKey]}
                         style={{width: '3rem', height: 'auto'}}
                    />
                    {title}
                </li>
            ))}

            <p className="mt-2">
                Сборка сруба производится на деревянных нагелях.<br/>
                Стыки и углы бруса запиливаются в ласточкин хвост (тёплый угол).
            </p>
        </ul>
    )
}