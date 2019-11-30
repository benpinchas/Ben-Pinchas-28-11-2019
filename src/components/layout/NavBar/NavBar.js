import React from 'react';
import './style.scss'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
   return (
      <nav className="nav-bar-cmp">
         <NavLink exact to="/">Home</NavLink>
         <NavLink to="/favorites">Favorties</NavLink>
      </nav>
   );
}
export default NavBar;