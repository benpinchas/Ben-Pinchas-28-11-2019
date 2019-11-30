import { combineReducers } from 'redux'
import locationReducer from './locationReducer'
import weatherReducer from './weatherReducer'

let rootReducer = combineReducers({
   locationReducer,
   weatherReducer
})

export default rootReducer