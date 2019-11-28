//serivce
import LocationService from '../../services/LocationService'
//types
import {
   FETCH_LOCATION_SUGGESTS,
   SET_SELECTED_LOCATION
} from '../types'

export function fetchLocationSuggestsAction(queryString) {
   return async(dispatch) => {
      //get location name suggestion  //FIX
      let suggestions = await LocationService.getLocationNameSuggestions(queryString) || []
      dispatch({ type: FETCH_LOCATION_SUGGESTS, payload: suggestions })
   }
}


export function setSelectedLocation() {
   return async (dispatch) => {
      dispatch({ type: SET_SELECTED_LOCATION, payload: {} })
   }
}





















