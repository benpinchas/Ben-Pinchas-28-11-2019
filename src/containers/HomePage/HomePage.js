import React from 'react';
import './style.scss'
import LocationFilter from '../LocationFilter/LocationFilter';

const HomePage = () => {
   return (
      <div className="container content">
         <LocationFilter />
      </div>
   );
}
export default HomePage;