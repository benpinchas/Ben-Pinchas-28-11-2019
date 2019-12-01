import axios from 'axios'
import StorageService from './StorageService'
import * as FakeResponse from './FakeResponse'

const BASE_URL = 'https://dataservice.accuweather.com'
const API_KEY = 'zsGlW5LWHSfncy9Loq7xgypCDO1ShYbS'
const FAVORITE_LOCATIONS_STORAGE_KEY = 'FAVORITE_LOCATIONS'


function getFavoriteLocations() {
  return StorageService.load(FAVORITE_LOCATIONS_STORAGE_KEY)
}

function saveFavoriteLocations(locationDetails) {
  return StorageService.store(FAVORITE_LOCATIONS_STORAGE_KEY, locationDetails)
}

//FIX
async function getLocationSuggests(queryString) {
  // return FakeResponse.locationSuggests
  const url = BASE_URL + '/locations/v1/cities/autocomplete?apikey=' + API_KEY + '&q=' + queryString
  try {
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    throw err
  }
}


//FIX
async function getLocationCurrentWeatherByKey(locationKey) {
  // return FakeResponse.currWeatherLong
  const url = BASE_URL + '/currentconditions/v1/' + locationKey + '?apikey=' + API_KEY + '&details=true'
  try {
    const res = await axios.get(url)
    return res.data[0]
  } catch (err) {
    throw err
  }

}

//FIX
async function getLocationweekForecastByKey(locationKey) {
  console.log('FETCHING WEEK FORCAST FOR ', locationKey)
  return await FakeResponse.weekForecast
  const url = ''
  try {
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    throw err
  }
}


function convertCelsiusToFahrenheit(degrees) {
  return Math.floor(degrees * 1.8 + 32)
}

function getWeatherIconSrc(iconNumber) {
  const base_icon_url = '/assets/weather-icons/'
  if (iconNumber === 1) {
    //sun
    return base_icon_url + 'sun.svg'
  } else if (iconNumber >= 2 && iconNumber <= 4) {
    // strong sun , few clouds
    return base_icon_url + 'sunny.svg'
  } else if (iconNumber >= 6 && iconNumber <= 8) {
    // heavy clouds, little sun
    return base_icon_url + 'cloudy.svg'
  } else if (iconNumber === 11) {
    //fog
    return base_icon_url + 'fog.svg'
  } else if (iconNumber >= 12 && iconNumber <= 18) {
    //rain
    return base_icon_url + 'rain.svg'
  } else if (iconNumber === 22) {
    //snow
    return base_icon_url + 'snow.svg'
  } else if (iconNumber >= 19 && iconNumber <= 23) {
    //cloud
    return base_icon_url + 'clouds.svg'
  } else if (iconNumber >= 38 && iconNumber <= 42) {
    // storm
    return base_icon_url + 'storm.svg'
  } else {
    // general
    return base_icon_url + 'general.svg'
  }
}


export default {
  getLocationSuggests,
  getLocationCurrentWeatherByKey,
  getLocationweekForecastByKey,
  getFavoriteLocations,
  saveFavoriteLocations,
  getWeatherIconSrc,
  convertCelsiusToFahrenheit
}



