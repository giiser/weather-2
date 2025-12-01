import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useForecast } from "../context/ForecastContext.tsx";
import Header from "../components/Header.tsx";
import DetailedCard from "../components/DetailedCard.tsx";
import Footer from "../components/Footer.tsx";
import type { ForecastGridItem } from "../util/interfaces.ts";

const DayForecastPage = () => {

    const { t } = useTranslation();

    const { city } = useForecast();
    const location = useLocation();
    const { passedDay } = location.state || {};

    const gridItems: ForecastGridItem[] = [
        {
            id: "max-temp",
            label: "high",
            value: passedDay?.day?.maxtemp_c.toLocaleString(),
            unit: "°C",
            icon: "📈"
        },
        {
            id: "min-temp",
            label: "low",
            value: passedDay?.day?.mintemp_c.toLocaleString(),
            unit: "°C",
            icon: "📉"
        },
        {
            id: "humidity",
            label: "humidity",
            value: passedDay?.day?.avghumidity.toLocaleString(),
            unit: "%",
            icon: "💧"
        },
        {
            id: "wind-speed",
            label: "windSpeed",
            value: passedDay?.day?.maxwind_kph.toLocaleString(),
            unit: "kph",
            icon: "💨"
        },
        {
            id: "rain-chance",
            label: "rainChance",
            value: passedDay?.day?.daily_chance_of_rain.toLocaleString(),
            unit: "%",
            icon: "🌧️"
        },
        {
            id: "uv-index",
            label: "uvIndex",
            value: passedDay?.day?.uv.toLocaleString(),
            unit: "",
            icon: "☀️️"
        },
        {
            id: "sunrise",
            label: "sunrise",
            value: passedDay?.astro?.sunrise.toLocaleString(),
            unit: "",
            icon: "️🌄"
        },
        {
            id: "sunset",
            label: "sunset",
            value: passedDay?.astro?.sunset.toLocaleString(),
            unit: "",
            icon: "🌅"
        }
    ]

    const formattedDate = () => {
        const date = new Date(passedDay?.date);
        return new Intl.DateTimeFormat("et-EE").format(date);
    }


    const navigate = useNavigate();

    return (
        <>
            <Header headline={city} />
            <div className="main">
                <button onClick={() => navigate('/')} className={"btn-back"}>{t('back')}</button>
                <h2 className={"text-title header"}>{formattedDate()}</h2>
            </div>
            <div className="forecast-day-grid">
                {passedDay && (
                    gridItems.map((item: ForecastGridItem) => (
                        <DetailedCard key={item.id} item={item} />
                    ))
                )}
            </div>
            <Footer />

        </>
    )
}
export default DayForecastPage;