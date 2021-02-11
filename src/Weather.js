import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      temperatureMax: response.data.main.temp_max,
      temperatureMin: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,

      visibility: response.data.visibility,
    });
    setLoaded(true);
  }
  if (loaded) {
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
        <h2>{weatherData.city}</h2>
        <div className="row">
          <div className="col-4">
            <ul>
              <li>Wednesday</li>
              <li>10 Feb 2021 </li>
              <li>09:48</li>
            </ul>
          </div>
          <div className="col-4">
            <ReactAnimatedWeather
              icon="WIND"
              color="#7D5F41"
              size={80}
              animate={false}
            />
          </div>
          <div className="col-4">
            <ul>
              <li>
                {Math.round(weatherData.temperatureMax)} |{" "}
                {Math.round(weatherData.temperatureMin)} °C
              </li>
              <li>Humidity {weatherData.humidity}%</li>
              <li>{weatherData.pressure} hPa</li>
            </ul>
          </div>
        </div>
        <h3>Beaufort 3: Gentle Breeze</h3>
        <div className="row justify-content-center">
          <div className="col-6">
            <ul>
              <li>Wind {Math.round(weatherData.wind * 1.94384449)} knots</li>

              <li>SSE</li>
              <li>Visibility {Math.round(weatherData.visibility / 1000)} km</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "93d7881ac49c74a4348f40565f092766";
    let city = "Amsterdam";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
