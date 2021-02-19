import React, { useState } from "react";
import axios from "axios";
import ForecastDisplay from "./ForecastDisplay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <ForecastDisplay data={forecast.list[0]} />
        <ForecastDisplay data={forecast.list[1]} />
        <ForecastDisplay data={forecast.list[2]} />
        <ForecastDisplay data={forecast.list[3]} />
        <ForecastDisplay data={forecast.list[4]} />
        <ForecastDisplay data={forecast.list[5]} />
      </div>
    );
  } else {
    const apiKey = "93d7881ac49c74a4348f40565f092766";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=${unit}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleForecastResponse);

    return "loading";
  }
}
