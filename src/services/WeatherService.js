import axios from 'axios'
import * as FakeResponse from './FakeResponse'
import config from '../config.js'

const BASE_URL = 'https://dataservice.accuweather.com'
const API_KEY = 'nlHrBj3x0ff0f5uJ1hjANgFi9wGiHlWQ'





async function getLocationSuggests(queryString) {
  // throw new Error()
  // return FakeResponse.locationSuggests
  const url = BASE_URL + '/locations/v1/cities/autocomplete?apikey=' + API_KEY + '&q=' + queryString
  try {
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    throw err
  }
}


async function getLocationCurrentWeatherByKey(locationKey) {
  // throw new Error()
  // return FakeResponse.currWeatherLong
  const url = BASE_URL + '/currentconditions/v1/' + locationKey + '?apikey=' + API_KEY + '&details=true'
  try {
    const res = await axios.get(url)
    return res.data[0]
  } catch (err) {
    throw err
  }

}

async function getLocationweekForecastByKey(locationKey) {
  // throw new Error()
  // return await FakeResponse.weekForecast
  const url = BASE_URL + '/forecasts/v1/daily/5day/' + locationKey + '?apikey=' + API_KEY + '&metric=true'
  try {
    const res = await axios.get(url)
    return res.data.DailyForecasts
  } catch (err) {
    throw err
  }
}


function convertCelsiusToFahrenheit(degrees) {
  return Math.floor(degrees * 1.8 + 32)
}


function getWeatherIconSrc(iconNumber) {
  const site_url = config.site_url
  const icon_folder_url = site_url + '/assets/weather-icons/'
  if (iconNumber === 1) {
    //sun
    return icon_folder_url + 'sun.svg'
  } else if (iconNumber >= 2 && iconNumber <= 4) {
    // strong sun , few clouds
    return icon_folder_url + 'sunny.svg'
  } else if (iconNumber >= 6 && iconNumber <= 8) {
    // heavy clouds, weak sun 
    return icon_folder_url + 'cloudy.svg'
  } else if (iconNumber === 11) {
    //fog
    return icon_folder_url + 'fog.svg'
  } else if (iconNumber >= 12 && iconNumber <= 18) {
    //rain
    return icon_folder_url + 'rain.svg'
  } else if (iconNumber === 22) {
    //snow
    return icon_folder_url + 'snow.svg'
  } else if (iconNumber >= 19 && iconNumber <= 23) {
    //clouds
    return icon_folder_url + 'clouds.svg'
  } else if (iconNumber >= 38 && iconNumber <= 42) {
    // storm
    return icon_folder_url + 'storm.svg'
  } else {
    // general
    return icon_folder_url + 'general.svg'
  }
}


export default {
  getLocationSuggests,
  getLocationCurrentWeatherByKey,
  getLocationweekForecastByKey,
  getWeatherIconSrc,
  convertCelsiusToFahrenheit
}



