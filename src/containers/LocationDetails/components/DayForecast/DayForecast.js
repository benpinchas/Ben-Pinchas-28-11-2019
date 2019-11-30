import React from 'react';
import './style.scss'
// store
import { connect } from 'react-redux'
//services
import WeatherService from '../../../../services/WeatherService'
import UtilService from '../../../../services/UtilService'

const DayForecast = ({ dayForecast, temperatureUnit }) => {
   const dayInWeek = UtilService.getDayInWeekByDate(dayForecast.Date)

   const celsiusDegrees = dayForecast.Temperature.Minimum.Value
   const temperature = temperatureUnit === 'C' ?
      celsiusDegrees + ' ° C' :
      WeatherService.convertCelsiusToFahrenheit(celsiusDegrees) + ' ° F'

   const weatherIconSrc = WeatherService.getWeatherIconSrc(dayForecast.Day.Icon)
   return (
      <li className="day-forecast-cmp floating-card">
         <span className="day"> {dayInWeek} </span>

         <div className="icon-temperature-container">
            <img src={weatherIconSrc} />
            <span> {temperature} </span>
         </div>
      </li>
   );
}

const mapStateToProps = (state) => {
   return {
      temperatureUnit: state.weatherReducer.unit
   }
}

export default connect(mapStateToProps)(DayForecast);