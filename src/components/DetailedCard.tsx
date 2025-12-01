import { useTranslation } from "react-i18next";
import type { ForecastGridItem } from "../util/interfaces.ts";

const DetailedCard = ({ item }: { item: ForecastGridItem }) => {

    const { t } = useTranslation();
    const { id, icon, label, value, unit } = item;

    return (
        <div className="forecast-grid-item">
            <p>{icon}</p>
            <label htmlFor={id} className="text-m mb-1 text-secondary">{t(`${label}`)}</label>
            <div id={id} className="text-m mb-1">{value} {t(`${unit}`)}</div>
        </div>
    )
}
export default DetailedCard;