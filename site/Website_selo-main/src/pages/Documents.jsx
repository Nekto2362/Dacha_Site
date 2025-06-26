/**
 * Компонент страницы "Документы".
 * Отображает раздел с документами и фильтр по категориям.
 */
import FilterByCategory from "../shared/FilterByCategory.jsx";
import PageWrapper from "../shared/page-components/PageWrapper.jsx";

const Documents = () => {
    return (

        <PageWrapper pageClass="documents" title="Документы">
            <h1 className="title">ДОКУМЕНТЫ ДЛЯ<br/>
            ОЗНАКОМЛЕНИЯ
            </h1>
            <FilterByCategory/>
        </PageWrapper>
)
};

export default Documents;