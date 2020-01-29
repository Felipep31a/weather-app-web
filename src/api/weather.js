import { API_WEATHER_KEY } from './keys';

export const fetchWeather = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.weatherstack.com/current?access_key=${API_WEATHER_KEY}&query=Manaus`)
            .then(res => res.json())
            .then(response => {
                if (response.hasOwnProperty('success') && response.success == false) {
                    reject(response.error)
                }
                resolve(response);
            })
            .catch(err => reject(err));
    })
}