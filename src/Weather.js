import React, { useState } from "react";
import axios from "axios";
//import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      day: "Wednesday",
      date: "12 Feb 2021",
      time: "10:13",
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temp: response.data.main.temp,
      temperatureMax: response.data.main.temp_max,
      temperatureMin: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      visibility: response.data.visibility,
    });
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="SearchForm">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Sailing Destination"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="Search w-100 btn btn-light"
                  value="Fair Wind"
                />
              </div>
            </div>
          </form>
        </div>
        <h2>
          {Math.round(weatherData.temp)}°C in {weatherData.city}
        </h2>
        <div className="row">
          <div className="col-4">
            <ul>
              <li>{weatherData.day}</li>
              <li>{weatherData.date}</li>
              <li>{weatherData.time}</li>
            </ul>
          </div>
          <div className="col-4">
            <img src={weatherData.icon} alt={weatherData.description} />
          </div>
          <div className="col-4">
            <ul>
              <li>
                {Math.round(weatherData.temperatureMax)}° |{" "}
                {Math.round(weatherData.temperatureMin)}° C
              </li>
              <li>Humidity {weatherData.humidity}%</li>
              <li>{weatherData.pressure} hPa</li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-6">
            <ul>
              <li>
                <h3>Beaufort 3: Gentle Breeze</h3>
              </li>
              <li>Wind {Math.round(weatherData.wind * 1.94384449)} knots</li>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>Visibility {Math.round(weatherData.visibility / 1000)} km</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "93d7881ac49c74a4348f40565f092766";

    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
