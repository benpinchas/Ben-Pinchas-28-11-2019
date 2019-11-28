import React from 'react';
import './style.scss'
//store
import { fetchLocationSuggestsAction, setSelectedLocationNameAction } from '../../store/actions/locationActions'
import { connect } from 'react-redux'
//cmps
import SuggestionsList from '../../components/location/SuggestionsList/SuggestionsList';

const LocationSearch = (props) => {

   function fetchLocationSuggests(ev) {
      const queryString = ev.target.value
      props.fetchLocationSuggests(queryString)
   }

   function handleSuggestClick(details) {
      props.setSelectedLocationDetails(details)
   }

   return (
      <div className="location-search-cmp">
         <input type="text" onChange={fetchLocationSuggests} placeholder="Search for a place.." />
         {
            props.suggestions &&
            <SuggestionsList suggestions={props.suggestions} onSuggestClick={handleSuggestClick} />
         }
      </div>
   );
}

const mapStateToProps = state => {
   return {
      suggestions: state.locationReducer.locationSuggests
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchLocationSuggests: (queryString) => dispatch(fetchLocationSuggestsAction(queryString)),
      setSelectedLocationDetails: (locationDetails) => dispatch(setSelectedLocationNameAction(locationDetails))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);