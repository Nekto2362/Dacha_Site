// ШАПКА СТРАНИЦЫ

/**
 * Массив объектов для навигационных ссылок в Header.
 * Каждый объект содержит:
 *  - title: текст ссылки, отображается в меню.
 *  - path: путь маршрута для React Router.
 */
const links = [
    {title: 'О нас', path: '/'},
    {title: 'Планы домов', path: '/house-plans'},
    {title: 'Генеральный план', path: '/master-plan'},
    {title: 'Галерея', path: '/gallery'},
    {title: 'Документы', path: '/documents'},
]

// "О НАС"

/**
 * Массив разделов страницы (оглавление).
 *
 * Каждый объект описывает одну секцию:
 *  - id     — уникальный идентификатор секции; должен совпадать со значением
 *             атрибута id у соответствующего <h2> на странице.
 *  - title  — текст, который будет отображён в оглавлении.
 *
 *  Как добавить новый раздел:
 *  1. Вставьте новый объект { id: "новый-id", title: "Название секции" } в этот массив.
 *  2. Убедитесь, что в разметке страницы есть <h2 id="новый-id"></h2>.
 *  3. Если порядок секций важен, вставьте объект в нужную позицию массива.
 */
const contents = [
    {id: "location", title: "Расположение"},
    {id: "description", title: "Описание"},
    {id: "construction", title: "Строительство"},
    {id: "infrastructure", title: "Инфраструктура посёлка"},
    {id: "environment", title: "Окружение"},
];

/**
 * Список пунктов инфраструктуры посёлка.
 *
 * Как добавить новый пункт:
 *   Добавьте строку с названием новой опции в этот массив.
 */
const infrastructure = [
    "Высокое ограждение по периметру",
    "Служба охраны на въезде, КПП",
    "Круглосуточная охрана территории посёлка, видеонаблюдение",
    "Сеть автомобильных и пешеходных дорог с удобными подъездами к участкам и зонам разворота",
    "Оборудованные гостевые автостоянки",
    "Оборудованные зоны отдыха",
    "Оборудованный пляж вблизи озера",
    "Игровые площадки для детей",
    "Универсальная спортивная площадка для любителей активного отдыха",
    "Магазин",
    "Летнее кафе",
    "Резервное электроснабжение",
    "Администрация посёлка",
    "Офис продаж",
];



// "ДОКУМЕНТЫ"

/**
 * Массив фильтров для управления отображением документов.
 *
 * Каждый объект в списке содержит:
 *  - attribute: ключ фильтрации (значение, по которому в списке происходит фильтрация)
 *  - text:      текст для отображения в UI (название фильтра)
 *
 * Как добавить новый фильтр:
 * 1. Добавьте новый объект.
 * 2. Укажите нужный attribute.
 * 3. Пропишите текст, который отобразится в интерфейсе.
 */
const filters = [
    { attribute: "all",  text: "Показать всё", },
    { attribute: "document", text: "Документы", },
    { attribute: "news", text: "Новости", },
]

/**
 * Массив документов для отображения и скачивания документов.
 *
 * Каждый объект в массиве описывает один файл и содержит:
 *  - title — название документа, которое отображается в интерфейсе;
 *  - date  — дата публикации документа в формате ДД.MM.ГГГГ;
 *  - path  — относительный URL до файла (файлы хранятся в /public/files);
 *  - type  — категория элемента (должна совпадать со значением attribute в фильтрах).
 *
 * Как добавить новый документ:
 * 1. Добавьте новый объект.
 * 2. Задайте поля title, date, path и type (type должен соответствовать одному из фильтров).
 */
const documents = [
    {
        title: "Информационное письмо",
        date: "01.10.2023",
        path: "/files/informatsionnoye-pismo.pdf",
        type: "document",
    },
    {
        title: "Правила проживания и внутреннего распорядка в дачном поселке «Заповедное»",
        date: "01.03.2025",
        path: "/files/pravila-prozhivaniya-i-vnutrennego-rasporyadka-v-dachnom-posyolke.pdf",
        type: "document",
    },
];


// "ПРОЕКТЫ ДОМОВ"

/**
 * Массив проектов домов для каталога.
 *
 * Каждый объект описывает один дом и содержит:
 *  - title   — название проекта, отображается в UI.
 *  - imageKey   — ключ для получения изображения плана дома из объекта images.icons-static:
 *                 <img src={images.icons-static[path]}/>
 *  - area    — общая площадь дома в м².
 *  - floor1  — площадь первого этажа в м².
 *  - floor2  — площадь второго этажа в м².
 *  • finish  — наружная отделка.
 *  • roof    — материал кровли.
 *
 * Как добавить новый проект:
 * 1. Сохраните изображение плана в ../assets/house-plans.
 * 2. Импортируйте его в ../utils/themeContext.jsx под нужным ключом.
 * 3. Добавьте новый объект в images -> icons-static.
 * 4. Создайте новый объект { title, path, area, floor1, floor2, finish, roof } в этом массиве.
 */

;

