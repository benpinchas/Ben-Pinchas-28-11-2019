import React from 'react';
import './style.scss'
const SuggestionsList = ({ suggestions, onSuggestClick }) => {
   const suggestionsToDisplay = suggestions.map(s => {
      return (
         <li
            className="suggest-preview"
            key={s.Key}
            onClick={onSuggestClick.bind(null, s)}>
            {s.LocalizedName}
         </li>
      )
   })
   return (
      <ul className="suggestion-list-cmp">
         {suggestionsToDisplay}
      </ul>
   );
}
export default SuggestionsList;