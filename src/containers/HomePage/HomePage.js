import React from 'react';
import './style.scss'
import LocationSearch from '../LocationSearch/LocationSearch';

const HomePage = () => {
   return (
      <div className="container content">
         <LocationSearch />
      </div>
   );
}
export default HomePage;