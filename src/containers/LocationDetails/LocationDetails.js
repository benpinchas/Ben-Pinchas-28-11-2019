import React, { Component } from 'react';
import './style.scss'
//store
import { connect } from 'react-redux'
import {toggleLocationFromFavoritesAction} from '../../store/actions/locationActions'
//cmps
import WeekForcast from './components/WeekForcast/WeekForcast';
import ToggleHeart from '../../components/util/ToggleHeart/ToggleHeart';
//services
import LocationService from '../../services/LocationService'

class LocationDetails extends Component {
   state = {
      currentWeather: null,
      weekForcast: []
   }

   componentDidMount() {
      this.fetchCurrentWeather()
      this.fetchWeekForcast()
   }

   fetchCurrentWeather = async () => {
      const locationKey = this.props.selectedLocation.Key
      const currentWeather = await LocationService.getLocationCurrentWeatherByKey(locationKey)
      this.setState({ currentWeather })
   }

   fetchWeekForcast = async () => {
      const locationKey = this.props.selectedLocation.Key
      let weekForcast = await LocationService.getLocationweekForcastByKey(locationKey)
      this.setState({ weekForcast })
   }

   toggleLocationFromFavorites = () => {
      this.props.toggleLocationFromFavorites(this.props.selectedLocation)
   }

   render() {
      const { currentWeather, weekForcast } = this.state
      const {selectedLocation, favorites} = this.props
      const locationName = selectedLocation.LocalizedName
      const weatherText = currentWeather ? currentWeather.WeatherText : 'Loading..'
      const temperature = currentWeather ? currentWeather.Temperature.Metric.Value : 'Loading..'
      const isOnFavorites = favorites? favorites.find(location => location.Key === selectedLocation.Key) : false

      return (
         <div className="location-details-cmp content">
            <div>
               <div className="top content">
                  <img className="location-thumbnail" src="https://media.timeout.com/images/105433594/630/472/image.jpg" />
                  <div className="name-temperature-container">
                     <h3>{locationName}</h3>
                     <h3> {temperature} </h3>
                  </div>
                  <div>
                     <ToggleHeart onClick={this.toggleLocationFromFavorites} isChecked={isOnFavorites} />
                  </div>
               </div>
            </div>

            <h3 className="weather-text-container">
               {weatherText}
            </h3>

            <WeekForcast weekForcast={weekForcast} />
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      selectedLocation: state.locationReducer.selectedLocation,
      favorites: state.locationReducer.favorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      toggleLocationFromFavorites: (location) => dispatch(toggleLocationFromFavoritesAction(location))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);

