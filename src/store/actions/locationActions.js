//serivce
import LocationService from '../../services/LocationService'
//types
import {
   FETCH_LOCATION_NAME_SUGGESTIONS,
   SET_SELECTED_LOCATION
} from '../types'

export function fetchLocationNameSuggestions(queryString) {
   return async(dispatch) => {
      //get location name suggestion  //FIX
      let suggestions = await LocationService.getLocationNameSuggestions(queryString) || []
      dispatch({ type: FETCH_LOCATION_NAME_SUGGESTIONS, payload: suggestions })
   }
}


export function setSelectedLocation() {
   return async (dispatch) => {
      dispatch({ type: SET_SELECTED_LOCATION, payload: {} })
   }
}





















