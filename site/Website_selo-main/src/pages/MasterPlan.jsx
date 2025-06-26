/**
 * Компонент страницы "Генеральный план".
 * Отображает информацию о покупке участка и коммуникациях.
 * Показывает цены для разных размеров участков и визуальный генеральный план.
 */
import {images} from "../utils/themeContext.jsx";

export default function MasterPlan() {
    return (
        <div className="master-plan house__text">
            <h1 className="title mb-3">Генеральный план</h1>

                <div className="d-column dotted">
                    <p className="mb-2">Земля без подряда + магистральный газ, электричество</p>
                    <div className="tab__list">
                        <p> 15 соток:
                            <span> 590 000 руб.</span>
                        </p>
                        <p>
                            20 соток:
                            <span> 790 000 руб.</span>
                        </p>
                    </div>
                </div>

            <img src={images.static.master_plan}/>
        </div>
    )
}