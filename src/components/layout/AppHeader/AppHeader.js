import React from 'react';
import './style.scss'
//cmps
import NavBar from '../NavBar/NavBar';
import ToogleUnit from '../../ToggleUnit/ToggleUnit'
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const AppHeader = () => {
   return (
      <header className="app-header-cmp">
         <div className="container">
            <div className="widget-container">
               <ToggleTheme />
               <ToogleUnit />
            </div>
            <div className="main">
               <h2>Weather App</h2>
               <NavBar />
            </div>

         </div>
      </header>
   );
}

export default AppHeader;