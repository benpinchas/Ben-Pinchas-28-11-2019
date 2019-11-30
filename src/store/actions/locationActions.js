//serivces
import WeatherService from '../../services/WeatherService'
//types
import {
   SET_LOCATION_SUGGESTS,
   SET_SELECTED_LOCATION,
   SET_FAVORITE_LOCATIONS
} from '../types'

export function fetchLocationSuggestsAction(queryString) {
   return async (dispatch) => {
      let suggestions = await WeatherService.getLocationSuggests(queryString)
      dispatch({ type: SET_LOCATION_SUGGESTS, payload: suggestions })
   }
}


export function setSelectedLocationAction(locationDetails) {
   return async (dispatch) => {
      dispatch({ type: SET_SELECTED_LOCATION, payload: locationDetails })
   }
}

export function fetchFavoriteLocationsAction() {
   return async (dispatch, getState) => {
      if (!getState().locationReducer.favorites.length) {
         const favoriteLocations = await WeatherService.getFavoriteLocations()
         dispatch({ type: SET_FAVORITE_LOCATIONS, payload: favoriteLocations })
      }
   }
}

export function toggleLocationFromFavoritesAction(location) {
   return  (dispatch, getState) => {
      const favoritesCopy = getState().locationReducer.favorites.slice()
      const idx = favoritesCopy.findIndex(_location => _location.Key === location.Key)
      if (idx !== -1) {
         favoritesCopy.splice(idx, 1)
      }else {
         favoritesCopy.push(location)
      }
      dispatch({ type: SET_FAVORITE_LOCATIONS, payload: favoritesCopy })
      WeatherService.saveFavoriteLocations(favoritesCopy)
   }
}














