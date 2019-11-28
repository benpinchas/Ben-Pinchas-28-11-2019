import React from 'react';
import './style.scss'
const SuggestionsList = ({ suggestions }) => {
   const suggestionsToDisplay = suggestions.map(s => <li>{s.LocalizedName}</li>)
   return (
      <ul>
         {suggestionsToDisplay}
      </ul>
   );
}
export default SuggestionsList;