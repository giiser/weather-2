import {useForecast} from "./context/ForecastContext.tsx";
import {useTranslation} from "react-i18next";
import {BrowserRouter, Route, Routes} from "react-router";
import DayForecastPage from "./pages/dayforecast.tsx";
import HomePage from "./pages/home.tsx";
import NotFoundPage from "./pages/not-found.tsx";

function App() {

    const {loading, error} = useForecast();
    const {t} = useTranslation();


    if (loading) return <p>{t('loading')}</p>;
    if (error) return <p>{t('error')} {error}</p>;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/details/:date" element={<DayForecastPage />} />
                {/*not found route (the last in the list)*/}
                <Route path={"*"} element={<NotFoundPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
