console.log("Connected");

// Ask users location coordinates
// Pass those coordinates to an API
// Give the weather data to the user.
// If the user neglects to give location details. We will simply say. Sorry your location is required. / Default weather for India.

var OPEN_WEATHER_API_KEY = "60718ee58835000de18bdedaa92bf64e";
var BASE_URL = "https://api.openweathermap.org/data/2.5/";
var IMAGE_URL = "https://openweathermap.org/img/w/";

// DOM elements
var getLocationButton = document.querySelector("button");
var weatherForm = document.querySelector("form");

function successCallBack(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  fetchWeatherCoords(lat, lng).then(function (weatherData) {
    renderData(weatherData);
  });
}

function errorCallback(err) {
  if (err.code === 1) {
    alert(
      "Sorry you cant see your weather, if you havent shared the location coordinates."
    );
    getLocationButton.remove();
  }
}

function fetchWeatherCoords(latitude, longitude) {
  var weatherPromise = fetch(
    `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var weatherResponse = {
        weather: data.weather,
        temp: convertToCelsius(data.main.temp),
        tempMin: convertToCelsius(data.main.temp_min),
        tempMax: convertToCelsius(data.main.temp_max),
        name: data.name
      };
      return weatherResponse;
    })
    .catch(function (err) {
      console.log(err);
    });

  return weatherPromise;
}

function convertToCelsius(kelvin) {
  return parseFloat((kelvin - 273.15).toFixed(2));
}

function renderData(data) {
  var weatherHTML = document.querySelector(".weatherdata");
  if (weatherHTML) weatherHTML.remove();

  var image = data.weather[0].icon;
  var description = data.weather[0].description;
  var renderedHTML = `<div class="weatherdata">
  <h3>Name: ${data.name}</h3>
  <div class="weather-description">
    <img src="http://openweathermap.org/img/w/${image}.png" alt="weather" />
    <p>Description: ${description}</p>
  </div>
  <div class="weather-temperature">
    <h4>Temperature: ${data.temp}°C</h4>
    <h4>Temperature Max: ${data.tempMax}°C</h4>
    <h4>Temperature Min: ${data.tempMin}°C</h4>
  </div>
</div>`;
  weatherForm.insertAdjacentHTML("afterend", renderedHTML);
}

function fetchWeatherCity(cityName) {
  var weatherPromise = fetch(
    `${BASE_URL}/weather?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var weatherResponse = {
        weather: data.weather,
        temp: convertToCelsius(data.main.temp),
        tempMin: convertToCelsius(data.main.temp_min),
        tempMax: convertToCelsius(data.main.temp_max),
        name: data.name
      };
      return weatherResponse;
    })
    .catch(function (err) {
      alert("No weather for this location");
    });

  return weatherPromise;
}

weatherForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var city = event.target.city.value;
  fetchWeatherCity(city).then(function (weatherData) {
    event.target.city.value = "";
    renderData(weatherData);
  });
});

function init() {
  navigator.permissions
    .query({
      name: "geolocation"
    })
    .then(function (permission) {
      // is geolocation granted?
      console.log(permission.state);
      if (permission.state === "granted" || permission.state === "prompt") {
        getLocationButton.addEventListener("click", function (event) {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              successCallBack,
              errorCallback
            );
          } else {
            alert("Geolocation is not available");
          }
        });
      } else {
        getLocationButton.remove();
      }
    });
}

// Code starts
init();
