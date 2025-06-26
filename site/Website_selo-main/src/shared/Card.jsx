/**
 * Компонент карточки проекта дома.
 * Принимает props:
 *  - house: объект с данными проекта (slug, title, imageKeys.photoKey, area, finish, roof).
 *  - index: индекс этой карточки в списке.
 *  - hoveredIndex: индекс карточки, над которой в данный момент наведен курсор.
 *  - setHoveredIndex: функция для установки hoveredIndex при наведении/уборе курсора.
 */
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {images} from '../utils/themeContext.jsx'

const rows = [
    {key: 'total', label: 'Общая площадь дома', unit: ' м²'},
    {key: 'floor1', label: 'Площадь 1-го этажа', unit: ' м²'},
    {key: 'floor2', label: 'Площадь 2-го этажа', unit: ' м²'},
    {key: 'finish', label: 'Наружная отделка', unit: ''},
    {key: 'roof', label: 'Материал кровли', unit: ''},
]

const cardVariants = {
    rest: {
        scale: 1,
        backgroundColor: 'var(--shadow)',
    },
    hover: {
        scale: 1.02,
        backgroundColor: 'var(--shadow-darker)',
    }
}

export default function Card({house, index, hoveredIndex, setHoveredIndex}) {
    const isActive = hoveredIndex === index

    const {slug, title, imageKeys: {photoKey}, area, finish, roof
    } = house

    const details = {
        total: area.total,
        floor1: area.floor1,
        floor2: area.floor2,
        finish,
        roof
    }

    return (
        <motion.div
            className="card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial="rest"
            animate={isActive ? 'hover' : 'rest'}
            variants={cardVariants}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
            }}
        >
            <img
                className="card__image"
                src={images.static[photoKey]}
                alt={title}
            />

            <p className="card__title">{title}</p>

            <motion.div
                className="card__info"
                initial={{maxHeight: 0}}
                animate={isActive ? {maxHeight: 500} : {maxHeight: 0}}
                transition={{
                    type: 'tween',
                    duration: 1,
                    ease: 'easeOut'
                }}
            >
                {rows.map(({key, label, unit}) => (
                    <div className="card__row" key={key}>
                        <p>{label}</p>
                        <p>
                            {details[key]}
                            {unit}
                        </p>
                    </div>
                ))}

                <Link
                    className="card__link"
                    to={`/house-plans/${slug}`}
                    onClick={() => setHoveredIndex(null)}
                >
                    <img
                        className="bullet-point"
                        src={images.static.more}
                        alt="подробнее"
                    />
                    Читать подробнее
                </Link>
            </motion.div>
        </motion.div>
    )
}