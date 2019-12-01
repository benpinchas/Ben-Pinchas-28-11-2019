import React, { Component } from 'react';
import './style.scss'
//store
import { connect } from 'react-redux'
import { toggleLocationFromFavoritesAction } from '../../store/actions/locationActions'
//cmps
import WeekForecast from './components/WeekForecast/WeekForecast';
import ToggleHeart from '../../components/util/ToggleHeart/ToggleHeart';
//services
import WeatherService from '../../services/WeatherService'
import UtilService from '../../services/UtilService'

class LocationDetails extends Component {
   state = {
      currentWeather: 'FETCHING',
      weekForecast: []
   }


   componentDidMount() {
      this.fetchCurrentWeather()
      this.fetchWeekForecast()
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState && prevProps.selectedLocation !== this.props.selectedLocation) { // our selected location updated, fetch weather info
         this.fetchCurrentWeather()
         this.fetchWeekForecast()
      }
   }

   
   fetchCurrentWeather = async () => {
      const locationKey = this.props.selectedLocation.Key
      try {
         const currentWeather = await WeatherService.getLocationCurrentWeatherByKey(locationKey)
         this.setState({ currentWeather })
      } catch (err) {
         this.setState({ currentWeather: 'ERROR' })
      }


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

      let temperature, weatherText, weatherIconSrc, hour, partOfDay, timeContainerStyle, windSpeed
      if (currentWeather === 'FETCHING') {
         temperature = 'Loading..'
         weatherText = 'Loading..'
         weatherIconSrc = 'https://svgshare.com/i/GVB.svg'
      } else if (currentWeather === 'ERROR') {
         weatherIconSrc = 'https://svgshare.com/i/GV2.svg'
         weatherText = 'Please try later!'
      } else {
         temperature = temperatureUnit === 'C' ?
            currentWeather.Temperature.Metric.Value + ' ° C' :
            currentWeather.Temperature.Imperial.Value + ' ° F'
         weatherText = currentWeather.WeatherText
         weatherIconSrc = WeatherService.getWeatherIconSrc(currentWeather.WeatherIcon)
         hour = UtilService.getFormattedHour(currentWeather.LocalObservationDateTime)
         partOfDay = currentWeather.IsDayTime ? 'Day' : 'Night'
         timeContainerStyle = { backgroundColor: currentWeather.IsDayTime ? 'lightblue' : '#214c6d' }
         windSpeed = currentWeather.Wind.Speed.Metric.Value + 'Km/h'
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


            <div className="test-1">
               <div className="floating-card location-time-container" style={timeContainerStyle}>
                  {hour &&
                     <h3>{ hour} | {partOfDay}</h3>
                  }
               </div>

               <div className="floating-card wind">
                  {windSpeed &&
                     <>
                        <img src='https://svgshare.com/i/GW2.svg' />
                        <h3>Wind</h3>
                        <span>{windSpeed}</span>
                     </>
                  }
               </div>
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
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);

