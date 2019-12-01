import { combineReducers } from 'redux'
import locationReducer from './locationReducer'
import weatherReducer from './weatherReducer'
import themeReducer from './themeReducer'
let rootReducer = combineReducers({
   locationReducer,
   weatherReducer,
   themeReducer
})

export default rootReducer