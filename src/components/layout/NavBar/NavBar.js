import React from 'react';
import './style.scss'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
   return (
      <nav className="nav-bar-cmp">
         <NavLink exact to="/"><i class="fas fa-home"></i></NavLink>
         <NavLink to="/favorites"><i class="fas fa-heart"></i></NavLink>
      </nav>
   );
}
export default NavBar;