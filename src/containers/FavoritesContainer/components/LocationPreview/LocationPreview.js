import React, { Component } from 'react';
import './style.scss'
//store
import { connect } from 'react-redux'
//services
import WeatherService from '../../../../services/WeatherService'
//swal
import Swal from 'sweetalert2'

class LocationPreview extends Component {
   state = {
      currentWeather: 'FETCHING'
   }

   componentDidMount() {
      this.fetchCurrentWeather()
   }

   fetchCurrentWeather = async () => {
      const locationKey = this.props.location.Key
      try {
         const currentWeather = await WeatherService.getLocationCurrentWeatherByKey(locationKey)
         this.setState({ currentWeather })
      } catch (err) {
         this.setState({ currentWeather: 'ERROR' })
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Something went wrong!",
         })
      }
   }

   handleClick = () => {
      const { location } = this.props
      this.props.onLocationClick(location)
   }

   render() {
      const { location, temperatureUnit } = this.props
      const { currentWeather } = this.state

      let weatherIconSrc, temperature
      if (currentWeather === 'FETCHING') {
         weatherIconSrc = 'https://svgshare.com/i/GVB.svg' //loader
         temperature = 'Loading..'
      } else if (currentWeather == 'ERROR') {
         weatherIconSrc = 'https://svgshare.com/i/GV2.svg' //error
         temperature = '--'
      } else {
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

