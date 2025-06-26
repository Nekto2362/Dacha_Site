/**

 * Универсальный компонент для создания секций на странице.
 * Принимает props:
 *  - id: атрибут id заголовка секции (для якорной навигации),
 *  - title: текст заголовка секции,
 *  - level: уровень заголовка (h2, h3 и т.д., по умолчанию 2),
 *  - children: содержимое секции.
 *
 * Генерирует элемент <section> с заголовком указанного уровня и обёрткой для контента.
 */
const Section = ({id, title, level = 2, children}) => {
    const Heading = `h${level}`

    return (
        <section className="section">
            <Heading id={id}
                className={`section__heading section__heading_level-${level}`}>
                {title}
            </Heading>
            <div className="content">
                {children}
            </div>
        </section>
    );
};

export default Section;