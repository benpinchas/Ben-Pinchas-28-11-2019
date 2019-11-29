import React from 'react';
import './style.scss'
const DayForcast = ({ dayForcast }) => {
   return (
      <li className="day-forcast-cmp floating-card">
            {dayForcast.Temperature.Minimum.Value}
      </li>
   );
}
export default DayForcast;