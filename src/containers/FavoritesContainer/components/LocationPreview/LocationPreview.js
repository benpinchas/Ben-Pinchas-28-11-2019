import React, { Component } from 'react';
import './style.scss'
//store
import {connect} from 'react-redux'
//services
import WeatherService from '../../../../services/WeatherService'


class LocationPreview extends Component {
   state = {
      currentWeather: null
   }

   componentDidMount() {
      this.fetchCurrentWeather()
   }

   fetchCurrentWeather = async () => {
      const locationKey = this.props.location.Key
      const currentWeather = await WeatherService.getLocationCurrentWeatherByKey(locationKey)
      this.setState({ currentWeather })
   }

   handleClick = () => {
      const { location } = this.props
      this.props.onLocationClick(location)
   }

   render() {
      const { location , temperatureUnit} = this.props
      const { currentWeather } = this.state
     
      let weatherIconSrc, temperature
      if (currentWeather) { //FIX loading/error
         temperature = temperatureUnit === 'C' ?
            currentWeather.Temperature.Metric.Value + ' ° C' :
            currentWeather.Temperature.Imperial.Value + ' ° F'
         weatherIconSrc = WeatherService.getWeatherIconSrc(currentWeather.WeatherIcon)
      }
      return (
         <li className="location-preview-cmp floating-card" onClick={this.handleClick}>
            <span className="location-name">
               {location.LocalizedName}
            </span>

            <div className="icon-temperature-container">
               <img src={weatherIconSrc} />
               <span> {temperature} </span>
            </div>

         </li>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      temperatureUnit: state.weatherReducer.unit
   }
}

export default connect(mapStateToProps)(LocationPreview);

