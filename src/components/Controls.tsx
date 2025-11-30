import {useState} from "react";
import {useForecast} from "../context/ForecastContext.tsx";
import {useTranslation} from "react-i18next";

const Controls = () => {

    //state to control visibility of controls
    const [hidden, setHidden] = useState(()=>{
        const hidden = localStorage.getItem("hidden");
        return hidden || false;
    });

    //fetch city and language from context
    const {city, changeCity, language, changeLanguage} = useForecast();



    const isHidden = hidden?'hidden':'';

    //function to show and hide filter
    const hideFilter = () => {
        setHidden(!hidden);
    }

    const {t} = useTranslation();


    return (
        <div className={"container"}>
            <button className={'btn-controls'} onClick={hideFilter}>{hidden?t('showControlsButton'):t('hideControlsButton')}</button>
            <div className={`select-wrapper ${isHidden}`}>
                <label htmlFor="city" className="text-secondary">{t('city')}</label>
                <select id="city" className="citySelect" value={city} onChange={changeCity}>
                    <option value="Tallinn">{t('tallinn')}</option>
                    <option value="Lviv">{t('lviv')}</option>
                    <option value="Chernihiv">{t('chernihiv')}</option>
                </select>
            </div>
            <div className={`select-wrapper ${isHidden}`}>
                <label htmlFor="lang" className="text-secondary">{t('language')}</label>
                <select id="lang" value={language} onChange={changeLanguage}>
                    <option value="en">English</option>
                    <option value="uk">Українська</option>
                </select>
            </div>
        </div>
    )
}

export default Controls;