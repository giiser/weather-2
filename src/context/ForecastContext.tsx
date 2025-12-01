import { createContext, type ReactNode, type ChangeEvent, useContext, useEffect, useState, useMemo } from "react";
import i18n from "../util/i18n.ts";
import type { ForecastContextType, WeatherData } from "../util/interfaces.ts";


const ForecastContext = createContext<ForecastContextType | undefined>(undefined);
const API_URL = import.meta.env.VITE_BASE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export function ForecastProvider({ children }: { children: ReactNode }) {

    const [forecast, setForecast] = useState<WeatherData>({} as WeatherData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [city, setCity] = useState(() => {
        const city = localStorage.getItem("city");
        return city || 'Tallinn';
    });
    const [language, setLanguage] = useState(() => {
        const language = localStorage.getItem("language");
        return language || 'en';
    });



    //fetch forecast useEffect
    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const response = await fetch(`${API_URL}${API_KEY}&q=${city}&days=3&lang=${language}`);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                // Some APIs return 200 OK but contain an error object in the body
                if (data.error) {
                    throw new Error(data.error.message);
                }

                setForecast(data);

            } catch (err: any) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchForecast();
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
        localStorage.setItem('city', city);

    }, [city, language]);

    const changeCity = (e: ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value);
    }

    const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    }

    // 3. Memoize the value to prevent unnecessary re-renders
    const value = useMemo(() => ({
        forecast,
        loading,
        error,
        city,
        changeCity,
        language,
        changeLanguage
    }), [forecast, loading, error, city, language]);

    return (
        <ForecastContext.Provider value={value}>
            {children}
        </ForecastContext.Provider>
    )
}

export function useForecast() {
    const context = useContext(ForecastContext);
    if (context === undefined) {
        throw new Error("useForecast must be used within a ForecastProvider");
    }
    return context;
}