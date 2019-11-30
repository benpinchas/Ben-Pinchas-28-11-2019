import React from 'react';
import './style.scss'
import LocationPreview from '../LocationPreview/LocationPreview';

const LocationList = ({ locations, onLocationClick }) => {
   const locationListToDisplay = locations.length ?
      locations.map(location => <LocationPreview
         key={location.Key} location={location}
         onLocationClick={onLocationClick}
      />) :
      'No favorites yet..'

   return (
      <ul className="location-list-cmp responsive-grid">
         {locationListToDisplay}
      </ul>
   );
}
export default LocationList;