import React, { Component } from 'react';
import './style.scss'
//store
import { connect } from 'react-redux'
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

   render() {
      const { currentWeather, weekForcast } = this.state
      const locationName = this.props.selectedLocation.LocalizedName
      const weatherText = currentWeather ? currentWeather.WeatherText : 'Loading..'
      const temperature = currentWeather ? currentWeather.Temperature.Metric.Value : 'Loading..'
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
                     <ToggleHeart onClick={''} />
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
      selectedLocation: state.locationReducer.selectedLocation
   }
}

export default connect(mapStateToProps)(LocationDetails);


const LocationDetailsOLD = ({ selectedLocation }) => {
   console.log(selectedLocation)
   return 'LocationDetails'
   // const name = 'Tel Aviv'

   // const ben = currentWeather === 'FETCHING' ? 'LOADING!!!' : '38C'

   // const weatherText = currentWeather ? currentWeather.WeatherText : 'loading'

   // const benn = weekForcast ? '' : ''

   // return (
   //    <div className="location-details-cmp content">

   //       <div>
   //          <div className="top content">
   //             <img className="location-thumbnail" src="https://media.timeout.com/images/105433594/630/472/image.jpg" />
   //             <div className="name-temperature-container">
   //                <h3>{name}</h3>
   //                <h3> {ben} </h3>
   //             </div>
   //             <div>
   //                <ToggleHeart onClick={''} />
   //             </div>
   //          </div>
   //       </div>

   //       <h3 className="weather-text-container">
   //          {weatherText}
   //       </h3>

   //       <weekForcast weekForcast={weekForcast} />
   //    </div>
   // );
}




