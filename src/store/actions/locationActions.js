//serivce
import LocationService from '../../services/LocationService'
//types
import {
   SET_LOCATION_SUGGESTS,
   SET_SELECTED_LOCATION,
   SET_FAVORITE_LOCATIONS
} from '../types'
import { async } from 'q'

export function fetchLocationSuggestsAction(queryString) {
   return async (dispatch) => {
      let suggestions = await LocationService.getLocationSuggests(queryString)
      dispatch({ type: SET_LOCATION_SUGGESTS, payload: suggestions })
   }
}


export function setSelectedLocationAction(locationDetails) {
   return async (dispatch) => {
      dispatch({ type: SET_SELECTED_LOCATION, payload: locationDetails })
   }
}

async function fetchSelectedLocationCurrentWeatherAction(locationKey) {
      const currentWeather = await LocationService.getLocationCurrentWeatherByKey(locationKey)
}

async function fetchSelectedLocationweekForcastAction(locationKey) {
      const weekForcast = await LocationService.getLocationweekForcastByKey(locationKey)
}

export function fetchFavoriteLocationsAction() {
   return async (dispatch, getState) => {
      if (!getState().locationReducer.favorites) {
         const favoriteLocations = await temp
         dispatch({ type: SET_FAVORITE_LOCATIONS, payload: favoriteLocations })
      }
   }
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
   }
]














