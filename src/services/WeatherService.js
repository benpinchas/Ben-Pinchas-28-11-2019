import axios from 'axios'
import StorageService from './StorageService'
import * as FakeResponse from './FakeResponse'

const BASE_URL = 'http://dataservice.accuweather.com'
const API_KEY = 'nlHrBj3x0ff0f5uJ1hjANgFi9wGiHlWQ'
const FAVORITE_LOCATIONS_STORAGE_KEY = 'FAVORITE_LOCATIONS'


function getFavoriteLocations() {
  return StorageService.load(FAVORITE_LOCATIONS_STORAGE_KEY)
}

function saveFavoriteLocations(locationDetails) {
  return StorageService.store(FAVORITE_LOCATIONS_STORAGE_KEY, locationDetails)
}

//FIX
async function getLocationSuggests(queryString) {
  console.log('FETCHING SUGGESTS FOR', queryString)
  return FakeResponse.locationSuggests
  const url = BASE_URL + '/locations/v1/cities/autocomplete?apikey=' + API_KEY + '&q=' + queryString
  const res = await axios.get(url)
  return res.data
}


//FIX
async function getLocationCurrentWeatherByKey(locationKey) {
  console.log('FETCHING CURR WEATHER FOR ', locationKey)
  return FakeResponse.currWeather
  const url = BASE_URL + '/currentconditions/v1/' + locationKey + '?apikey=' + API_KEY
  const res = await axios.get(url)
  return res.data[0]
}

//FIX
async function getLocationweekForcastByKey(locationKey) {
  console.log('FETCHING WEEK FORCAST FOR ', locationKey)
  return await FakeResponse.weekForcast
}



export default {
  getLocationSuggests,
  getLocationCurrentWeatherByKey,
  getLocationweekForcastByKey,
  getFavoriteLocations,
  saveFavoriteLocations
}









let temp = [
  {
    "Version": 1,
    "Key": "215854",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Tel Aviv",
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "TA",
      "LocalizedName": "Tel Aviv"
    }
  },
  {
    "Version": 1,
    "Key": "3431644",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Telanaipura",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JA",
      "LocalizedName": "Jambi"
    }
  },
  {
    "Version": 1,
    "Key": "300558",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Telok Blangah New Town",
    "Country": {
      "ID": "SG",
      "LocalizedName": "Singapore"
    },
    "AdministrativeArea": {
      "ID": "05",
      "LocalizedName": "South West"
    }
  },
  {
    "Version": 1,
    "Key": "325876",
    "Type": "City",
    "Rank": 51,
    "LocalizedName": "Telford",
    "Country": {
      "ID": "GB",
      "LocalizedName": "United Kingdom"
    },
    "AdministrativeArea": {
      "ID": "TFW",
      "LocalizedName": "Telford and Wrekin"
    }
  },
  {
    "Version": 1,
    "Key": "169072",
    "Type": "City",
    "Rank": 51,
    "LocalizedName": "Telavi",
    "Country": {
      "ID": "GE",
      "LocalizedName": "Georgia"
    },
    "AdministrativeArea": {
      "ID": "KA",
      "LocalizedName": "Kakheti"
    }
  },
  {
    "Version": 1,
    "Key": "230611",
    "Type": "City",
    "Rank": 51,
    "LocalizedName": "Telsiai",
    "Country": {
      "ID": "LT",
      "LocalizedName": "Lithuania"
    },
    "AdministrativeArea": {
      "ID": "TE",
      "LocalizedName": "Telšiai"
    }
  },
  {
    "Version": 1,
    "Key": "2723742",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Telégrafo",
    "Country": {
      "ID": "BR",
      "LocalizedName": "Brazil"
    },
    "AdministrativeArea": {
      "ID": "PA",
      "LocalizedName": "Pará"
    }
  },
  {
    "Version": 1,
    "Key": "186933",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Tela",
    "Country": {
      "ID": "HN",
      "LocalizedName": "Honduras"
    },
    "AdministrativeArea": {
      "ID": "AT",
      "LocalizedName": "Atlántida"
    }
  },
  {
    "Version": 1,
    "Key": "3453754",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Telaga Asih",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JB",
      "LocalizedName": "West Java"
    }
  },
  {
    "Version": 1,
    "Key": "3453755",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Telagamurni",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JB",
      "LocalizedName": "West Java"
    }
  }
]

