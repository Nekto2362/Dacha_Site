/**
 * Компонент для отображения пункта списка с пользовательской иконкой.
 * Принимает props:
 *  - imageKey: ключ иконки из images.static,
 *  - children: содержимое элемента списка (<li>), отображается после иконки.
 */

import {images} from "../utils/themeContext.jsx";

export default function LiBulletPoint({imageKey, children}) {
    return (
        <li>
            <img className="bullet-point" src={images.static[imageKey]} alt=""/>
            {children}
        </li>
    )
}