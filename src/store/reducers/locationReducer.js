import {
   FETCH_LOCATION_SUGGESTS
} from '../types'


const initState = {
   locationSuggests: [],
   selectedLocation: null
}


const locationReducer =  (state=initState, action) => {

   switch(action.type) {
      case FETCH_LOCATION_SUGGESTS: 
      return {...state, locationSuggests: action.payload}
   }


   return state
}

export default locationReducer