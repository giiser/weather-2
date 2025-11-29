import type {ChangeEvent} from "react";

export interface WeatherData {
    location: {
        name: string;
        // region?: string;
    };
    current: {
        temp_c:number;
        humidity: number;
        wind_kph: number;
        condition: {
            icon: string;
            text: string;
        };
        forecast: {
            forecastday: [
                {
                    date_epoch: number;
                    day: {
                        maxtemp_c: number;
                        mintemp_c: number;
                        avghumidity: number;
                        maxwind_kph: number;
                        daily_chance_of_rain: number;
                        uv: number;
                    };
                    astro: {
                        sunrise: string;
                        sunset: string;
                    }
                }
            ]
        }
    }
}

export interface ForecastContextType {
    forecast: WeatherData; // Replace 'any' with your actual Weather Data Interface (e.g., WeatherData)
    loading: boolean;
    error: string | null;
    city: string;
    language: string;
    changeCity: (e: ChangeEvent<HTMLSelectElement>) => void;
    changeLanguage: (e: ChangeEvent<HTMLSelectElement>) => void;
}