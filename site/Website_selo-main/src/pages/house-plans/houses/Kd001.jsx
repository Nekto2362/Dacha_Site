/*
 * Базовый комплект проекта Кд001.
 */
export function BasicSet() {
    return (
        <div>
            <p className="mb-3">
            Небольшой загородный дом из экологически чистого материала – клееного бруса. На первом и втором этажах
            расположены четыре спальни, также имеется просторная гостиная и терраса, где места хватит и для отдыха, и
            для обустройства летней столовой.
            </p>

            <div className="tab__list shadowed">
                <p> Общая площадь дома:
                    <span> 178,4м²</span>
                </p>
                <p> Общая площадь 1-го этажа:
                    <span> 104м²</span>
                </p>
                <p> Общая площадь 2-го этажа:
                    <span> 74,4м²</span>
                </p>
                <p> Наружная отделка:
                    <span> Клееный брус</span>
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
                {title: "Гостиная", area: "26,6"},
                {title: "Кухня-столовая", area: "11,4"},
                {title: "Спальня", area: "11,4"},
                {title: "Бойлерная", area: "6,3"},
                {title: "Лестничный холл", area: "9,84"},
                {title: "Санузел", area: "3,78"},
                {title: "Тамбур", area: "4,5"},
                {title: "Терраса", area: "26"},
                {title: "Крыльцо", area: "4,16"}
            ].map(({title, area}, index) =>
                <p>{index + 1}. {title}
                    <span>  {area}м²</span>
                </p>)
        }
        </div>

        <div className="floor-plan__list shadowed">
            {
                [
                    {title: "Спальня", area: "19,0"},
                    {title: "Спальня", area: "19,0"},
                    {title: "Спальня", area: "11,4"},
                    {title: "Кабинет", area: "11,4"},
                    {title: "Лестничный холл", area: "9,84"},
                    {title: "Санузел", area: "3,78"},
                ].map(({title, area}, index) =>
                    <p>{index + 1}. {title}
                        <span>  {area}м²</span>
                    </p>)
            }
        </div>
    </>
    );
}