/**
 * Компонент для отображения списка документов.
 * Принимает props:
 *  - documents: массив объектов { title, date, path } - название, дата публикации, путь к файлу.
 *
 * Логика:
 * 1. Переворачивает список документов (последние вверху).
 * 2. Для каждого документа отображает иконку файла, заголовок, дату и ссылку для скачивания.
 */
import {useContext} from "react";
import {images, ThemeContext} from "../utils/themeContext.jsx";

const DocumentList = ({documents}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className="documents-list">
            {documents.slice().reverse().map(({title, date, path}, index) => (
                <div key={index} className="document">
                    <img src={images.static.file}/>
                    <div className="document__title d-column mr-2">
                        <p>{title}</p>
                        <p className="document__date">{date}</p>
                    </div>
                    <a href={path} target="_blank" rel="noopener noreferrer">
                        <img src={images[theme].download} alt="download icon"/>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default DocumentList;