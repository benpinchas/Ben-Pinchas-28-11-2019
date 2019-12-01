import {TOGGLE_THEME} from '../types'

const initState = 'light'

const themeReducer = (state=initState, action) => {
   if (action.type === TOGGLE_THEME) return state === 'light' ? 'dark' : 'light'
   return state
}

export default themeReducer