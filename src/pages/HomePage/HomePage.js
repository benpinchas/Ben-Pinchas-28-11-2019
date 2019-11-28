import React from 'react';
import './style.scss'
import LocationSearch from '../../containers/LocationSearch/LocationSearch';
import LocationDetails from '../../containers/LocationDetails/LocationDetails';

const HomePage = () => {
   return (
      <div className="home-page container content">
         <LocationSearch />
         <LocationDetails />
      </div>
   );
}
export default HomePage;