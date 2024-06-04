const API = "25d10da9fbfbd4e19d33de922a5a7900"
const Lat = "9.9987"
const Long = "-84.1165"

const currentWeather = `//api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Long}&appid=${API}&units=imperial`

fetch(currentWeather)
  .then((response) => response.json())
  .then((allData) => {
    showCurrent(allData)
  })

  function showCurrent(allData) {
    const tempNow = document.querySelector('#temp')
    tempNow.textContent = Math.floor(allData.main.temp)+'°'
    const conditionsNow = document.querySelector('#desc')
    conditionsNow.textContent = allData.weather[0].description
    const townName = document.querySelector('#town')
    townName.textContent = allData.name
    console.log(allData)
  }

