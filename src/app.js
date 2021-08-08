function formatDate (timestamp) {
  let date = new Date(timestamp);
  let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
  let day = days[date.getDay()];
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `${day} | ${hour}:${minute}`;
}

function getTemperature (response) {
  console.log(response.data);
  let h1Element = document.querySelector("#city");
  let currentTempElement = document.querySelector(".number");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector('#date-time');

  h1Element.innerHTML = response.data.name;
  currentTempElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  timeElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = '0e058f62fe2dafe733ff53545a2cf37c';
let city = "Berlin";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(getTemperature);

// function updateCity(event) {
//   event.preventDefault();

//   let typeCity = document.querySelector("#type-city");
//   let h1 = document.querySelector("#city");

//   h1.innerHTML = `${typeCity.value}`;

//   let apiKey = "0e058f62fe2dafe733ff53545a2cf37c";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${typeCity.value}&appid=${apiKey}&units=metric`;

//   axios.get(apiUrl).then(getTemp);
// }

// function getTemp(response) {
//   let currentCityTemp = Math.round(response.data.main.temp);

//   let currentTemperature = document.querySelector(".number");
//   currentTemperature.innerHTML = `${currentCityTemp}°`;
// }

// let searchCity = document.querySelector("#search-bar");
// searchCity.addEventListener("submit", updateCity);

// let currentLocation = document.querySelector("#current-location");
// currentLocation.addEventListener("submit", updateCurrentLocationTemp);

// function here(position) {
//   console.log(position.coords.longitude);
//   console.log(position.coords.latitude);

//   let currentLongitude = position.coords.longitude;
//   let currentLatitude = position.coords.latitude;

//   let apiKey = "0e058f62fe2dafe733ff53545a2cf37c";
//   let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric`;

//   axios.get(apiURL).then(showTemperature);
// }

// function showTemperature

// navigator.geolocation.getCurrentPosition(here);

let now = new Date();

let current = document.querySelector("#date-time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = days[now.getDay()];

let currentHour = now.getHours();
let currentMinutes = now.getMinutes();

current.innerHTML = `${currentDay} | ${currentHour}:${currentMinutes}`;

// function changeTemp(event) {
//   event.preventDefault();
//   currentTemperature.innerHTML = `20°`;
// }

// let celsius = document.querySelector(".celsius");
// celsius.addEventListener("click", changeTemp);

// function changeTempBack(event) {
//   event.preventDefault();
//   currentTemperature.innerHTML = `77°`;
// }

// let farenheit = document.querySelector(".farenheit");
// farenheit.addEventListener("click", changeTempBack);