/**
 * Массив описаний проектов домов.
 *
 * Каждый объект описывает один проект и имеет поля:
 *  - slug       — уникальный URL-идентификатор проекта, используется в маршрутизации (например: "/galich-76").
 *  - title      — название, отображаемое в интерфейсе.
 *  - imageKeys  — объект с ключами для получения изображений из хранилища:
 *      • photoKey   — ключ главного фото дома;
 *      • plan1Key   — ключ первого плана этажа;
 *      • plan2Key   — ключ второго плана этажа.
 *  - price      — строка с ценой проекта.
 *  - area       — объект, описывающий площади:
 *      • acres     — площадь участка в сотках;
 *      • total     — общая площадь дома в м²;
 *      • floor1    — площадь первого этажа.
 *      • floor2    — площадь второго этажа.
 *      • finish    — наружная отделка.
 *      • roof      — материал кровли.
 *  - content    — импортированный компонент c информацией о конкретном доме.
 *
 * Как добавить новый проект:
 *  1. Импортируйте компонент дома, например::
 *       import * as NewHouse from "./pages/house-plans/houses/NewHouse.jsx";
 *  2. Добавьте объект в массив houses:
 *       {
 *         slug: "new-house-slug",             // уникальный URL-идентификатор
 *         title: "Новый дом",       // отображаемое название
 *         imageKeys: {
 *           photoKey: "newhouse_photo",
 *           plan1Key: "newhouse_plan1",
 *           plan2Key: "newhouse_plan2"
 *         },
 *         price: "3 000 000",                // строка с ценой
 *         area: {
 *           acres: "20",                     // соток
 *           total: "180",                    // общая м²
 *           floor1: "100",                   // м²
 *           floor2: "80"                     // м²
 *         },
 *         content: NewHouse.BasicSet         // ссылка на импортированный контент
 *       }
 */

import * as Galich76 from "./pages/house-plans/houses/Galich76.jsx";
import * as Zodchiy61 from "./pages/house-plans/houses/Zodchiy61.jsx";
import * as Rublevka59 from "./pages/house-plans/houses/Rublevka59.jsx";
import * as Kostroma53 from "./pages/house-plans/houses/Kostroma53.jsx";
import * as Moskva51 from "./pages/house-plans/houses/Moskva51.jsx";
import * as Noginsk57 from "./pages/house-plans/houses/Noginsk57.jsx";
import * as Kd001 from "./pages/house-plans/houses/Kd001.jsx";
import * as Kd003 from "./pages/house-plans/houses/Kd003.jsx";

const houses = [
    {
        slug: "galich-76",
        title: "Галич №76",
        imageKeys: { photoKey: "galich76", plan1Key: "galich76_plan1", plan2Key: "galich76_plan2",},
        price: "2 450 000",
        area: { acres: "15", total: "135", floor1: "", floor2: "" },
        content: Galich76.BasicSet
    },
    {
        slug: "zodchiy-61",
        title: "Зодчий №61",
        imageKeys: { photoKey: "zodchiy61", plan1Key: "zodchiy61_plan1", plan2Key: "zodchiy61_plan2" },
        price: "2 050 000",
        area: { acres: "15", total: "144", floor1: "", floor2: "" },
        content: Zodchiy61.BasicSet
    },
    {
        slug: "rublevka-59",
        title: "Рублевка №59",
        imageKeys: { photoKey: "rublevka59", plan1Key: "rublevka59_plan1", plan2Key: "rublevka59_plan2" },
        price: "2 100 000",
        area: {acres: "15", total: "192", floor1: "", floor2: "" },
        content: Rublevka59.BasicSet
    },
    {
        slug: "moskva-51",
        title: "Москва №51",
        imageKeys: { photoKey: "moskva51", plan1Key: "moskva51_plan1", plan2Key: "moskva51_plan2"},
        price: "2 400 000",
        area: { acres: "15", total: "160", floor1: "", floor2: "" },
        content: Moskva51.BasicSet
    },
    {
        slug: "kostroma-53",
        title: "Кострома №53",
        imageKeys: { photoKey: "kostroma53", plan1Key: "kostroma53_plan1", plan2Key: "kostroma53_plan2" },
        price: "2 400 000",
        area: { acres: "15", total: "162", floor1: "", floor2: "" },
        content: Kostroma53.BasicSet
    },
    {
        slug: "noginsk-57",
        title: "Ногинск №57",
        imageKeys: { photoKey: "noginsk57", plan1Key: "noginsk57_plan1", plan2Key: "noginsk57_plan2" },
        price: "1 950 000",
        area: { acres: "15", total: "108", floor: "", floor2: "" },
        content: Noginsk57.BasicSet,
    },
    {
        slug: "kd-001",
        title: "КД 001",
        imageKeys: { photoKey: "kd001", plan1Key: "kd001_plan1", plan2Key: "kd001_plan2" },
        price: "",
        area: { acres: "", total: "178,4", floor1: "104", floor2: "72,4" },
        finish: "Клееный брус",
        roof: "Shinglas",
        content: Kd001.BasicSet,
        floorPlan: Kd001.FloorPlan
    },
    {
        slug: "kd-003",
        title: "КД 003",
        imageKeys: { photoKey: "kd003", plan1Key: "kd003_plan1", plan2Key: "kd003_plan2" },
        price: "",
        area: { acres: "", total: "142", floor1: "79,2", floor2: "63" },
        finish: "Комбинированная (газобетон + клееный брус)",
        roof: "Shinglas",
        content: Kd003.BasicSet,
        floorPlan: Kd003.FloorPlan
    }
]

export {links, contents, infrastructure, filters, documents, houses};