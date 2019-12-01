import React from 'react';
import './style.scss' 
//store
import {connect} from 'react-redux'
import {toggleThemeAction} from '../../../store/actions/themeActions'

const ToggleTheme = (props) => {
const style = {opacity: props.theme === 'light'? 0.6 : 1} 
return (
 <button onClick={props.toggleTheme} style={style}>Dark mode</button>
 );
}

const mapStateToProps = (state) => {
   return {
      theme: state.themeReducer
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      toggleTheme: () => dispatch(toggleThemeAction())
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToggleTheme);