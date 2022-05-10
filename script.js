const timeDigit = document.querySelector('.timeDigit')
const hourStroke = document.querySelector('.line-3')
const minuteStroke = document.querySelector('.line-1')
const secondStroke = document.querySelector('.line-2')
const darkSwitcher = document.getElementById('dark-switcher')
const body = document.body
let switcherId = true

keepClockGoing()

darkSwitcher.addEventListener('click', (e) => {
  body.classList.toggle('dark-active')
  if (switcherId) {
    e.target.innerHTML = 'Light Mode'
  } else {
    e.target.innerHTML = 'Dark Mode'
  }
  switcherId = !switcherId
})

function getWeekDay(day) {
  let weekday = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ]
  return weekday[day]
}

setInterval(() => {
  keepClockGoing()
}, 1000)

function keepClockGoing() {
  let now = new Date()
  let added = new Date().getMinutes()
  if (added <= 9) {
    added = 0
  } else {
    added = ''
  }

  timeDigit.innerHTML = `<p>${now.getHours()} : ${added}${now.getMinutes()}</p><p class='dayOfWeek'>${getWeekDay(
    now.getDay()
  )}, ${now.toLocaleString('default', {
    month: 'long',
  })} <span class='date-number'>${now.getDate()}</span></p>`

  secondStroke.style.transform = `rotate(${scale(
    now.getSeconds(),
    0,
    60,
    0,
    360
  )}deg)`
  hourStroke.style.transform = `rotate(${scale(
    now.getHours()*2,
    0,
    24,
    0,
    360
  )}deg)`
  minuteStroke.style.transform = `rotate(${scale(
    now.getMinutes(),
    0,
    60,
    0,
    360
  )}deg)`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
