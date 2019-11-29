import React from 'react';
import './style.scss'
import DayForcast from '../DayForcast/DayForcast';
const WeekForcast = ({ weekForcast }) => {
   let weekForcastToDisplay = weekForcast.map(dayForcast => <DayForcast key={dayForcast.EpochDate} dayForcast={dayForcast} />)
   return (
      <ul className="week-forcast-cmp">
         {weekForcastToDisplay}
      </ul>
   );
}
export default WeekForcast;