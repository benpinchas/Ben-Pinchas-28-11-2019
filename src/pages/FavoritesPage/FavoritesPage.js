import React from 'react';
import './style.scss' 
import FavoritesContainer from '../../containers/FavoritesContainer/FavoritesContainer';
const FavoritesPage = () => {
return (
 <div className="favorites-page container content">
    Favorite Locations
    <FavoritesContainer />
 </div>
 );
}
export default FavoritesPage;