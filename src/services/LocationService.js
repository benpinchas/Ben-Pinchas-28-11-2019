import axios from 'axios'
import StorageService from './StorageService'

const BASE_URL = 'http://dataservice.accuweather.com/locations/v1/cities/' 
const API_KEY = 'nlHrBj3x0ff0f5uJ1hjANgFi9wGiHlWQ'
const FAVORITE_LOCATIONS_STORAGE_KEY = 'FAVORITE_LOCATIONS'


function getFavoriteLocations() {
    return StorageService.load(FAVORITE_LOCATIONS_STORAGE_KEY)
}

function saveFavoriteLocations(locationDetails) {
  return StorageService.store(FAVORITE_LOCATIONS_STORAGE_KEY, locationDetails)
}

async function getLocationSuggests(queryString) {
  return queryString? temp : ''
   const url = BASE_URL+'autocomplete?apikey='+API_KEY+'&q='+queryString
   const res = await axios.get(url)
  return res.data
}     


//FIX
async function getLocationCurrentWeatherByKey(locationKey) {
  return await [
    {
      "LocalObservationDateTime": "2019-11-28T21:31:00+02:00",
      "EpochTime": 1574969460,
      "WeatherText": "Cloudy",
      "WeatherIcon": 7,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": false,
      "Temperature": {
        "Metric": {
          "Value": 17.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 63,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    }
  ][0]
}

//FIX
async function getLocationweekForcastByKey(locationKey) {
    return await  [
      {
        "Date": "2019-11-29T07:00:00+02:00",
        "EpochDate": 1575003600,
        "Temperature": {
          "Minimum": {
            "Value": 13.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 23.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
      },
      {
        "Date": "2019-11-30T07:00:00+02:00",
        "EpochDate": 1575090000,
        "Temperature": {
          "Minimum": {
            "Value": 13.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 23.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 4,
          "IconPhrase": "Intermittent clouds",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
      },
      {
        "Date": "2019-12-01T07:00:00+02:00",
        "EpochDate": 1575176400,
        "Temperature": {
          "Minimum": {
            "Value": 14.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 23.2,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 39,
          "IconPhrase": "Partly cloudy w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Heavy"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
      },
      {
        "Date": "2019-12-02T07:00:00+02:00",
        "EpochDate": 1575262800,
        "Temperature": {
          "Minimum": {
            "Value": 13.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 23,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 3,
          "IconPhrase": "Partly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
      },
      {
        "Date": "2019-12-03T07:00:00+02:00",
        "EpochDate": 1575349200,
        "Temperature": {
          "Minimum": {
            "Value": 12.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 22.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 3,
          "IconPhrase": "Partly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
      }
    ]
}



export default  {
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

