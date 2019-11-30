import React, { Component } from 'react';
import './style.scss'
//services
import WeatherService from '../../../../services/WeatherService'


class LocationPreview extends Component {
   state = {
      temperature: null
   }

   componentDidMount() {
      this.fetchTemperature()
   }

   fetchTemperature = async () => {
      const locationKey = this.props.location.Key
      const currentForcast = await WeatherService.getLocationCurrentWeatherByKey(locationKey)
      const temperature = currentForcast.Temperature.Metric.Value
      this.setState({ temperature })
   }

   handleClick = () => {
      const {location} = this.props
      this.props.onLocationClick(location)
   }

   render() {
      const { location, onLocationClick } = this.props
      const { temperature } = this.state
      return (
         <li className="location-preview-cmp floating-card" onClick={this.handleClick}>
            <span className="location-name">
               {location.LocalizedName}
            </span>
            <span> {temperature} </span>

         </li>
      );
   }
}

export default LocationPreview;

