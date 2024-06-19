console.log("this works");
const API_KEY = config.WEATHER_API_KEY;
<body>
  ...
  
  <script src="config.js"></script>  
  <script src="javascript/main.js"></script>
</body>
// using concatenation
"https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode
fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10128&APPID=${WEATHER_API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data));
  function getWeatherData() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10128&APPID=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        // store the data in a variable of our choosing
        let local_weather_data = data;
        // log the data to the browser console
        console.log(local_weather_data);
      });
    }

    function getWeatherData() {
        // fetch request goes in here :-)
    }
    
    let btn = document.querySelector(".search-button");
    btn.addEventListener('click', getZipCode);
    
    function getZipCode() {
        e.preventDefault();
      console.log('I was clicked!');
    }

   // access elements in the DOM
let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let form = document.querySelector("form");

let CITY_NAME = document.querySelector(".city_name");
let CITY_TEMP = document.querySelector(".temperature");

// write a function to get weather data
  const getWeatherData = (zip) => {
  // store your open weather API Key
  const API_KEY = "[YOUR API KEY HERE]";
  // store the API endpoint and API key
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;

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
  form.reset();
  input.focus();
}

btn.addEventListener('click', getZipcode);

let image = document.querySelector("img");

const getWeatherData = (zip) => {
  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      let WEATHER_ICON = local_weather_data.weather[0].icon
      
      image.setAttribute('src', `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`)
  }
