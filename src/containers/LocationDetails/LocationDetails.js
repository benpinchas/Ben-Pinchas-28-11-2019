import React, { Component } from 'react';
import './style.scss'
//store
import { connect } from 'react-redux'
import { toggleLocationFromFavoritesAction, fetchFavoriteLocationsAction } from '../../store/actions/locationActions'
//cmps
import WeekForcast from './components/WeekForcast/WeekForcast';
import ToggleHeart from '../../components/util/ToggleHeart/ToggleHeart';
//services
import WeatherService from '../../services/WeatherService'

class LocationDetails extends Component {
   state = {
      currentWeather: 'FETCHING',
      weekForcast: []
   }


   //---------------------------------
   componentDidMount() {
      this.fetchCurrentWeather()
      this.fetchWeekForcast()
      this.props.fetchFavoriteLocations()
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.selectedLocation !== this.props.selectedLocation) { // our selected location updated, fetch weather info
         this.fetchCurrentWeather()
         this.fetchWeekForcast()
      }
   }

   //----------------------------------

   fetchCurrentWeather = async () => {
      const locationKey = this.props.selectedLocation.Key
      const currentWeather = await WeatherService.getLocationCurrentWeatherByKey(locationKey)
      this.setState({ currentWeather })
   }

   fetchWeekForcast = async () => {
      const locationKey = this.props.selectedLocation.Key
      let weekForcast = await WeatherService.getLocationweekForcastByKey(locationKey)
      this.setState({ weekForcast })
   }

   toggleLocationFromFavorites = () => {
      this.props.toggleLocationFromFavorites(this.props.selectedLocation)
   }

   render() {
      const { selectedLocation, favorites } = this.props
      const { currentWeather, weekForcast } = this.state

      const locationName = selectedLocation.LocalizedName
      const isOnFavorites = favorites.find(location => location.Key === selectedLocation.Key)

      let temperature, weatherText
      if (currentWeather === 'FETCHING') {
         temperature = 'Loading..'
         weatherText = 'Loading..'
      } else {
         temperature = currentWeather.Temperature.Metric.Value
         weatherText = currentWeather.WeatherText
      }


      return (
         <div className="location-details-cmp">
            
            <div className="top content floating-card">
               <div className="name-temperature-container">
                  <h2>{locationName}</h2>
                  <h3 className="temperature"> {temperature} </h3>
               </div>
               <div>
                  <ToggleHeart onClick={this.toggleLocationFromFavorites} isChecked={isOnFavorites} />
               </div>
            </div>


            <h3 className="weather-text floating-card">
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
      toggleLocationFromFavorites: (location) => dispatch(toggleLocationFromFavoritesAction(location)),
      fetchFavoriteLocations: () => dispatch(fetchFavoriteLocationsAction()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);

