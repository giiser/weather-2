import { useForecast } from "../context/ForecastContext.tsx";
import type { ForecastDay } from "../util/interfaces.ts";
import ForecastCard from "./ForecastCard.tsx";
import { useTranslation } from "react-i18next";

const LongTermForecast = () => {

    const { forecast, error, loading } = useForecast();
    const { t } = useTranslation();

    if (loading || !forecast) return null;

    const days: ForecastDay[] = forecast.forecast.forecastday;


    return (
        <div className="container">
            <div className="card-header">
                <h3 className="text-title mt-1">{t('next')} 3 {t('days')}</h3>
            </div>

            {/*trying out to list forecast cards*/}
            {!error && !loading && (
                <>
                    {days.length > 0 ? days.map(dayItem => (
                        <ForecastCard key={dayItem.date_epoch} dayItem={dayItem} />
                    )) : <p>Failed to load forecast card</p>}
                </>

            )}
        </div>
    )
}
export default LongTermForecast;