  

export const dateFormat = (event) => {
   let date = JSON.stringify(event)
    date = date.slice(1, 11)
    return date
 }


 export const formatDateTimeStamp = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric", hour: '2-digit', minute: '2-digit', second: '2-digit' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}



export const formatTimeFromDate = (dateTime) => {
  let date = new Date(dateTime)
  console.log( date.toTimeString().slice(0,5))
  return date.toTimeString().slice(0,5)
}
