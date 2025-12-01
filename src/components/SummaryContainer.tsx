import { useTranslation } from "react-i18next";
import { useForecast } from "../context/ForecastContext.tsx";

const SummaryContainer = () => {

    const { t } = useTranslation();
    const { forecast } = useForecast();



    return (
        <div className="container">
            <div className="summary">
                <h2 className="text-title">{t(forecast.location?.name?.toLowerCase())}</h2>
                <p className="text-secondary text-m label">{t('currentWeather')}</p>
                <p className="text-xl m-0"><img src={`https:${forecast.current?.condition?.icon.toLocaleString()}`} alt="current weather icon" /></p>
                <p className="text-l mb-0 mt-1">{forecast.current?.temp_c.toLocaleString()} °C</p>
                <p className="text-m text-secondary mt-1">{forecast.current?.condition?.text}</p>
            </div>
            <div className="primary-details-grid">
                <div className="detail-grid-item">
                    <label htmlFor="humidity" className="text-m text-secondary">{t('humidity')}</label>
                    <div id="humidity" className="text-m">{forecast.current?.humidity.toLocaleString()} %</div>
                </div>
                <div className="detail-grid-item">
                    <label htmlFor="wind-speed" className="text-m text-secondary">{t('windSpeed')}</label>
                    <div id="wind-speed" className="text-m">{forecast.current?.wind_kph.toLocaleString()} {t('kph')}</div>
                </div>
                <div className="detail-grid-item">
                    <label htmlFor="high-temp" className="text-m text-secondary">{t('high')}</label>
                    <div id="high-tem" className="text-m">{forecast.forecast.forecastday[0]?.day?.maxtemp_c.toLocaleString()} °C</div>
                </div>
                <div className="detail-grid-item">
                    <label htmlFor="low-temp" className="text-m text-secondary">{t('low')}</label>
                    <div id="low-tem" className="text-m">{forecast.forecast.forecastday[0]?.day?.mintemp_c.toLocaleString()} °C</div>
                </div>
            </div>
        </div>
    )
}
export default SummaryContainer;