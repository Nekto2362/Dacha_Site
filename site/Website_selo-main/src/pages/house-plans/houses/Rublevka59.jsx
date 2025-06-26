/*
 * Базовый комплект проекта Рублевка 59.
 */
export function BasicSet() {
    return (
        <div>
            <p className="section__heading section__heading_level-2 d-column">
                Дом из бруса 8 x 12м
                <p className="house__text">с выносом отрытой терасы<br className="house__text_break"/> 3 x 8м</p>
            </p>


            <div className="tab__list shadowed">
                {
                    [
                        {title: "Фундамент: ", text: "ленточный, армированный"},
                        {title: "Основные стены: ", text: "от земли - 0.50м, в землю 0.50м, ширина 0.40м"},
                        {title: "Внутренние (несущие) перегородки: ", text: "монолитные, ширина 0.30м"},
                        {title: "Балки пола и потолка: ", text: "брус, 100х150мм (на ребро), шаг 0.90м"},
                        {title: "Проёмы окон, дверей: ", text: "черновые"},
                        {title: "Обработка сруба с наружной стороны: ", text: "огне-биозащита (антисептик)"},
                        {title: "Гидроизоляция на фундамент: ", text: "рубероид, в два слоя"},
                        {title: "Утеплитель: ", text: "джут"},
                        {title: "Стеклопакеты"},
                        {title: "Расходные материалы",}
                    ].map(({title, text}) =>
                        <p>{title}
                            <span>{text}</span>
                        </p>)
                }
            </div>

            <p className="section__heading section__heading_level-3 m-2">
                первый этаж
            </p>

            <div className="tab__list shadowed">
                {
                    [
                        {title: "Высота: ", text: "3м, в чистоте 2.7м"},
                        {title: "Основные стены: ", text: "брус, 150х150мм"},
                        {title: "Внутренние стены: ", text: "брус, 100х150мм, в чистоте 2.70м"},
                        {title: "Пол: ", text: "черновой"},
                    ].map(({title, text}) =>
                        <p>{title}
                            <span>{text}</span>
                        </p>)
                }
            </div>

            <p className="section__heading section__heading_level-3 m-2">
                второй этаж
            </p>

            <div className="tab__list shadowed">
                {
                    [
                        {title: "Высота: ", text: "2,50м в чистоте"},
                        {title: "Основные стены: ", text: "брус, 150х150мм, подняты на 1.20м (полутораэтажный)"},
                        {title: "Внутренние стены: ", text: "брус, 100х150мм, в чистоте 2.50м"},
                    ].map(({title, text}) =>
                        <p>{title}
                            <span>{text}</span>
                        </p>)
                }
            </div>

            <p className="section__heading section__heading_level-3 m-2">
                крыша
            </p>

            <div className="tab__list shadowed">
                {
                    [
                        {title: "Крыша мансарда: ", text: "брус, 150х150мм"},
                        {title: "Фронтоны: ", text: "брус, 150х150мм"},
                        {title: "Стропильная конструкция: ", text: "брус, 50х150мм, шаг 0.90м"},
                        {title: "Обрешетка: ", text: "доска 25х150мм"},
                        {title: "Кровля: ", text: "рубероид"},
                    ].map(({title, text}) =>
                        <p>{title}
                            <span>{text}</span>
                        </p>)
                }
            </div>

            <p className="house__text_bold mt-3">
                Двери, полы, лестницы, утепления полов делаются через 7-8 месяцев и в комплектацию не входят.
            </p>
        </div>
    )
}