import React from 'react';
import './style.scss'
const ToggleHeart = ({isChecked, onClick}) => {
   const styleObj = {
      color: isChecked? 'tomato' : '#ccc'
   } 
   return (
      <span className="toggle-heart-cmp active" style={styleObj}>
         <i className="fas fa-heart" onClick={onClick}></i>
      </span>
   );
}
export default ToggleHeart;