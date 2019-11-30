import React from 'react';
import './style.scss'
import DayForecast from '../DayForecast/DayForecast';
const WeekForecast = ({ weekForecast }) => {
   let weekForecastToDisplay = weekForecast.map(dayForecast => <DayForecast key={dayForecast.EpochDate} dayForecast={dayForecast} />)

   return (
      <ul className="week-forecast-cmp responsive-grid">
         {weekForecastToDisplay}
      </ul>
   );
}
export default WeekForecast;