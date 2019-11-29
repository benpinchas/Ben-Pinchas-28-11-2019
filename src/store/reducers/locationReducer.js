import {
   SET_LOCATION_SUGGESTS,
   SET_SELECTED_LOCATION,
   SET_FAVORITE_LOCATIONS
} from '../types'


const initState = {
   locationSuggests: null, // [{...}, {...}]
   selectedLocation: {
      "Key": "215854",
      "LocalizedName": "Tel Aviv"
   },
   favorites: [] //[{...}, {...}]
}


const locationReducer = (state = initState, action) => {

   switch (action.type) {
      case SET_LOCATION_SUGGESTS:
         return { ...state, locationSuggests: action.payload }
      case SET_SELECTED_LOCATION:
         return { ...state, selectedLocation: action.payload }
      case SET_FAVORITE_LOCATIONS:
         return { ...state, favorites: action.payload }
      default:
         return state
   }
}

export default locationReducer