const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

const tempDate = new Date()
const tempYear = tempDate.getFullYear()
const tempMonth = tempDate.getMonth()
const tempDay = tempDate.getDate()

const futureDate = new Date(tempYear, tempMonth, tempDay +10, 11, 30, 0)

const year = futureDate.getFullYear()
const month = months[futureDate.getMonth()]
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]
const hour = futureDate.getHours()
const minute = futureDate.getMinutes()

giveaway.textContent = `give away ends on ${weekday}, ${date} ${month} ${year} ${hour}: ${minute} am.`


function getRemaindingTime(){

    const today = new Date().getTime()
    const t = futureDate - today
    
    // one sec = 1000 ms
    // one min = 60 sec
    // one hour = 60 min
    // one day = 24 hours
    
    const oneMin = 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneDay = 24* 60 * 60 * 1000
    
    let days = Math.floor(t / oneDay)
    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor((t % oneHour)/ oneMin)
    let seconds = Math.floor((t % oneMin) / 1000)
    
    const values = [days,hours,minutes,seconds]
    
    function format (item){
        if (item < 10){
            return (item = `0${item}`)
        }
        return item
    }

    items.forEach(function(item,index){
        item.innerHTML = format(values[index])

    })





    if (t < 0 ){
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired! stay tuned!</h4>`
    }

}
let countdown = setInterval(getRemaindingTime,1000)

getRemaindingTime()