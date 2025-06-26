/**
 * Компонент для фильтрации и отображения списка документов по выбранной категории.
 *
 * Импортирует:
 *  - filters: массив объектов с атрибутами и текстом радио-кнопок для фильтрации,
 *  - documents: массив объектов документов с полем type.
 *
 * Логика:
 * 1. selectedType — состояние выбранного фильтра (по умолчанию "all").
 * 2. filteredDocs — если selectedType === "all", показывает все документы,
 *    иначе фильтрует по полю type.
 */
import {useState} from "react";
import DocumentList from "./DocumentList.jsx";
import {filters, documents} from "../dataLists.js";

const FilterByCategory = () => {
    const [selectedType, setSelectedType] = useState("all");

    const filteredDocs =
        selectedType === "all"
            ? documents
            : documents.filter((doc) => doc.type === selectedType);

    return (
        <div className="documents__container">
            <div className="filter">
                {filters.map(({attribute, text}) => (
                    <label className="radio-button" htmlFor={attribute} key={attribute}>
                        <input
                            type="radio"
                            id={attribute}
                            value={attribute}
                            checked={selectedType === attribute}
                            onChange={() => setSelectedType(attribute)}
                        />
                        <span className="radio-circle"></span>
                        {text}
                    </label>
                ))}
            </div>
            <DocumentList documents={filteredDocs}/>
        </div>
    );
}

export default FilterByCategory;