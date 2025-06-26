/*
 * Универсальный компонент для создания сетки контента.
 * Принимает props:
 *  - layout: строка, задающая вариант раскладки ('half', 'thirds', 'quarters' и т.д.), по умолчанию 'half'.
 *  - children: JSX-элементы, размещаемые внутри сетки.
 *
 * Добавляет соответствующий CSS-класс на контейнер для управления числом колонок или стилем сетки.
 */
import React from 'react';
import clsx from 'clsx';

const ContentGrid = ({layout = 'half', children}) => (
    <div className={clsx('content__grid', `content__grid_${layout}`)}>
        {children}
    </div>
);

export default ContentGrid;