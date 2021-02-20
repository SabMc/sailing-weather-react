import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function ForecastDisplay(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  function windSpeed() {
    let windSpeed = Math.round(props.data.wind.speed * 1.94384449);
    return `${windSpeed} knots`;
  }

  return (
    <div className="ForecastDisplay col">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
      <br />
      {windSpeed()}
    </div>
  );
}
