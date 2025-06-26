/**
 * Компонент страницы «Проекты домов».
 *
 * Отображает список карточек проектов домов в несколько колонок.
 * Количество колонок адаптировано под ширину экрана.
 * Подсвечивает карточку при наведении.
 */
import React, {useState, useEffect} from 'react'
import PageWrapper from "../../shared/page-components/PageWrapper.jsx";
import Card from "../../shared/Card.jsx";
import {houses} from '../../dataLists.js'

const HousePlans = () => {
    // Индекс карточки, над которой наведён курсор
    const [hoveredIndex, setHoveredIndex] = useState(null)

    /**
     * useColumnsCount — кастомный хук для расчёта числа колонок на основе ширины окна.
     * Возвращает количество колонок: 1–4 в зависимости от breakpoints.
     */
    function useColumnsCount() {
        const getCount = () => {
            const w = window.innerWidth;
            if (w > 1377) return 4;
            if (w >= 1025) return 3;
            if (w >= 650) return 2;
            return 1;
        };

        const [columns, setColumns] = useState(getCount);

        useEffect(() => {
            const onResize = () => setColumns(getCount());
            window.addEventListener('resize', onResize);
            return () => window.removeEventListener('resize', onResize);
        }, []);

        return columns;
    }
    const columnsCount = useColumnsCount();
    const cols = Array.from({length: columnsCount}, (_, i) => i);

    return (
        <PageWrapper pageClass="house-plans" title="Проекты домов">
            <h1 className="title">ПРОЕКТЫ ДОМОВ</h1>

            {/* Сетка карточек: колонки зависят от ширины экрана */}
            <div className="cards" style={{'--cols': columnsCount}}>
                {cols.map(col => (
                    <div className="cards__column" key={col}>
                        {houses
                            .filter((_, i) => i % columnsCount === col)
                            .map((house, idxInCol) => {
                                const index = idxInCol * columnsCount + col;
                                return (
                                    <Card
                                        className="card__item"
                                        key={index}
                                        house={house}
                                        index={index}
                                        hoveredIndex={hoveredIndex}
                                        setHoveredIndex={setHoveredIndex}
                                    />
                                )
                            })}
                    </div>
                ))}
            </div>
            <hr/>
        </PageWrapper>
    )
};

export default HousePlans;