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

function getInfo (response) {
  let h1Element = document.querySelector("#city");
  let currentTempElement = document.querySelector(".number");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector('#date-time');
  let iconElement = document.querySelector("#icon");

  farenheitTemperature = response.data.main.temp;

  h1Element.innerHTML = response.data.name;
  currentTempElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  timeElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

function search(city) {
  let apiKey = '0e058f62fe2dafe733ff53545a2cf37c';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(getInfo);
}

function handleSubmit (event) {
  event.preventDefault();
  let searchInput = document.querySelector("#type-city");
  search(searchInput.value);
}

function showCelsiusTemperature(event) {
  event.preventDefault();
  farenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
  let celsiusTemperature = Math.round((farenheitTemperature -32) * 5 / 9);
  let temperatureElement = document.querySelector(".number");
  temperatureElement.innerHTML = celsiusTemperature;
}

function showFarenheitTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  farenheitLink.classList.add("active");
  let temperatureElement = document.querySelector(".number");
  temperatureElement.innerHTML = Math.round(farenheitTemperature);
}

let farenheitTemperature = null;

let form = document.querySelector("#search-bar");
form.addEventListener("submit", handleSubmit);

let celsiusLink = document.querySelector(".celsius");
celsiusLink.addEventListener("click", showCelsiusTemperature);

let farenheitLink = document.querySelector(".farenheit");
farenheitLink.addEventListener("click", showFarenheitTemperature);

search ("New York");