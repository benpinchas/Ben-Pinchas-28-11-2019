import React from 'react';
import './style.scss'
const SuggestsList = ({ suggestions, onSuggestClick }) => {
   const suggestionsToDisplay = suggestions.map(s => {
      return (
         <li
            className="suggest-preview"
            key={s.Key}
            onClick={onSuggestClick.bind(null, s)}>
            <span>{s.LocalizedName}</span> <span className="country">{s.Country.LocalizedName}</span>
         </li>
      )
   })
   return (
      <ul className="suggests-list-cmp">
         {suggestionsToDisplay}
      </ul>
   );
}
export default SuggestsList;