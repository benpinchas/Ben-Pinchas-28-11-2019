import React from 'react';
import './style.scss'
import NavBar from '../NavBar/NavBar';
import ToogleUnit from '../../ToggleUnit/ToggleUnit'

const AppHeader = () => {
   return (
      <header className="app-header-cmp">
         <div className="main container">
            <h2>Weather App</h2>
            <ToogleUnit />
            <NavBar />
         </div>
      </header>
   );
}

export default AppHeader;