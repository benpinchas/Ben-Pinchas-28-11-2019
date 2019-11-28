//serivce
import LocationService from '../../services/LocationService'
//types
import {
   SET_LOCATION_SUGGESTS,
   SET_SELECTED_LOCATION_DETAILS
} from '../types'

export function fetchLocationSuggestsAction(queryString) {
   return async (dispatch) => {
      //get location name suggestion  //FIX
      let suggestions = await LocationService.getLocationNameSuggestions(queryString)
      dispatch({ type: SET_LOCATION_SUGGESTS, payload: suggestions })
   }
}


export function setSelectedLocationNameAction(details) {
   return { type: SET_SELECTED_LOCATION_DETAILS, payload: details }
}





















