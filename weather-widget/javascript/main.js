const API_KEY = config.WEATHER_API_KEY;
// access elements in the DOM
let input = document.querySelector(".zip_code");
let btn = document.querySelector(".search-button");
let form = document.querySelector("form");

let CITY_NAME = document.querySelector(".city_name");
let CITY_TEMP = document.querySelector(".temperature");
let image = document.querySelector("img");

// write a function to get weather data
  const getWeatherData = (zip) => {
  // store your open weather API Key
  const API_KEY = "[API_KEY]";
  // store the API endpoint and API key
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip={zip_code},{country_code}&appid={API_KEY}`;

  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      // store the requested data in a variable
      let local_weather_data = data;
      // manipulate the city name content
      CITY_NAME.textContent = local_weather_data.name;
      // process the temperature data before manipulating the content
      let weather_in_celsius = Math.round(
        local_weather_data.main.temp - 273
      );
      // manipulate the temperature content
      CITY_TEMP.textContent = weather_in_celsius + " C"
  });
}

const getZipcode = e => {
  e.preventDefault();
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
}

btn.addEventListener('click', getZipcode);