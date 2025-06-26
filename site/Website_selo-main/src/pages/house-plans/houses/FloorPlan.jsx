/**
 * Компонент для отображения поэтажных планов дома.
 * Принимает props:
 *  - plan1Key, plan2Key: ключи изображений планов этажей.
 *  - children: дополнительный JSX-контент (списки помещений, описания), который выводится под планами.
 */

import {images} from "../../../utils/themeContext.jsx";

const FloorPlan = ({plan1Key, plan2Key, children}) => {
    return (
        <div className="floor-plan">
            <img src={images.static[plan1Key]} alt=""/>
            <img src={images.static[plan2Key]} alt=""/>
            {children}
        </div>
    )
}

export default FloorPlan;