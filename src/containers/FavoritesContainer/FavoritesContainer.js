import React, {Component} from 'react';
import './style.scss' 
//store
import {connect} from 'react-redux'
import {fetchFavoriteLocationsAction} from '../../store/actions/locationActions'
//cmps
import LocationList from './components/LocationList/LocationList';


class FavoritesContainer extends Component {

   componentDidMount() {
      this.props.fetchFavoriteLocations()
   }

   render() {
      const favoriteLocationsToDisplay = this.props.favorites? 
      <LocationList locations={this.props.favorites} /> :
      'No locations..'
      
      return (
         <div className="favorites-container container content">
               {favoriteLocationsToDisplay}
         </div>
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
      fetchFavoriteLocations: () => dispatch(fetchFavoriteLocationsAction())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);

