import React from 'react';
import './style.scss'
//store
import { fetchLocationSuggestsAction } from '../../store/actions/locationActions'
import { connect } from 'react-redux'
//cmps
import SuggestionsList from '../../components/location/SuggestionsList/SuggestionsList';

const LocationSearch = (props) => {

   function fetchLocationSuggests(ev) {
      const queryString = ev.target.value
      props.fetchLocationSuggests(queryString)
   }

   return (
      <div className="location-search-cmp">
         <input type="text" onChange={fetchLocationSuggests} />
         <SuggestionsList suggestions={props.suggestions} />
      </div>
   );
}

const mapStateToProps = state => {
   return {
      suggestions: state.locationReducer.locationSuggests
   }
}

const mapDispatchToProps = dispatch => {
   return {
      fetchLocationSuggests: (queryString) => dispatch(fetchLocationSuggestsAction(queryString))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);