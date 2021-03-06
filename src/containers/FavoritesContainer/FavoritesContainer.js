import React, { Component } from 'react';
import './style.scss'
//router
import { withRouter } from 'react-router-dom'
//store
import { connect } from 'react-redux'
import { setSelectedLocationAction } from '../../store/actions/locationActions'
//cmps
import LocationList from './components/LocationList/LocationList';


class FavoritesContainer extends Component {


   handleLocationClick = (location) => {
      this.props.setSelectedLocation(location)
      this.props.history.push('/')
   }

   render() {
      const favoriteLocationsToDisplay = this.props.favorites ?
         <LocationList locations={this.props.favorites} onLocationClick={this.handleLocationClick} /> :
         'No locations..'

      return (
         <>
            {favoriteLocationsToDisplay}
         </>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      favorites: state.locationReducer.favorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setSelectedLocation: (locationDetails) => dispatch(setSelectedLocationAction(locationDetails))
   }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer));

