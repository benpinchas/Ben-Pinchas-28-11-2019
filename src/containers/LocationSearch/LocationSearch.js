import React from 'react';
import './style.scss'
//store
import { connect } from 'react-redux'
import { setSelectedLocationAction, fetchLocationSuggestsAction } from '../../store/actions/locationActions'
//cmps
import SuggestionsList from './components/SuggestsList/SuggestsList';
//swal
import Swal from 'sweetalert2'

class LocationSearch extends React.Component {
   state = {
      isFocus: false,
      term: ''
   }

   setSelectedLocation = (location) => {
      this.setState({ term: location.LocalizedName })
      this.props.setSelectedLocation(location)
   }

   onFocus = () => {
      this.setState({ isFocus: true })
   }

   onBlur = () => {
      this.setState({ ...this.state, isFocus: false })
   }


   onInputChange = (ev) => {
      const term = ev.target.value
      this.setState(
         (state) => ({ ...state, term: term }),
         () => this.props.fetchLocationSuggests(term)
            .catch((err) => {
               this.setState({term: ''}) //clean the input
               Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: "Something went wrong!",
               })
            })
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
      setSelectedLocation: (location) => dispatch(setSelectedLocationAction(location))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);