import React from 'react';
import './style.scss'
import NavBar from '../NavBar/NavBar';

const AppHeader = () => {
   return (
      <header className="app-header-cmp">
         <div className="container content">
            <h2>Weather App</h2>
            
            <NavBar />
          
         </div>
      </header>
   );
}

export default AppHeader;