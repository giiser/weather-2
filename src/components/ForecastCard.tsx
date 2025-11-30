import type {ForecastDay} from "../util/interfaces.ts";
import {useTranslation} from "react-i18next";
import {Link} from "react-router";

const ForecastCard = ({dayItem}: {dayItem:ForecastDay}) => {

    const {t} = useTranslation();


    const {date: dateString} = dayItem;
    const date: Date = new Date(dateString);
    const today: Date = new Date();
    const tomorrow: Date = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);


    date.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    tomorrow.setHours(0,0,0,0);

    const formatDate = (d: Date) =>{
        return new Intl.DateTimeFormat('et-EE').format(d);
    }

    const displayDate = () =>{
        if (formatDate(date)===formatDate(today)) return t('today');
        if (formatDate(date)===formatDate(tomorrow)) return t('tomorrow');

        return formatDate(date);
    }


    return (
        <Link className={"card-wrapper"}
            to={`/details/${dayItem.date}`}
            state={{passedDay: dayItem}}
        >
            <div className="card">
                <div className="card-left">
                    <div className="text-m"><img src={`https:${dayItem.day.condition?.icon}`} alt="weather icon"/></div>
                    <div className="text-s">
                        <p className="text-m m-0 text-bold">{displayDate()}</p>
                        <p className="text-m mt-1 text-secondary">{dayItem.day.condition.text}</p>
                    </div>
                </div>
                <div className="card-right">
                    <p className="text-m text-bold">{dayItem.day.maxtemp_c}°C</p>
                    <p className="text-m text-secondary">{dayItem.day.mintemp_c}°C</p>
                </div>
            </div>
        </Link>
    )
}
export default ForecastCard;