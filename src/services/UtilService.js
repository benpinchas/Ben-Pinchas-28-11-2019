function getDayInWeekByDate(date) {
   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
   const dayIdx = new Date(date).getDay()
   return days[dayIdx]
}

function getFormattedHour(dateStr) {
   const localOffset = new Date(Date.now()).getTimezoneOffset() * 60000
   const utcTimestamp = Date.now() + localOffset
   const cityOffset = +(dateStr.slice(19,22)) * 60000 * 60

   const date = new Date(utcTimestamp + cityOffset)
   const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
   const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
   return  hour +':'+ minutes
}


export default {
   getDayInWeekByDate,
   getFormattedHour
}