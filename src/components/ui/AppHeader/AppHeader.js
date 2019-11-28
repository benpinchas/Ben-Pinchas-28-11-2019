import React from 'react';
import './style.scss'
import { NavLink } from 'react-router-dom'
const AppHeader = () => {
   return (
      <header className="app-header-cmp">
         <div className="container content">
            <h2>App Name</h2>

            <nav>
               <NavLink exact to="/">Home</NavLink>
               <NavLink to="/favorites">Favorites</NavLink>
            </nav>
         </div>
      </header>
   );
}

export default AppHeader;