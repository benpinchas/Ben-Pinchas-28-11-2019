import {
   FETCH_LOCATION_NAME_SUGGESTIONS
} from '../types'


const initState = {
   locationSuggests: [],
   selectedLocation: null
}


const locationReducer =  (state=initState, action) => {

   switch(action.type) {
      case FETCH_LOCATION_NAME_SUGGESTIONS: 
      return {...state, locationSuggests: action.payload}
   }


   return state
}

export default locationReducer