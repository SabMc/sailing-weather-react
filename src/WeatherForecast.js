import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);

  function handleForecastResponse(response) {
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded) {
    return "loading";
  } else {
    const apiKey = "93d7881ac49c74a4348f40565f092766";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=${unit}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleForecastResponse);

    return props.city;
  }
}
