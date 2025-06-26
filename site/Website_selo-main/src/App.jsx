import {Route, Routes} from 'react-router-dom';

// сборник стилей
import './styles/styles.sass'
// сброс прокрутки
import useResetScroll from "./utils/useResetScroll";

// макет страницы
import PageLayout from "./layout/PageLayout";
// страницы
import Home from "./pages/Home.jsx";
import HousePlans from "./pages/house-plans/HousePlans.jsx";
import HouseInfo from "./pages/house-plans/HouseInfo.jsx";
import MasterPlan from "./pages/MasterPlan.jsx";
import Gallery from "./pages/Gallery.jsx";
import Documents from "./pages/Documents.jsx";

function App() {
    useResetScroll();

    return (
        // навигация
        <Routes>

            <Route path="/" element={
               <PageLayout content={<Home/>} />
            } />

            <Route path="/house-plans" element={
               <PageLayout content={<HousePlans/>} />
            } />

            <Route
                path="/house-plans/:houseId"
                element={<PageLayout content={<HouseInfo/>}/>}
            />

            <Route path="/master-plan" element={
                <PageLayout content={<MasterPlan/>}/>
            }/>

            <Route path="/gallery" element={
                <PageLayout content={<Gallery/>}/>
            }/>

            <Route path="/documents" element={
               <PageLayout content={<Documents/>} />
            } />

        </Routes>
    )
}

export default App;