import React from 'react';
import './style.scss'
//services
import UtilService from '../../../../services/UtilService'

const DayForcast = ({ dayForcast }) => {
   const dayInWeek = UtilService.getDayInWeekByDate(dayForcast.Date)
   const temperature = dayForcast.Temperature.Minimum.Value
   return (
      <li className="day-forcast-cmp floating-card">
         <span className="day"> {dayInWeek} </span>
         <span> {temperature} </span>
      </li>
   );
}
export default DayForcast;