const apiKey = "25d10da9fbfbd4e19d33de922a5a7900";
const latitude = "9.998";
const longitude = "-84.1165";

const weatherUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&cnt=24&units=imperial`;

fetch(weatherUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    processWeatherData(weatherData.list);
  });

function filterNoonWeather(weatherList) {
  const noonWeather = weatherList.filter(result => result.dt_txt.substring(11, 13) == '00');
  displayForecast(noonWeather);
}

function processWeatherData(weatherList) {
  let noonWeatherArray = [];
  weatherList.forEach((item) => {
    if (item.dt_txt.substring(11, 13) == '00') {
      noonWeatherArray.push(item);
    }
  });
  displayForecast(noonWeatherArray);
}

function displayForecast(forecastDays) {
  const forecastContainer = document.querySelector('#forecast');
  forecastDays.forEach((day) => {
    const temperatureElement = document.createElement('p');
    temperatureElement.className = "temp";
    temperatureElement.textContent = Math.floor(day.main.temp) + "°";
    
    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'desc';
    descriptionElement.textContent = day.weather[0].description;
    
    const iconElement = document.createElement('img');
    iconElement.src = `//openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
    iconElement.alt = day.weather[0].description;
    
    const dayElement = document.createElement('div');
    dayElement.appendChild(temperatureElement);
    dayElement.appendChild(descriptionElement);
    dayElement.appendChild(iconElement);
    
    forecastContainer.appendChild(dayElement);
  });
}