/**
 * Отображает навигационное оглавление на странице.
 * Принимает:
 *  - contents: массив объектов { id, title }, где id соответствует атрибуту секции,
 *              title — текст ссылки в оглавлении.
 *  - visible: булевое значение, определяющее видимость оглавления (добавляет класс для отображения).
 *
 * Генерирует список ссылок, ведущих к секциям страницы по их id.
 */
export default function TableOfContents({contents, visible}) {
    return (
        <nav className={`toc__items ${visible ? 'toc__items_visible' : ''}`}>
            <ul>
                {contents.map(({id, title}) => (
                    <li key={id}>
                        <a href={`#${id}`}
                        >
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}