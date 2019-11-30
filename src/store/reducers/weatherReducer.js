import {
   TOGGLE_TEMPERATURE_UNIT
} from '../types'


const initState = {
   unit: 'C'
}

const weatherReducer = (state = initState, action) => {
   switch (action.type) {
      case TOGGLE_TEMPERATURE_UNIT:
         const unit = state.unit === 'C' ? 'F' : 'C'
         return { ...state, unit }
      default:
         return state
   }
}

export default weatherReducer
