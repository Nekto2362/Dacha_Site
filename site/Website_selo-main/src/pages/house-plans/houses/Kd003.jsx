/*
 * Базовый комплект проекта Кд003.
 */
export function BasicSet() {
    return (
        <div>
            <p className="mb-3">
                Средних размеров двухэтажный дом из газобетона и клееного бруса с тремя спальнями, расположенными на
                втором этаже, просторной гостиной и широкой летней террасой.
            </p>

            <div className="tab__list shadowed">
                <p> Общая площадь дома:
                    <span> 142,2м²</span>
                </p>
                <p> Общая площадь 1-го этажа:
                    <span> 79,2м²</span>
                </p>
                <p> Общая площадь 2-го этажа:
                    <span> 63м²</span>
                </p>
                <p> Наружная отделка:
                    <span> Комбинированная (газобетон + клееный брус)</span>
                </p>
                <p> Материал кровли:
                    <span> Shinglas</span>
                </p>
            </div>
        </div>
    )
}

export function FloorPlan() {
    return (
        <>
            <div className="floor-plan__list shadowed">{
                [
                    {title: "Гостиная", area: "28,3"},
                    {title: "Кухня-столовая", area: "19,1"},
                    {title: "Холл", area: "20,8"},
                    {title: "Бойлерная", area: "7,7"},
                    {title: "Санузел", area: "8,8"},
                    {title: "Гардероб", area: "7,3"},
                    {title: "Тамбур", area: "6,2"},
                    {title: "Веранда", area: "20,4"},
                    {title: "Веранда", area: "14"}
                ].map(({title, area}, index) =>
                    <p>{index + 1}. {title}
                        <span>  {area}м²</span>
                    </p>)
            }
            </div>

            <div className="floor-plan__list shadowed">
                {
                    [
                        {title: "Спальня", area: "20,6"},
                        {title: "Спальня", area: "11"},
                        {title: "Спальня", area: "24,8"},
                        {title: "Холл", area: "21,7"},
                        {title: "Санузел", area: "9,6"},
                        {title: "Санузел", area: "8,6"},
                        {title: "Веранда", area: "12,8"},
                        {title: "Веранда", area: "14"},
                        {title: "Балкон", area: "7,4"}
                    ].map(({title, area}, index) =>
                        <p>{index + 1}. {title}
                            <span>  {area}м²</span>
                        </p>)
                }
            </div>
        </>
    )
}