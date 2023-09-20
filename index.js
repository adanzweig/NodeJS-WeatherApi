require('dotenv').config()
/**
 * Get current weather using weatherAPI
 * @param {*} location 
 * @returns 
 */
async function getCurrentWeather(location){
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    try{
        const weatherFetch = await fetch(url);
        const weatherData = await weatherFetch.json();
        return weatherData;
    }catch(error){
        console.error('Error:',error);
    }
    
}
const location = 'San diego, california';
Promise.resolve(getCurrentWeather(location)).then(
    body=>console.log(body)
)