import React, { createContext, useState, useEffect } from 'react';
import { fetchWeather } from '../../api/weather';

export const WeatherContext = createContext({
    weather: undefined,
    search: '',
    hasError: { hasError: false, message: '' },
    setWeather: () => { },
    fetchWeatherSearch: () => { }
});

const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(undefined);
    const [search, setSearch] = useState('');
    const [isFetching, setFetching] = useState(false);
    const [hasError, setError] = useState({ hasError: false, message: '' });
    const fetchWeatherSearch = (search) => setSearch(search);

    useEffect(() => {
        const getWeather = async () => {
            setFetching(true);
            try {
                const response = await fetchWeather();
                setWeather(response)
            } catch (error) {
                setError({ hasError: true, message: error });
            } finally {
                setFetching(false);
            }
        }
        getWeather();

    }, [search])

    return (
        <WeatherContext.Provider value={{
            weather,
            search,
            fetchWeatherSearch,
            hasError
        }}>
            {children}
        </WeatherContext.Provider>
    )
}
export default WeatherProvider;