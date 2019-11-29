import React, { Component } from 'react';
import './style.scss'
//services
import LocationService from '../../../../services/LocationService'


class LocationPreview extends Component {
   state = {
      temperature: null
   }

   componentDidMount() {
      this.fetchTemperature()
   }

   fetchTemperature = async () => {
      const locationKey = this.props.location.Key
      const currentForcast = await LocationService.getLocationCurrentWeatherByKey(locationKey)
      const temperature = currentForcast.Temperature.Metric.Value
      this.setState({ temperature })
   }

   render() {
      const { location } = this.props
      const { temperature } = this.state
      return (
         <li className="location-preview-cmp floating-card">
            <span className="location-name">
               {location.LocalizedName}
            </span>
            <span> {temperature} </span>

         </li>
      );
   }
}

export default LocationPreview;

