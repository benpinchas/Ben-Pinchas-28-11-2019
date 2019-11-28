import React from 'react';
import './style.scss'
//store
import { fetchLocationNameSuggestions } from '../../store/actions/locationActions'
import { connect } from 'react-redux'
//cmps
import SuggestionsList from '../../components/location/SuggestionsList/SuggestionsList';

const LocationFilter = (props) => {

   function fetchLocationNameSuggestions(ev) {
      const queryString = ev.target.value
      props.fetchLocationNameSuggestions(queryString)
   }

   return (
      <div className="location-filter-cmp">
         <input type="text" onChange={fetchLocationNameSuggestions} />
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
      fetchLocationNameSuggestions: (queryString) => dispatch(fetchLocationNameSuggestions(queryString))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);