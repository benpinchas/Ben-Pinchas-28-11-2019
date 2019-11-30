function getDayInWeekByDate(date) {
   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
   const dayIdx = new Date(date).getDay()
   return days[dayIdx]
}


export default {
   getDayInWeekByDate
}