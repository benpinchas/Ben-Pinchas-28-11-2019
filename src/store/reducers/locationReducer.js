import {
   SET_LOCATION_SUGGESTS,
   SET_SELECTED_LOCATION_DETAILS
} from '../types'


const initState = {
   locationSuggests: null, // [{...}, {...}]
   selectedLocation: {
      details: null,         // {...}
      currentWeather: null,  // {...}
      weeklyForcast: null   // [{...}, {...}]
   }
}


const locationReducer = (state = initState, action) => {

   switch (action.type) {
      case SET_LOCATION_SUGGESTS:
         return { ...state, locationSuggests: action.payload }
      case SET_SELECTED_LOCATION_DETAILS:
         return { ...state, selectedLocation: { ...state.selectedLocation, details: action.payload } }
   }


   return state
}

export default locationReducer