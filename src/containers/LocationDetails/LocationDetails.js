import React from 'react';
import './style.scss'
//store
import {connect} from 'react-redux'

const LocationDetails = ({locationDetails , currentWeather, weeklyForcast}) => {
   const name = locationDetails? locationDetails.LocalizedName : 'Loading..'
   const temperature = '000'
   const weatherText = 'nnnnnn'
   return (
      <div className="location-details-cmp content">

         <div>
            <div className="top">
               <img src="https://media.timeout.com/images/105433594/630/472/image.jpg" />
               <div className="name-temperature-container">
                  <h3>{name}</h3>
                  <h3> {temperature} </h3>
               </div>
               <div>
                   &#10084;
               </div>
            </div>
         </div>


         <h3 className="weather-text-container">
            {weatherText}
         </h3>


         

      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      locationDetails: state.locationReducer.selectedLocation.details
   }
}

export default connect(mapStateToProps)(LocationDetails);


