const startDate = new Date('Apr 21, 2023').toLocaleDateString()
const date = new Date()
const calendar = document.getElementById('calendar')
console.log(startDate.toLocaleString())
console.log(date.toLocaleDateString())

calendar.append(`${startDate}`)