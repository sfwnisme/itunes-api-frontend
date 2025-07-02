export const msToMinutes = (ms: number) => {
  const minutes = Math.floor(ms / 60 / 1000)
  const text = minutes >= 60 ? 'hr' : 'min'
  return `${minutes}${text}`
}

export const formatDate = (date: string) => {
  const dateObj = new Date(date)
  const day = dateObj.getDate()
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  const month = monthNames[dateObj.getMonth()]
  return `${day} ${month}`
}

export const truncate = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text
}