import React, { Component } from 'react';
import './style.scss'
//store
import { connect } from 'react-redux'
import { toggleLocationFromFavoritesAction, fetchFavoriteLocationsAction } from '../../store/actions/locationActions'
//cmps
import WeekForecast from './components/WeekForecast/WeekForecast';
import ToggleHeart from '../../components/util/ToggleHeart/ToggleHeart';
//services
import WeatherService from '../../services/WeatherService'

class LocationDetails extends Component {
   state = {
      currentWeather: 'FETCHING',
      weekForecast: []
   }


   //--------------------------------- FIX
   componentDidMount() {
      this.fetchCurrentWeather()
      this.fetchWeekForecast()
      this.props.fetchFavoriteLocations()
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.selectedLocation !== this.props.selectedLocation) { // our selected location updated, fetch weather info
         this.fetchCurrentWeather()
         this.fetchWeekForecast()
      }
   }

   //----------------------------------

   fetchCurrentWeather = async () => {
      const locationKey = this.props.selectedLocation.Key
      const currentWeather = await WeatherService.getLocationCurrentWeatherByKey(locationKey)
      this.setState({ currentWeather })
   }

   fetchWeekForecast = async () => {
      const locationKey = this.props.selectedLocation.Key
      let weekForecast = await WeatherService.getLocationweekForecastByKey(locationKey)
      this.setState({ weekForecast })
   }

   toggleLocationFromFavorites = () => {
      this.props.toggleLocationFromFavorites(this.props.selectedLocation)
   }

   render() {
      const { selectedLocation, favorites, temperatureUnit } = this.props
      const { currentWeather, weekForecast } = this.state

      const locationName = selectedLocation.LocalizedName
      const isOnFavorites = favorites.find(location => location.Key === selectedLocation.Key)

      //FIX
      let temperature, weatherText, weatherIconSrc
      if (currentWeather === 'FETCHING') {
         temperature = 'Loading..'
         weatherText = 'Loading..'
      } else {
         temperature = temperatureUnit === 'C' ?
            currentWeather.Temperature.Metric.Value + ' ° C' :
            currentWeather.Temperature.Imperial.Value + ' ° F'
         weatherText = currentWeather.WeatherText
         weatherIconSrc = WeatherService.getWeatherIconSrc(currentWeather.WeatherIcon) //FIX
      }


      return (
         <div className="location-details-cmp">

            <div className="top content floating-card">
               <div className="name-temperature-container">
                  <h2>{locationName}</h2>
                  <h3 className="temperature"> {temperature} </h3>
               </div>

               <div className="weather-icon-text">
                  <img src={weatherIconSrc} />
                  {weatherText}
               </div>


               <ToggleHeart onClick={this.toggleLocationFromFavorites} isChecked={isOnFavorites} />
            </div>


            <div className="location-time-container floating-card">
               <h3> 21:00 | Night</h3>
            </div>

            <WeekForecast weekForecast={weekForecast} />
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      selectedLocation: state.locationReducer.selectedLocation,
      favorites: state.locationReducer.favorites,
      temperatureUnit: state.weatherReducer.unit
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      toggleLocationFromFavorites: (location) => dispatch(toggleLocationFromFavoritesAction(location)),
      fetchFavoriteLocations: () => dispatch(fetchFavoriteLocationsAction()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);

