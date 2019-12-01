import React from 'react';
import './style.scss' 
//store
import {connect} from 'react-redux'
import { toggleTemperatureUnitAction } from '../../store/actions/weatherActions';

const ToggleUnit = ({temperatureUnit, toggleTemperatureUnit}) => {

return (
 <div className="toggle-unit-cmp" onClick={toggleTemperatureUnit}> 
    <button className={temperatureUnit === 'C'?'active' : ''}>° C</button> 
    <span> | </span>
    <button className={temperatureUnit !== 'C'?'active' : ''}>° F</button>
 </div>
 );
}

const mapStateToProps = (state) => {
   return {
      temperatureUnit: state.weatherReducer.unit
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      toggleTemperatureUnit: () => dispatch(toggleTemperatureUnitAction())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleUnit);