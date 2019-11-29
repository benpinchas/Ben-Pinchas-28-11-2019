import React from 'react';
import './style.scss'
//store
import { connect } from 'react-redux'
import { setSelectedLocationAction, fetchLocationSuggestsAction } from '../../store/actions/locationActions'
//cmps
import SuggestionsList from './components/SuggestsList/SuggestsList';

class LocationSearch extends React.Component {
   state = {
      isFocus: false,
      term: ''
   }


   setSelectedLocation = (locationDetails) => {
      const { LocalizedName } = locationDetails
      this.setState({ term: LocalizedName })
      this.props.setSelectedLocation(locationDetails)
   }

   onFocus = () => {
      this.setState({ isFocus: true })
   }

   onBlur = () => {
      setTimeout(() => //FIX
         this.setState({ ...this.state, isFocus: false })
         , 100)

   }

   onInputChange = (ev) => {
      const term = ev.target.value
      this.setState(
         (state) => ({ ...state, term: term }),
         () => this.props.fetchLocationSuggests(term)
      )
   }

   render() {
      const { suggestions } = this.props
      const { isFocus } = this.state
      return (
         <div className="location-search-cmp">
            <input
               type="text"
               onChange={this.onInputChange}
               value={this.state.term}
               onFocus={this.onFocus}
               onBlur={this.onBlur}
               placeholder="Search for a place.." />
            {
               isFocus && suggestions &&
               <SuggestionsList suggestions={suggestions} onSuggestClick={this.setSelectedLocation} />
            }
         </div>
      );
   }
}



const mapStateToProps = state => {
   return {
      suggestions: state.locationReducer.locationSuggests
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchLocationSuggests: (term) => dispatch(fetchLocationSuggestsAction(term)),
      setSelectedLocation: (locationDetails) => dispatch(setSelectedLocationAction(locationDetails)) //FIX
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);