import React from 'react';
import './style.scss' 
import LocationPreview from '../LocationPreview/LocationPreview';

const LocationList = ({locations}) => {
const locationListToDisplay = locations.map(location => <LocationPreview key={location.Key} location={location} />)
return (
 <ul className="location-list-cmp">
    {locationListToDisplay}
 </ul>
 );
}
export default LocationList;