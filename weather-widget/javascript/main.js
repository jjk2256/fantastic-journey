console.log("this works");
const API_KEY = config.WEATHER_API_KEY;
function getWeatherData() {
// using concatenation
"https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode
fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10128&APPID=1d3af814e0c344bc1b4d8973771e6c37`)
  .then(response => response.json())
  .then(data => console.log(data));
}