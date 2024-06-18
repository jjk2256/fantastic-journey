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