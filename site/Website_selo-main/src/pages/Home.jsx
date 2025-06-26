/**
 * Компонент главной страницы "О нас".
 * Отображает:
 *  - Заголовок с навигацией по содержанию (TableOfContents).
 *  - Секции с информацией: Расположение, Описание, Строительство, Производство стройматериалов,
 *    Материалы для отделки, Инфраструктура посёлка, Окружение.
 */

import {useState, useContext} from 'react';
import clsx from 'clsx';
import {images, ThemeContext} from '../utils/themeContext.jsx';
import {contents, infrastructure} from '../dataLists.js';
import PageWrapper from "../shared/page-components/PageWrapper.jsx";
import Section from "../shared/page-components/Section.jsx";
import ContentGrid from "../shared/page-components/ContentGrid.jsx";
import Highlight from "../shared/page-components/Highlight.jsx";
import LiBulletPoint from "../shared/LiBulletPoint.jsx";
import TableOfContents from "../shared/TableOfContents.jsx";

const Home = () => {
    const {theme} = useContext(ThemeContext);
    const [showContents, setShowContents] = useState(false);

    return (
        <PageWrapper pageClass="home" title="О нас">
            {/* Блок оглавления с переключаемым отображением */}
            <div className="toc">
                <nav className="toc__header">
                    <h1 className="title">ЗАПОВЕДНОЕ<br/>дачный посёлок</h1>
                    <img
                        className={clsx('toc__arrow',
                            showContents && 'toc__arrow_rotated'
                        )}
                        src={images[theme].arrow_down}
                        alt="открыть содержание"
                        onClick={() => setShowContents(v => !v)}
                    />
                </nav>
                <TableOfContents contents={contents} visible={showContents}/>
            </div>

            <Section id="location" title="Расположение" level={2}>
                <ContentGrid layout="thirds">
                    <p>
                        Дачный поселок «Заповедное» находится в <Highlight>
                        88 км от Москвы, по Ярославскому или Щелковскому шоссе</Highlight> рядом с деревней Малое Каринское, Александровского района Владимирской области.
                    </p>
                    <div className="d-column">
                        <div className="content__label">
                            <img className="bullet-point" src={images.static.car}/>
                            на автомобиле
                        </div>
                        <div className="shadowed">
                            <p>Весь путь от МКАД в ДПК «Заповедное» занимает всего <span className="highlighted">50 минут</span> на
                                автомобиле.</p>
                            <p>От шоссе до поселка ведет асфальтированная дорога хорошего качества.</p>
                        </div>
                    </div>
                    <div className="d-column">
                        <div className="content__label">
                            <img className="bullet-point" src={images.static.train}/>
                            на электричке
                        </div>
                        <div className="shadowed">
                            <p>На электричке можно добраться с Ярославского вокзала, доехав до станции «Струнино».</p>
                            <p>От станции ходит автобус «Струнино - Александров», маршрут которого проходит через наш
                                поселок.</p>
                        </div>
                    </div>
                </ContentGrid>
            </Section>

            <Section id="description" title="Описание" level={2}>
                <ContentGrid layout="half">
                    <div>
                        <p>Дачный поселок «Заповедное» расположен в живописном, экологически чистом месте.</p>
                        <p>На территории сохранен естественный ландшафт, созданный самой природой.</p>
                        <p>Администрация ДПК «Заповедное»
                            проделала огромную работу и постаралась создать условия для того, чтобы каждое мгновение,
                            проведенное здесь, наполняло Вас живительной силой природы.</p>
                    </div>
                    <ul>
                        <LiBulletPoint imageKey="plant">
                            <span>Поселок окружен лесом с преимущественно хвойными породами деревьев</span>
                        </LiBulletPoint>
                        <LiBulletPoint imageKey="plant">
                            <span>Внутри поселка есть природное озеро с благоустроенной территорией для Вашего комфортного отдыха</span>
                        </LiBulletPoint>
                    </ul>
                </ContentGrid>
                <ContentGrid layout="half">
                    <p className="dotted">
                        Все дома в поселке возводятся из экологически чистых материалов с использованием современных
                        энергосберегающих технологий с соблюдением высоких стандартов качества строительства, учитывая
                        пожелания заказчика. <br/>
                        Подведены все коммуникации для круглогодичного проживания с учетом
                        климатических условий нашего региона. Есть <Highlight>газ, свет, водопровод,
                        канализация</Highlight>,
                        возможно
                        подключение к сети <Highlight>Internet</Highlight>.
                    </p>
                    <p
                        style={{
                            padding: '1rem',
                            textAlign: 'center',
                            lineHeight: '1.5',
                            boxShadow: '0 0 10px 10px var(--green)',
                        }}>
                        Приобретая участок и заказывая дом в ДПК «Заповедное» Вы инвестируете капитал в недвижимость в
                        <span style={{color: 'var(--green)', fontWeight: 'bold'}}> экологически чистом районе</span>,
                        удачно
                        расположенном вблизи границы Московской и Владимирской
                        области, с развитой инфраструктурой, отличными пейзажами первозданной природы, где для Вас
                        существуют все блага цивилизации.
                    </p>
                </ContentGrid>
            </Section>

            <Section id="construction" title="Строительство" level={2}>
                <ContentGrid layout="thirds">
                    <img className="content__image"
                         src={images.static.forest}
                         alt="Костромской лес"/>
                    <p>
                        Строительство деревянных домов на Руси популярно испокон веков.<br/>
                        И сегодня, несмотря на все изыски технического прогресса,
                        мы возвращаемся к истокам и начинаем ценить простые, но действительно важные, жизненно
                        необходимые вещи:
                        <span style={{color: 'var(--label)', fontWeight: 'bold'}}> свежий воздух </span>
                        вместо удушающего смога мегаполиса,
                        <span style={{color: 'var(--green)', fontWeight: 'bold'}}> красоту природы </span>
                        вместо безликих каменных джунглей,
                        <span style={{
                            color: 'var(--highlight-text)',
                            fontWeight: 'bold'
                        }}> тепло и защиту родного дома </span>
                        из бруса вместо зажатой среди тысяч таких же, типовой квартирки с тонкими стенами и ужасаемой
                        слышимостью.
                    </p>
                    <p className="shadowed">
                        Наша компания строит дома и бани, используя
                        <span className="highlighted"> материалы, изготовленные из северных лесов Костромской области</span>.<br/>
                        Заготовка леса для отделочных и строительных материалов, как правило,
                        производится в холодное зимнее время - в итоге получаются качественные древесные строительные и
                        отделочные материалы.
                    </p>
                </ContentGrid>
            </Section>

            <Section title="производство стройматериалов" level={3}>
                <ContentGrid layout="thirds">
                    <p>
                        Качество материала напрямую зависит от самого производителя. На нашем
                        предприятии работают высококвалифицированные специалисты по деревообработке, которые
                        постоянно следят за качеством выпускаемой продукции. Костромской лес давно заработал хорошую
                        репутацию. <br/>
                        В сезон строительства пиломатериалы загружаются для доставки напрямую
                        "из под ленты" - что означает огромный спрос на нашу продукцию. За счет максимальной
                        механизации в производстве отделочных материалов, их стоимость вполне разумная.
                    </p>
                    <img className="content__image" src={images.static.house2}/>
                    <div>
                        <p>Комплект поставки дома из бруса состоит из нескольких элементов,
                            производство которых прекрасно налажено в нашей компании:</p>
                        <ul className="shadowed">
                            {
                                [
                                    "Стены дома", "Внутренние перегородки", "Стропильная система", "Обрешетка крыши",
                                    "Лаги пола и потолка", "Черновой пол", "Перекрытие потолка", "Обшивка фронтонов",
                                ].map((item, index) =>
                                    <LiBulletPoint imageKey="check" key={index}>
                                        <span>{item}</span>
                                    </LiBulletPoint>)
                            }

                        </ul>
                        <p>Даже с помощью перечисленных выше компонентов можно построить деревянный дом, что называется <Highlight>«без единого гвоздя»</Highlight>.
                        </p>
                    </div>
                </ContentGrid>
            </Section>

            <Section title="какие материалы мы производим?" level={3}>
                <ContentGrid layout="thirds">
                    <p className="as-center ta-center shadowed width-100">
                        Самым популярным и экономным строительным материалом является
                        <span className="highlighted"> брус</span>.
                        Мы строим дома из профилированного и обычного (естественной влажности) бруса. <br/>
                        Для строительства используется брус различных размеров, от 50 мм до 200 мм шириной и высотой, 6
                        метров длиной.
                    </p>
                    <div className="content__caption">
                        <img className="content__image" src={images.static.timber1}/>
                        профилированный брус
                    </div>
                    <div className="content__caption">
                        <img className="content__image" src={images.static.timber2}/>
                        брус естественной влажности
                    </div>
                </ContentGrid>

                <hr/>

                <p className="ta-center mb-2"> Началом всех начал служило бревно из хвойных пород деревьев.
                    Издавна самым теплым жилищем считается дом из бревна.<br/>
                    Для строительства мы используем
                    <span className="highlighted"> оцилиндрованные, строганные и цельные</span> бревна.</p>
                <ContentGrid layout="thirds">
                    <div className="content__caption">
                        <img className="content__image flex-grow-1" src={images.static.log1}/>
                        оцилиндрованное
                    </div>
                    <div className="content__caption">
                        <img className="content__image flex-grow-1" src={images.static.log2}/>
                        строганное
                    </div>
                    <div className="content__caption">
                        <img className="content__image flex-grow-1" src={images.static.log3}/>
                        цельное
                    </div>
                </ContentGrid>
            </Section>

            <Section title="материалы для отделки" level={3}>
                <ContentGrid layout="quarters">
                    <p className="shadowed"> Большинство деревянных новостроек хозяева предпочитают отделывать вагонкой.<br/>
                        <Highlight>Вагонка</Highlight> - очень практичный и недорогой отделочный материал,
                        имеющий множество разновидностей.
                    </p>
                    <div className="content__caption">
                        <img className="content__image flex-grow-1" src={images.static.finish1}/>
                        вагонка
                    </div>
                    <div className="content__caption">
                        <img className="content__image flex-grow-1" src={images.static.finish2}/>
                        блок-хаус
                    </div>
                    <p className="shadowed">
                        Для отделки деревянного дома из бруса не так давно вышел на рынок другой отделочный материал,
                        получивший название <Highlight>блок-хаус</Highlight>.
                    </p>
                </ContentGrid>
            </Section>

            <Section id="infrastructure" title="Инфраструктура посёлка" level={2}>
                <ContentGrid layout="half">
                    <ul>
                        {infrastructure.slice(0, 7).map((text) =>
                            <LiBulletPoint imageKey="check">
                                <span>{text}</span>
                            </LiBulletPoint>
                        )}
                    </ul>
                    <ul>
                        {infrastructure.slice(7, 14).map((text) =>
                            <LiBulletPoint imageKey="check">
                                <span>{text}</span>
                            </LiBulletPoint>
                        )}
                    </ul>
                </ContentGrid>
            </Section>

            <Section id="environment" title="Окружение" level={2}>
                <ContentGrid layout="thirds" >
                    <p className="shadowed">
                        Заповедное - отличное место для жизни и отдыха людей, ведущих здоровый и
                        активный образ жизни. Здесь возможны прогулки на лошадях, рыбалка и охота.
                    </p>
                    <p className="dotted">Александровский район славится богатой фауной.
                        В лесах Владимирской области можно встретить лося, кабана, косулю, лису, зайца, ястреба.<br/>
                        Утро для Вас будет начинаться с нежного воздуха хвойного леса и звуков пения соловьев и чибисов.
                    </p>
                    <p className="shadowed">Рядом с поселком расположен населенный пункт, город
                        Струнино с развитой инфраструктурой
                        (супермаркеты, детские сады, школы, рестораны, поликлиника, больница и т.д.).
                    </p>
                </ContentGrid>

                <b className="ta-center">
                <p>
                    Мы гарантируем качество, юридическую чистоту сделки и строгое выполнение всех сроков
                    оформления
                    документации и строительства.
                </p>
                <p>Строительство в поселке началось в 2007 году.</p>
                <p>В настоящее время в поселке проживает более 150 семей.</p>
                </b>
            </Section>


        </PageWrapper>
    )
}

export default Home;