console.log("this works");
const API_KEY = config.WEATHER_API_KEY;
<body>
  ...
  
  <script src="config.js"></script>  
  <script src="javascript/main.js"></script>
</body>
console.log("Hello, World!");
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

    let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");

getWeatherData = (zip) => {
  let API_KEY = config.WEATHER_API_KEY;
  let API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;

  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      let local_weather_data = data;
        console.log(local_weather_data)
    })
  }

const getZipCode = (e) => {
  e.preventDefault();
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
};

btn.addEventListener("click", getZipCode);