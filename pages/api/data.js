import config from './config';

export default async function handler(req, res) {

  const cron = require('node-cron');

  const { city } = config;
  const getCityData = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
  );
  const cityData = await getCityData.json();

  const { latitude, longitude, country } = cityData.results[0];

  // cronTask = cron.schedule('00 59 * * *', async () => {
  const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=relative_humidity_2m,weather_code,visibility,apparent_temperature,wind_speed_10m,temperature_2m,is_day,precipitation,rain,showers&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,uv_index_max,sunrise,sunset&timeformat=unixtime&timezone=auto`
  );
  const data = await getWeatherData.json();
 
  res.status(200).json(data, cityData);
  }

  // cron.schedule('* 59 * * *', async () => {
  //   try {
  //     await fetchWeatherData();
  //   } catch (error) {
  //     console.error('Erreur lors du chargement des données', error);
  //   }
  // });
  
